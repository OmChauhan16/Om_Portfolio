// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import azureLogo from './assets/tech_logo/icons8-azure-240.png';
import redisLogo from './assets/tech_logo/icons8-redis-48.png';
import postgresqlLogo from './assets/tech_logo/icons8-postgresql-48.png';
import awsLogo from './assets/tech_logo/aws.jpg'
// Experience Section Logo's
import ubitechsolutionsLogo from './assets/company_logo/ubitech_solutions_pvt_ltd_logo.jpg';
import MikkyLogo from "./assets/company_logo/Mikky.png";
// Education Section Logo's

import vikrantLogo from './assets/education_logo/vitm.jpg';

// Project Section Logo's
import ubiattendanceLogo from './assets/work_logo/ubiattendance.jpg'
import ubihrmLogo from './assets/work_logo/ubihrm.jpg';
import chatifyLogo from './assets/work_logo/chatify.png';
// import raffilyLogo from './assets/work_logo/Raffily.png';
import jobportalLogo from './assets/work_logo/JobPortal.png';
// import cardMatching from './assets/work_logo/Cardmatching.png';
import TaskFlowAI from "./assets/work_logo/TaskFlow.png";
import Ecommerce from "./assets/work_logo/Ecommerce.png";

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Redis', logo: redisLogo },
      { name: 'Postgresql', logo: postgresqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JS', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Azure', logo: azureLogo },
      { name: 'AWS', logo: awsLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: MikkyLogo,
    role: "Full Stack Developer",
    company: "Mikky Publication Services Pvt Ltd.",
    date: "September 2025 - Now",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React JS",
      "NextJs",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      'AWS'
    ],
  },
  {
    id: 1,
    img: ubitechsolutionsLogo,
    role: "Full Stack Developer",
    company: "Ubitech Solutions",
    date: "September 2023 - May 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React JS",
      "Node JS",
      "Next Js",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "AWS"
    ],
  },
  {
    id: 2,
    img: ubitechsolutionsLogo,
    role: "Full Stack Development Intern",
    company: "Ubitech Solutions",
    date: "February 2023 - September 2023",
    desc: "Gained hands-on experience in full-stack web development, including front-end and back-end technologies, database management, and API development.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: vikrantLogo,
    school: "Vikrant Institute of Technology and Management, Gwalior",
    date: "August 2020 - June 2024",
    grade: "7.72 CGPA",
    desc: "I have completed my Bachelor's (B.Tech) in Computer Science from Vikrant Institute of Technology and Management, Gwalior. During my time at Vikrant, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Vikrant College has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech",
  },
];

export const projects = [
  {
    id: 0,
    title: "Ubiattendance",
    description:
      " An Attendance management System Web App",
    image: ubiattendanceLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "REST API", "Node.Js", "MySql"],
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "Ubihrm",
    description:
      "An Human Resource Management System(HRMS) Web App.",
    image: ubihrmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "",
    webapp: "https://orgbuilder.ubihrm.com/login",
  },
  {
    id: 2,
    title: "TaskFlowAI",
    description:
      "An AI based Project Management Tool.",
    image: TaskFlowAI,
    tags: ["React JS", "NodeJs", "MongoDB", "ExpressJs", "Redis", "WebSocket", 'GroqAI'],
    github: "https://github.com/OmChauhan16/TaskFlowAI",
    webapp: "https://taskflowai.onrender.com/",
  },
  {
    id: 3,
    title: "Chatify",
    description:
      "A Real Time Chat Application Web App.",
    image: chatifyLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "WebSocket"],
    github: "https://github.com/OmChauhan16/Chatify-Chat-Application",
    webapp: "https://chatify-chat-application-1.onrender.com/",
  },
  // {
  //   id: 3,
  //   title: "Raffily",
  //   description:
  //     "A Real Time Raffle System Web App.",
  //   image: raffilyLogo,
  //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
  //   github: "https://github.com/OmChauhan16/Raffily_Frontend",
  //   webapp: "https://gentle-wave-0fa23271e.6.azurestaticapps.net/",
  // },
  {
    id: 4,
    title: "Job Portal",
    description:
      "A Job Portal Web App",
    image: jobportalLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    github: "https://github.com/OmChauhan16/Job-Portal/tree/master",
    webapp: "https://job-portal-fs24.onrender.com/",
  },
  {
    id: 5,
    title: "Ecommerce App",
    description:
      "An Ecommerce Web App",
    image: Ecommerce,
    tags: ["React JS", "MongoDb", "Redux", "JavaScript", "Node.js", "Express.js"],
    github: "https://github.com/OmChauhan16/EcommerceApp",
    webapp: "https://ecommerce-app-g1x5.vercel.app/",
  },
  // {
  //   id: 5,
  //   title: "Card matching Game",
  //   description:
  //     "A Card Matching Game",
  //   image: cardMatching,
  //   tags: [, "HTML", "CSS", "JavaScript",],
  //   github: "https://github.com/OmChauhan16/Card-Matching-Game/tree/master?tab=readme-ov-file",
  //   webapp: "https://omchauhan16.github.io/Card-Matching-Game/",
  // },


];  