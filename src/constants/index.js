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
  wealthify1,
  wealthify2,
  aavaas1,
  blog1,
  pasteApp1,
  wealthify3,
  wealthify4,
  wealthify5,
  aavaas3,
  aavaas4,
  instant2,
  instant3,
  instant4,
  pasteApp2,
  pasteApp3,
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
    name: "Wealthify: AI-Powered Personal Finance Partner ",
    description:
      "Wealthify is an AI-powered financial management platform that helps users track transactions, manage expenses, and set budgets effortlessly. It features automated expense tracking, AI-driven insights, smart alerts, and interactive visual charts like bar and pie charts for a clear financial overview and analysis.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "text-[#D4D4D4]",
      },
      {
        name: "MongoDB",
        color: "text-[#47A248]",
      },
    ],
    images: [wealthify1, wealthify2, wealthify3, wealthify4, wealthify5],
    source_code_link:
      "https://github.com/Sanyam1332/Instant-Ecommerce-React-Clone",
  },
  {
    name: "Aavaas: House Renting Platform",
    description:
      "Aavaas is a house-renting platform that simplifies renting homes and finding temporary accommodations. Acting as an intermediary, it ensures smooth interactions between property owners and customers. Built with Node.js, Express.js, and MongoDB, it offers robust functionality and efficient data handling.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "text-[#D4D4D4]",
      },
      {
        name: "Tailwind",
        color: "text-blue-500",
      },
      {
        name: "MongoDB",
        color: "text-green-400",
      },
    ],
    images: [aavaas1, aavaas2, aavaas3, aavaas4],
    source_code_link: "https://github.com/Sanyam1332/",
  },
  {
    name: "Instant: E-Commerce Platform ",
    description:
      "Instant is a web application that connects local vendors with customers, enabling vendors to efficiently register their shops, manage products, and expand their reach. Customers enjoy affordable, high-quality products with speedy delivery, ensuring a seamless and trustworthy online shopping experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "text-fuchsia-500",
      },
      {
        name: "Redux",
        color: "text-violet-500",
      },
    ],
    images: [instant, instant2, instant3, instant4],
    source_code_link:
      "https://github.com/Sanyam1332/Instant-Ecommerce-React-Clone",
  },
  {
    name: "PlanIt: Project Tasks Management Platform",
    description:
      "I developed a To-Do List Project Task website using Bootstrap, React, and CSS. The platform helps users efficiently organize and manage project tasks, track progress daily, and stay productive. It supports goal-oriented task management, enabling users to achieve project objectives and milestones effectively through a structured approach.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "text-fuchsia-500",
      },
      {
        name: "JavaScript",
        color: "text-yellow-300",
      },
    ],
    images: [todo],
    source_code_link: "https://github.com/Sanyam1332/TODO-WEB-APP",
  },

  {
    name: "ThinkNest: Where ideas take flight",
    description:
      "ThinkNest is a modern blog website built with HTML, CSS, and JavaScript, featuring API calls to fetch and display blog posts dynamically.It offers a clean, responsive design, seamless navigation, and an interactive reading experience.The future scope of ThinkNest includes user authentication, personalization, and AI recommendations.",
    tags: [
      {
        name: "JavaScript",
        color: "text-[#F7DF1E]",
      },
      {
        name: "CSS3",
        color: "text-[#1572B6]",
      },
      {
        name: "HTML",
        color: "text-[#E34F26]",
      },
    ],
    images: [blog1],
    source_code_link:
      "https://github.com/Sanyam1332/Instant-Ecommerce-React-Clone",
  },
  {
    name: "QuickPaste: A Smart Text Management App ",
    description:
      "QuickPaste is a React and Redux-powered web app for storing, editing, and managing text efficiently. Ideal for quick access and organized content handling.QuickPaste is perfect for developers, students, or anyone needing quick, organized access to text, code snippets, or notes.It provides an intuitive interface to save snippets, notes, or code.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },

      {
        name: "Redux",
        color: "text-violet-500",
      },
      {
        name: "Tailwind",
        color: "text-blue-500",
      },
    ],
    images: [pasteApp1, pasteApp2, pasteApp3],
    source_code_link:
      "https://github.com/Sanyam1332/Instant-Ecommerce-React-Clone",
  },
];

export { services, technologies, education, projects, sam };
