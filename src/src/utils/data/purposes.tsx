import { Brain, Coffee, Confetti } from "phosphor-react";


var language = [
  ["Fomentar a cultura do software livre.","Promote the culture of open source software.","Promouvoir la culture du logiciel libre."],
["Promover a conscientização sobre os benefícios do software de código aberto e incentivar seu uso em Angola.","Promote awareness of the benefits of open-source software and encourage its use in Angola.","Promouvoir la sensibilisation aux avantages des logiciels open source et encourager leur utilisation en Angola."],
["Acelerar o desenvolvimento de código aberto.","Accelerate the development of open-source software.","Accélérer le développement de logiciels open source."],
["Oferecer recursos e programas de mentoria, workshops, e outros eventos para ajudar o desenvolvedor angolano aprender, e contribuir a se destacar no código aberto.","Provide resources and mentoring programs, workshops, and other events to help Angolan developers learn and excel in open source.","Fournir des ressources et des programmes de mentorat, des ateliers et d'autres événements pour aider les développeurs angolais à apprendre et à exceller dans le code source ouvert."],
["Estabelecer parcerias e colaborações.","Establish partnerships and collaborations.","Établir des partenariats et des collaborations."],
["Fortalecer a comunidade de software livre em Angola, facilitando a troca de conhecimento, recursos e experiências entre desenvolvedores.","Strengthen the open-source software community in Angola by facilitating the exchange of knowledge, resources, and experiences among developers.","Renforcer la communauté du logiciel libre en Angola en facilitant l'échange de connaissances, de ressources et d'expériences entre les développeurs."]]


export const PURPOSES = [
  {
    id: 1,
    Icon: (
      <Brain weight="duotone" size={40} color="#FE5C5C" />
    ),
    title: language[0][0],
    body: language[1][0],
  },
  {
    id: 2,
    Icon: (
      <Coffee weight="duotone" size={40} color="#FE5C5C" />
    ),
    title: language[2][0],
    body: language[3][0],
  },
  {
    id: 3,
    Icon: (
      <Confetti
        weight="duotone"
        size={40}
        color="#FE5C5C"
      />
    ),
    title: language[4][0],
    body: language[5][1],
  },
];
