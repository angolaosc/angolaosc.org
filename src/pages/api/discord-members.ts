import type { NextApiRequest, NextApiResponse } from 'next';

type DiscordData = {
  memberCount: number;
  members: {
    id: string;
    username: string;
    avatarUrl: string;
  }[];
};

type ErrorResponse = {
  error: string;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DiscordData | ErrorResponse>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get environment variables
    const guildId = process.env.DISCORD_GUILD_ID;
    const botToken = process.env.DISCORD_BOT_TOKEN;
    
    // Check if required environment variables are present
    if (!guildId || !botToken) {
      return res.status(500).json({ error: 'Missing Discord configuration' });
    }
    
    // Get guild info (including member count)
    const guildResponse = await fetch(`https://discord.com/api/v10/guilds/${guildId}?with_counts=true`, {
      headers: {
        Authorization: `Bot ${botToken}`,
      },
    });
    
    if (!guildResponse.ok) {
      throw new Error(`Discord API guild error: ${guildResponse.status}`);
    }
    
    const guildData = await guildResponse.json();
    
    // Get some members
    const membersResponse = await fetch(`https://discord.com/api/v10/guilds/${guildId}/members?limit=10`, {
      headers: {
        Authorization: `Bot ${botToken}`,
      },
    });
    
    if (!membersResponse.ok) {
      throw new Error(`Discord API members error: ${membersResponse.status}`);
    }
    
    const membersData = await membersResponse.json();
    
    // Format the data
    const discordData: DiscordData = {
      memberCount: guildData.approximate_member_count || 0,
      members: membersData.map((member: any) => ({
        id: member.user.id,
        username: member.user.username,
        avatarUrl: member.user.avatar 
          ? `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png?size=128`
          : `https://cdn.discordapp.com/embed/avatars/${parseInt(member.user.id) % 5}.png`
      }))
    };
    
    // Cache for 1 hour
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    return res.status(200).json(discordData);
  } catch (error) {
    console.error("Error fetching Discord data:", error);
    return res.status(500).json({ error: 'Failed to fetch Discord data' });
  }
}