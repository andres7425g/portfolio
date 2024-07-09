import Project from "@/model/project.model";
import privateProject from "@/public/assets/projects/private.svg";
import pokedex from "@/public/assets/projects/pokedex.png";
import newsRcn from "@/public/assets/projects/newsrcn.jpg";
import eclatApp from "@/public/assets/projects/eclatapp.jpg";
import semana from "@/public/assets/projects/semana.png";

const projects: Project[] = [
  {
    title: "RM Calendar",
    description:
      "The Resource Manager Calendar is a resource management solution featuring drag and drop and resizing of assignment tiles into rows representing resources. These resources are people assigned to the different projects the resource manager or project manager has under their umbrella.",
    imageUrl: privateProject.src,
    skills: [
      "Nextjs",
      "Redux",
      "Grapql",
      "nodeJS",
      "Typescript",
      "Azure DevOps",
      "Docker",
      "Cypress",
      "Jest",
    ],
  },
  {
    title: "Pokedex",
    description:
      "Using the free PokeAPI, create an interactive Pokedex list of all Pokémon, view descriptions, build a team, and quickly analyze the balance, strengths, and weaknesses of the team.",
    imageUrl: pokedex.src,
    skills: ["Nextjs", "Context API", "Docker", "Jest", "Cypress"],
  },
  {
    title: "RCN News App",
    description:
      "Mobile application for one of the biggest changes in television in Colombia. Users can watch the most recent news in Colombia and worldwide.",
    imageUrl: newsRcn.src,
    skills: ["React Native", "Context API", "Drupal", "Android", "iOS"],
  },
  {
    title: "EclatApp",
    description:
      "Cleaner mobile application for customers and service providers. Allows users to request and offer cleaning services at the customer's house, with GPS location and a payment system.",
    imageUrl: eclatApp.src,
    skills: ["React Native", "TypeScript", "NestJS", "Firebase"],
  },
  {
    title: "Semana.com",
    description:
      "Re-build and redesign of the semana.com website using ReactJS and ARC (Washington Post CMS).",
    imageUrl: semana.src,
    skills: ["ReactJS", "ARC", "Jest"],
  },
];

export default projects;
