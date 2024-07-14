import { i18n } from "@/translate/i18n";

export const TEAM = [
  {
    id: 1,
    name: "António Pedro",
    ocupation: i18n.t("team.member_1.occupation"),
    avatar: "/antonio.jpg",
    description: i18n.t("team.member_1.description"),
    teamsId: [1, 2, 3, 4],
  },
  {
    id: 2,
    name: "Lázaro Manuel",
    ocupation: i18n.t("team.member_2.occupation"),
    avatar: "/lazaro.jpg",
    description: i18n.t("team.member_2.description"),
    teamsId: [1, 2, 3, 4],
  },
  {
    id: 3,
    name: "Cláudio da Silva",
    ocupation: i18n.t("team.member_3.occupation"),
    avatar: "/claudio.jpeg",
    description: i18n.t("team.member_3.description"),
    teamsId: [1, 2, 3, 4],
  },
  {
    id: 4,
    name: "Wilmy Danguya",
    ocupation: i18n.t("team.member_4.occupation"),
    avatar: "/danguya.jpeg",
    description: i18n.t("team.member_4.description"),
    teamsId: [1, 2, 3, 4],
  },
  // {
  //   id: 5,
  //   name: "Lázaro Inácio",
  //   ocupation: "Software Developer",
  //   avatar: "/avatar.avif",
  //   description:
  //     "Conheci meu amor através dessa plataforma e não poderia estar mais feliz.",
  // },
];
export const TEAM_TITLE = [
  { id: 1, title: i18n.t("team.title_2") },
  { id: 2, title: i18n.t("team.title_3") },
  { id: 3, title: i18n.t("team.title_4") },
  { id: 4, title: i18n.t("team.title_5") },
];
