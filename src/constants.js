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

// Experience Section Logo's
import ubitechsolutionsLogo from './assets/company_logo/ubitech_solutions_pvt_ltd_logo.jpg';

// Education Section Logo's

import vikrantLogo from './assets/education_logo/vitm.jpg';

// Project Section Logo's
import ubiattendanceLogo from './assets/work_logo/ubiattendance.jpg'
import ubihrmLogo from './assets/work_logo/ubihrm.jpg';
import chatifyLogo from './assets/work_logo/image.png';

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

    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ubitechsolutionsLogo,
    role: "Fullstack Developer",
    company: "Ubitech Solutions",
    date: "September 2023 - May 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
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
      "Next Js",
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
    github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Ubihrm",
    description:
      "An Human Resource Management System(HRMS) Web App.",
    image: ubihrmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Chatify",
    description:
      "A Real Time Chat Application Web App.",
    image: chatifyLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "WebSocket"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
];  