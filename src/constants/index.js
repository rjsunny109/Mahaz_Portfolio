import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  malware,
  data
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "ML/AI",
    icon: mobile,
  },
  {
    title: "Frontend Developer (ReactJs)",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fellow Software Engineer ",
    company_name: "HeadStarter.ai",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Building and deploying five AI projects, participating in five weekend hackathons, and working on a high-impact final project aimed at reaching over 1,000 users.",
      "Collaborating with peers in virtual and in-person meetups, enhancing teamwork and networking skills.", 
      " Participating in AI coaching calls, focusing on career vision, project prioritization, and continuous improvement.",
      
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "HA Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2023 - December 2023",
    points: [
      "Developed and fine-tuned machine learning and deep learning models, enhancing the company’s AI capabilities.",
      "IAnalyzed large and complex datasets, applying advanced data preprocessing techniques to ensure data integrity and quality.",
      "Collaborated seamlessly with cross-functional teams, including data scientists, engineers, and product managers, to deliver impactful solutions.",
      
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Codsoft",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Learned the fundamentals of machine learning and data science.",
      "Engaged in hands-on projects involving data manipulation, cleaning, and preprocessing.",
      "Collaborated with cross-functional teams, including data scientists and engineers, to develop and implement machine learning solutions.",
      "Participated in code reviews, providing and receiving constructive feedback to improve code quality and performance.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Malware Threat Haunting",
    description:
      "Designed and developed a dual-pronged cybersecurity strategy, leveragingmachine learning to detect and classify known malware, while implementing Yara  rules to proactively defend against emerging zero-day threats. The initiative aimedto enhance overall cybersecurity posture by addressing both familiar and unknown risks",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: malware,
    source_code_link: "https://github.com/rjsunny109/Malware-Threat-Hunting",
  },
  {
    name: "Healthcare Data Analysis",
    description:
      "Conducted an in-depth analysis of healthcare data to identify trends and predict patient outcomes, leveraging regression techniques to build predictive models. Implemented clustering algorithms to segment patient data, enabling targeted interventions and personalized care plans.                 ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "powerBi",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: data,
    source_code_link: "https://github.com/rjsunny109",
  },
  {
    name: "Car Rental",
    description:
      " Developed a comprehensive web application for an online car rental service using Next.js, JavaScript, and CSS. Users can seamlessly rent cars and list their vehicles for rental, with an intuitive interface for managing bookings. The platform incorporates features such as real-time availability, secure payment processing, and user reviews, enhancing both user experience and service reliability. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rjsunny109",
  },
];

export { services, technologies, experiences, testimonials, projects };
