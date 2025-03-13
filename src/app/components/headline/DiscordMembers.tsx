import { useState, useEffect } from 'react';
import Image from 'next/image';

interface DiscordMember {
  id: string;
  username: string;
  avatarUrl: string;
}

interface DiscordData {
  memberCount: number;
  members: DiscordMember[];
}

export default function DiscordMembers({ i18n }: { i18n: any }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [discordData, setDiscordData] = useState<DiscordData | null>(null);

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch('/api/discord-members');
        if (!response.ok) {
          throw new Error(`Failed to fetch Discord data: ${response.status}`);
        }
        const data = await response.json();
        setDiscordData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordData();
  }, []);

  if (loading) return <div className="animate-pulse p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">Error loading</div>;
  if (!discordData) return null;

  // Format member count for display
  const formattedMemberCount = discordData.memberCount.toLocaleString();

  return (
    <div className="flex items-center gap-2 flex-col-reverse xl:flex-row">
      <div className="flex -space-x-3 overflow-hidden p-2 px-0">
        {discordData.members.map(member => (
          <Image
            key={member.id}
            src={member.avatarUrl}
            alt={`${member.username}'s avatar`}
            width={32}
            height={32}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
          />
        ))}
      </div>
      <span className="dark:text-slate-400 text-base font-semibold">
        {i18n.t('headline.info', { count: formattedMemberCount })}
      </span>
    </div>

  );
}