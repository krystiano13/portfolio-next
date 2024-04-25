import c1 from '../assets/screenshots/c1.png';
import c2 from '../assets/screenshots/c2.png';
import p1 from '../assets/screenshots/p1.png';
import p2 from '../assets/screenshots/p2.png';
import p3 from '../assets/screenshots/p3.png';
import p4 from '../assets/screenshots/p4.png';
import us1 from '../assets/screenshots/us1.png';
import us2 from '../assets/screenshots/us2.png';
import sb1 from '../assets/screenshots/sb1.png';
import sb2 from '../assets/screenshots/sb2.png';
import lc1 from "../assets/screenshots/lc1.png";
import lc2 from "../assets/screenshots/lc2.png";


export const ProjectsData = [
  {
    id: 0,
    name: "GiardDesign",
    images: [p1.src, p2.src],
    description:
      "This is a landing page that was created for the purposes of recruitment for the company AdRespect. The project includes a fully functional slider, a photo gallery, and smooth animations of " +
      "its elements during scrolling. To maximize the project's performance, I rewrote it later using the " +
      "Astro framework. In addition to the mentioned technology, I also used Bootstrap, SCSS, AOS.js, and " +
      "Macy.js. \n",
    codeLink: "https://github.com/krystiano13/astro_rtask",
    liveLink: "https://krystiano13.github.io/astro_rtask/",
    techStack: ["Astro", "Macy.js", "AOS.js", "Bootstrap", "SCSS"],
  },

  {
    id: 1,
    name: "URL Shortener",
    images: [us1.src, us2.src],
    description:
      "This is a fullstack application project that I've made using Ruby on Rails framework. Project contains authentication system with password resetting, URL shortening and visits counter. All data is being saved using SQL database",
    codeLink: "https://github.com/krystiano13/short_url",
    liveLink: "https://github.com/krystiano13/short_url",
    techStack: ["Ruby", "Ruby On Rails", "TailwindCSS", "CSS", "HTML", "JS"],
  },

  {
    id: 2,
    name: "Old 3D Portfolio",
    images: [p3.src, p4.src],
    description:
      "This is a website project that was intended to present the key information about me using " +
      "animated cards and a 3D solar system. To create it, I used various frontend and 3D technologies " +
      "including React, SASS, THREE.js and React-Three-Fiber ",
    codeLink: "https://github.com/krystiano13/portfolio3d",
    liveLink: "https://krystiano13.github.io/portfolioLiveTest/",
    techStack: ["React", "THREE.js", "SCSS", "GSAP"],
  },

  {
    id: 3,
    name: "Blog",
    images: [sb1.src, sb2.src],
    description:
      "Simple blog project where you can create account, read and comment posts. It also contains the admin dashboard for managing content.",
    codeLink: "https://github.com/krystiano13/symfony-blog",
    liveLink: "https://github.com/krystiano13/symfony-blog",
    techStack: ["Symfony", "PHP", "MySQL", "JS", "TailwindCSS", "Webpack"],
  },

  {
    id: 4,
    name: "Live Chat",
    images: [lc1.src, lc2.src],
    description:
      "Chat app with realtime communication using Ruby on Rails' Action Cable. Application contains authentication system create using devise and devise-api. Frontend part was created using React with Typescript and TailwindCSS",
    codeLink: "https://github.com/krystiano13/live_chat",
    liveLink: "https://github.com/krystiano13/live_chat",
    techStack: [
      "React",
      "Ruby on Rails",
      "Ruby",
      "TailwindCSS",
      "TS",
      "SQLite",
    ],
  },

  {
    id: 5,
    name: "Quizz App",
    images: [c1.src, c2.src],
    description:
      "Fullstack application that allows to create, solve and rate quizzes. " +
      "Features: User Authentication via Bearer Token, Saving user's stats, Rating other users quizzes, Quizz editor",
    codeLink: "https://github.com/krystiano13/quizz-app",
    liveLink: "https://github.com/krystiano13/quizz-app",
    techStack: [
      "React",
      "TS",
      "Laravel",
      "MySQL",
      "PHP",
      "JS",
      "TailwindCSS",
      "Shadcn/ui",
    ],
  },
];