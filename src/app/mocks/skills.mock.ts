import reactLogo from "@/public/assets/skills/react.svg";
import reduxLogo from "@/public/assets/skills/redux.svg";
import jsLogo from "@/public/assets/skills/js.svg";
import nextJSLogo from "@/public/assets/skills/next-js.svg";
import htmlLogo from "@/public/assets/skills/html.svg";
import cssLogo from "@/public/assets/skills/css.svg";
import sassLogo from "@/public/assets/skills/sass.svg";
import jestLogo from "@/public/assets/skills/jest.svg";
import cypressLogo from "@/public/assets/skills/cypress.svg";
import graphqlLogo from "@/public/assets/skills/graphql.svg";
import nodejsLogo from "@/public/assets/skills/nodejs.svg";
import expressLogo from "@/public/assets/skills/express.svg";
import nestLogo from "@/public/assets/skills/nestjs.svg";
import mysqlLogo from "@/public/assets/skills/mysql.svg";
import dockerLogo from "@/public/assets/skills/docker.svg";
import firebaseLogo from "@/public/assets/skills/firebase.svg";
import tsLogo from "@/public/assets/skills/ts.svg";
import apiLogo from "@/public/assets/skills/api.svg";
import gitLogo from "@/public/assets/skills/git.svg";
import huskyLogo from "@/public/assets/skills/husky.svg";

import { SkillCategory } from "@/model/skill.model";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      {
        title: "ReactJS / Native",
        logo: reactLogo,
        description: "A JavaScript library for building user interfaces.",
      },
      {
        title: "Redux",
        logo: reduxLogo,
        description:
          "A library of predictable state containers for JavaScript applications.",
      },
      {
        title: "Next.js",
        logo: nextJSLogo,
        description: "A React framework for production.",
      },
      {
        title: "JavaScript",
        logo: jsLogo,
        description:
          "A programming language that conforms to the ECMAScript specification.",
      },
      {
        title: "HTML",
        logo: htmlLogo,
        description:
          "The standard markup language for documents designed to be displayed in a web browser.",
      },
      {
        title: "CSS",
        logo: cssLogo,
        description:
          "A stylesheet language used to describe the presentation of a document written in HTML or XML.",
      },
      {
        title: "SASS",
        logo: sassLogo,
        description:
          "A preprocessor scripting language that is interpreted or compiled into CSS.",
      },
      {
        title: "TypeScript",
        logo: tsLogo,
        description:
          "A strongly typed programming language that builds on JavaScript.",
      },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      {
        title: "NodeJS",
        logo: nodejsLogo,
        description:
          "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      },
      {
        title: "ExpressJS",
        logo: expressLogo,
        description:
          "A minimal and flexible Node.js web application framework.",
      },
      {
        title: "NestJS",
        logo: nestLogo,
        description:
          "A progressive Node.js framework for building efficient, reliable, and scalable server-side applications using TypeScript.",
      },
      {
        title: "MYSQL",
        logo: mysqlLogo,
        description:
          "An open-source relational database management system based on SQL – Structured Query Language.",
      },
      {
        title: "GraphQL",
        logo: graphqlLogo,
        description: "A query language for your API.",
      },
      {
        title: "API Development",
        logo: apiLogo,
        description: "The practice of building and maintaining APIs.",
      },
    ],
  },
  {
    category: "Testing",
    skills: [
      {
        title: "JEST",
        logo: jestLogo,
        description:
          "A delightful JavaScript testing framework with a focus on simplicity.",
      },
      {
        title: "CYPRESS",
        logo: cypressLogo,
        description: "A JavaScript end-to-end testing framework.",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        title: "GIT",
        logo: gitLogo,
        description:
          "A distributed version-control system for tracking changes in source code during software development.",
      },
      {
        title: "DOCKER",
        logo: dockerLogo,
        description:
          "An open platform for developing, shipping, and running applications.",
      },
      {
        title: "FIREBASE",
        logo: firebaseLogo,
        description:
          "A platform developed by Google for creating mobile and web applications, offering real-time database, authentication, analytics, and more.",
      },
      {
        title: "HUSKY",
        logo: huskyLogo,
        description:
          "A popular npm package that allows you to use Git hooks to automate tasks such as linting, testing, and formatting code.",
      },
    ],
  },
];
