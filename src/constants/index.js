import { yellowbrick, islandvariety } from "../assets/images";
import {
  html,
  css,
  jquery,
  javascript,
  reactjs,
  csharp,
  dotnet,
  sql,
  git,
  typescript,
  tailwind,
  nextjs,
  java,
  github,
  linkedin,
  twitter,
  car,
  contact,
  estate,
  pricewise,
  snapgram,
  summiz,
  threads,
} from "../assets/icons";

export const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "jQuery",
    icon: jquery,
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
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Java",
    icon: java,
  },
];

export const experiences = [
  {
    title: "Full Stack Software Engineer",
    company_name: "Yellowbrick Financial",
    icon: yellowbrick,
    iconBg: "#000000",
    date: "Apr 2023 to Present",
    points: [
      "Created a dynamic client-response based form using React.js that allows financial advisors to accurately capture client's insurance information by 40%.",
      "Used object-oriented programming (OOP) principles to design and implement C# code that is modular, reusable, and maintainable.",
      "Developed RESTful APIs and web services using ASP.NET Web API and ASP.NET Core for seamless integration with front-end systems.",
      "Engineered complex stored procedures in SQL using Joins, Primary Keys, Foreign keys, and Pagination to capture and display data using T-SQL while testing them with Postman.",
      "Implemented and maintained application data integrity through meticulous front-end validation, back-end model binding, normalization for stored procedures in the SQL database.",
      "Adopted content management techniques, such as sorting, filtering, routing, and mapping components, to enhance the user experience.",
      "Utilized Git and GitHub for source and version control, ensuring efficient collaboration and code management.",
      "Established applications within a team using Agile methodologies, such as daily stand-ups, code reviews, and code talks, to facilitate effective communication and collaboration within the team.",
    ],
  },
  {
    title: "Front End Software Engineer",
    company_name: "Island Variety",
    icon: islandvariety,
    iconBg: "#b7e4c7",
    date: "Oct 2021 - Dec 2022",
    points: [
      "Built and optimized HTML, CSS, and JavaScript code to create user-friendly and responsive interfaces.",
      "Utilized React.js to build single-page applications with seamless user experience.",
      "Created web pages that render correctly on a variety of devices and window or screen sizes.",
      "Integrated RESTful APIs into applications to fetch and display data, leveraging AJAX for asynchronous data exchange.",
      "Implemented Scrum methodologies to manage project timelines in collaboration with the business owner, ensuring timely delivery of their web application.",
      "Worked with the business owner to implement visual concepts and ensure brand consistency.",
      "Stayed up-to-date on the latest front-end development technologies and trends.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
