import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  docker,
  stc,
  omni,
  aws,
  frontend,
  stcProject,
  IotProject,
  crmProject,
  shoppingProject,
  java,
  awsLogo,
  postgres,
  python,
  spring,
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
    id: "work",
    title: "Work",
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Amazon Web Services (AWS)",
    icon: aws,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java
  },
  {
    name: "aws",
    icon: awsLogo
  },
  {
    name: "postgres",
    icon: postgres
  },
  {
    name: "python",
    icon: python
  },
  {
    name: "spring",
    icon: spring
  }
];

const education = [
  {
    title: "University of Zimbabwe",
    company_name: "BSc Hons Computer Science",
    date: "Aug 2019 - December 2023",
  },
  {
    title: "St Johns Emerald Hills",
    company_name: "A level",
    date: "2017 - 2018",
  },
  {
    title: "Prince Edwards Highschool School",
    company_name: "O level",
    date: "2013 - 2016",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "OmniContact",
    icon: omni,
    iconBg: "#fff",
    date: "June 2024 - Present",
    points: [
      "Contributed to the design, development, and implementation of software applications by writing efficient, maintainable, and scalable code.",
      "Implemented data integration and API functionalities to fetch and display dynamic content within applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Engineer",
    company_name: "Standard Telephones and Cables",
    icon: stc,
    iconBg: "#fff",
    date: "Aug 2023 - May 2024",
    points: [
      "Troubleshoot networking issues by investigating connectivity issues, identify hardware issues as well as to check configurations.",
      "Design, build, or maintain web sites, using authoring or scripting languages, content creation tools, management tools, and digital media.",
      "Deploying network changes through new hardware, updating configurations or optimizing network settings.",
      "Assist in migrating on-premises systems or applications to the AWS cloud by assessing the existing infrastructure, plan the migration strategy, and execute the migration process.",
    ],
  },
  {
    title: "Junior Technical Engineer",
    company_name: "Standard Telephones and Cables",
    icon: stc,
    iconBg: "#fff",
    date: "Aug 2021 - Sept 2022",
    points: [
      "Prepare or maintain design, testing, or operational records and documentation for AWS Cloud based projects.",
      "Identify problems uncovered by testing or customer feedback, and correct problems or refer problems to appropriate personnel for correction.",
      "Communicate with telecommunications vendors to obtain pricing and technical specifications for available hardware, software, or services.",
      "Assisting in network infrastructure development and deployment.",
    ],
  },
];

const testimonials = [
  {
    name: "University of Zimbabwe",
    designation: "Bsc Hons Computer Science",
    company: "Aug 2019 - Dec 2023",
  },
  {
    name: "St Johns Emerald Hills Highschool",
    designation: "A level",
    company: "2017 - 2018",
  },
  {
    name: "Prince Edwards Highschool",
    designation: "O level",
    company: "2013 - 2016",
  },
];

const projects = [
  {
    name: "Standard Telephones and Cable Website",
    description:
      "I developed a React website, designed to offer seamless user experience and faster loading speeds as compared to previous site. The website boasts a modern and intuitive interface, allowing visitors to effortlessly navigate through its various features and content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
    ],
    image: stcProject,
    source_code_link: "https://github.com/zeendlovu/stc",
  },
  {
    name: "IoT Smart Agriculture Monitoring System",
    description:
      "Developed an IoT agriculture smart monitoring system using the Arduino microcontroller for collecting sensor data and sending it to the raspberry pi, then from raspberry pi to storing it to the cloud influx DB and displaying the sensor data on the Cloud Grafana analytics Dashboard.",
    tags: [
      {
        name: "arduino C/C++",
        color: "blue-text-gradient",
      },
      {
        name: "python django",
        color: "green-text-gradient",
      },
      {
        name: "influxDB",
        color: "pink-text-gradient",
      },
      {
        name: "grafana",
        color: "orange-text-gradient",
      },
    ],
    image: IotProject,
    source_code_link: "https://github.com/zeendlovu/IoT-Smart-Agriculture-Monitoring-System",
  },
  {
    name: "Chatgate CRM",
    description:
      "Part of a team that is developing Chatgate CRM which is a sophisticated Customer Relationship Management (CRM) application designed to enhance customer service capabilities through seamless integration with Botpress Server and Botpress Cloud. This application will empower organizations to  monitor chatbot interactions and perform real-time interventions by human agents when necessary",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: crmProject,
    source_code_link: "https://github.com/DigiSenseiZim/Chatgate-Backend",
  },
  {
    name: "Shopping Cart Backend API",
    description:
      "Developed a shopping cart backend api which provides APIs to support essential functionalities such as adding, updating, and removing items from the cart. The system calculates the total price, applies discounts or taxes, and tracks the cart's state in real-time. This system also has authentication using JWT",
    tags: [
      {
        name: "spring security",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "orange-text-gradient",
      },
    ],
    image: shoppingProject,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects, education };
