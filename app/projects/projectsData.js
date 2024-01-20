import c1 from '../assets/screenshots/c1.png';
import c2 from '../assets/screenshots/c2.png';
import p1 from '../assets/screenshots/p1.png';
import p2 from '../assets/screenshots/p2.png';
import p3 from '../assets/screenshots/p3.png';
import p4 from '../assets/screenshots/p4.png';
import t1 from '../assets/screenshots/t1.png';
import t2 from '../assets/screenshots/t2.png';
import p11 from '../assets/screenshots/1p1.png';
import p13 from '../assets/screenshots/1p3.png';
import screen1 from '../assets/screenshots/screen1.png';
import screen2 from '../assets/screenshots/screen2.png';


export const ProjectsData = [
    {
        id: 0,
        name: "GiardDesign",
        images: [p1.src, p2.src],
        description: "This is a landing page that was created for the purposes of recruitment for the company AdRespect. The project includes a fully functional slider, a photo gallery, and smooth animations of " +
            "its elements during scrolling. To maximize the project's performance, I rewrote it later using the " +
            "Astro framework. In addition to the mentioned technology, I also used Bootstrap, SCSS, AOS.js, and " +
            "Macy.js. \n",
        codeLink: "https://github.com/krystiano13/astro_rtask",
        liveLink: "https://krystiano13.github.io/astro_rtask/",
        techStack: ['Astro', 'Macy.js', 'AOS.js', 'Bootstrap', 'SCSS']
    },

    {
        id: 1,
        name: "Training Tracker",
        images: [t1.src, t2.src],
        description: "This is a fullstack application project that I use for outlining exercises in my training plan. It " +
            "calculates the training volume for a given exercise and, in the case of editing, calculates progress " +
            "in that exercise as a percentage. The application features a fully functional login and registration " +
            "system, as well as a connection to a database. The technologies I used on the frontend include " +
            "Astro, Bootstrap, and Preact, while on the backend, I used PHP and MySQL.",
        codeLink: "https://github.com/krystiano13/trainingTracker",
        liveLink: "https://github.com/krystiano13/trainingTracker",
        techStack: ['Astro', 'Preact', 'TS', 'PHP', 'MySQL', 'Bootstrap']
    },

    {
        id: 2,
        name: "Old 3D Portfolio",
        images: [p3.src, p4.src],
        description: "This is a website project that was intended to present the key information about me using " +
            "animated cards and a 3D solar system. To create it, I used various frontend and 3D technologies " +
            "including React, SASS, THREE.js and React-Three-Fiber ",
        codeLink: "https://github.com/krystiano13/portfolio3d",
        liveLink: "https://krystiano13.github.io/portfolioLiveTest/",
        techStack: ['React', 'THREE.js', 'SCSS', 'GSAP']
    },

    {
        id: 3,
        name: "Pomodoro Timer",
        images: [p11.src, p13.src],
        description: "Simple pomodoro timer with settings section to modify timer to your needs. "
            + "Project was created using React, Typescript and SCSS. ",
        codeLink: "https://github.com/krystiano13/pomodoro_src",
        liveLink: "https://krystiano13.github.io/pomodoro/",
        techStack: ['React', 'TS', 'SCSS']
    },

    {
        id: 4,
        name: "Post App",
        images: [screen1.src, screen2.src],
        description: "Simple CRUD aplication inspired by Reddit. It was made using frontend and backend " +
            "technologies. For frontend : Next.js framework and for backend: Laravel. Project contains working" +
            "registration and login system, ability to add, edit, delete and comment posts.",
        codeLink: "https://github.com/krystiano13/post-app",
        liveLink: "https://github.com/krystiano13/post-app",
        techStack: ['Next.js', 'JS', 'PHP', 'MySQL', 'Laravel']
    },

    {
        id: 5,
        name: "Quizz App",
        images: [c1.src, c2.src],
        description: "Fullstack application that allows to create, solve and rate quizzes. " +
            "Features: User Authentication via Bearer Token, Saving user's stats, Rating other users quizzes, Quizz editor",
        codeLink: "https://github.com/krystiano13/quizz-app",
        liveLink: "https://github.com/krystiano13/quizz-app",
        techStack: ['React', 'TS', 'Laravel', 'MySQL', 'PHP', 'JS', 'TailwindCSS', 'Shadcn/ui']
    },
];