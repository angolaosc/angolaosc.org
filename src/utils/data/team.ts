import { i18n } from "@/translate/i18n";

export const TEAM = [
  {
    id: 1,
    name: "António Pedro",
    ocupation:i18n.t('team.member_1.occupation'),
    avatar: "/antonio.jpg",
    description:i18n.t('team.member_1.description'),
  },
  {
    id: 2,
    name: "Patrick Matenda",
    ocupation: i18n.t('team.member_2.occupation'),
    avatar: "/patrick.jpg",
    description:i18n.t('team.member_2.description'),
  },
  {
    id: 3,
    name: "Jessé Inglês",
    ocupation: i18n.t('team.member_3.occupation'),
    avatar: "/jesse.jpeg",
    description:i18n.t('team.member_3.description'),
  },
  {
    id: 4,
    name: "Magalhaes Lemos",
    ocupation:i18n.t('team.member_4.occupation'),
    avatar: "/magalhaes.png",
    description:i18n.t('team.member_4.description'),
  }/*,
  {
    id: 5,
    name: "Rubinaldo Domingos",
    ocupation: i18n.t('team.member_5.occupation'),
    avatar: "/rubinaldo.jpeg",
    description: i18n.t('team.member_5.description'),
  },*/
];
