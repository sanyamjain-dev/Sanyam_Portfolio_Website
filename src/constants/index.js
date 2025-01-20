import {
  mobile,
  backend,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  express,
  bootstrap,
  git,
  lssms,
  tmu,
  instant,
  aavaas2,
  todo,
  sam,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const education = [
  {
    title: "Bachelor of Computer Applications",
    institute_name: "Teerthanker Mahaveer University",
    grade: "8.80 CGPA",
    icon: tmu,
    iconBg: "#fff",
    date: "Aug 2022 - May 2025",
    points: [
      "Gained in-depth knowledge in front-end technologies like HTML, CSS, JavaScript, React.js, and Redux.",
      "I have also gained a fundamental understanding of back-end technologies such as Node.js, Express.js, MySQL, and MongoDB, which facilitates the smooth fusion of user-facing and server-side features.",
      "This comprehensive skill set enables me to develop cohesive applications that deliver seamless user experiences. ",
      "Explored and applied industry-relevant technologies through hands-on projects, enhancing team collaboration and technical acumen.",
    ],
  },
  {
    title: "Intermediate",
    institute_name: "Shailesh Memorial H.S School [C.B.S.E]",
    grade: "86%",
    icon: lssms,
    iconBg: "#fff",
    date: "Jun 2020 - May 2022",
    points: [
      "Successfully developed a Hotel Management System using Python, showcasing skills in problem-solving, database management, and programming logic.",
      "Enhanced communication, teamwork, and leadership abilities through group projects and classroom activities.",
      "Cultivated a passion for technology and problem-solving, leading to the successful execution of tech-based projects.",
    ],
  },
];

const projects = [
  {
    name: "Instant: e-Commerce ",
    description:
      "Instant is a web application that connects local vendors with customers, enabling vendors to efficiently register their shops, manage products, and expand their reach. Customers enjoy affordable, high-quality products with speedy delivery, ensuring a seamless and trustworthy online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-fuchsia-500",
      },
      {
        name: "redux",
        color: "text-violet-500",
      },
    ],
    image: instant,
    source_code_link:
      "https://github.com/Sanyam1332/Instant-Ecommerce-React-Clone",
  },
  {
    name: "Aavaas: House renting",
    description:
      "Aavaas is a house-renting platform that simplifies renting homes and finding temporary accommodations. Acting as an intermediary, it ensures smooth interactions between property owners and customers. Built with Node.js, Express.js, and MongoDB, it offers robust functionality and efficient data handling.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
    ],
    image: aavaas2,
    source_code_link: "https://github.com/Sanyam1332/",
  },
  {
    name: "Project Tasks application",
    description:
      "I developed a To-Do List Project Task website using Bootstrap, React, and CSS. The platform helps users efficiently organize and manage project tasks, track progress daily, and stay productive. It supports goal-oriented task management, enabling users to achieve project objectives and milestones effectively through a structured approach.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-fuchsia-500",
      },
      {
        name: "javascript",
        color: "text-yellow-300",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Sanyam1332/TODO-WEB-APP",
  },
];

export { services, technologies, education, projects, sam };
