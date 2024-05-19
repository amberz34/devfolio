export const METADATA = {
  author: "hamza ghafoor",
  title: "Portfolio | hamza ghafoor",
  description:
    "My name is Muhammad hamza. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript and typescript. I am available for any kind of job opportunity that suits my skills and interests.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@hamzakambo33483",
  keywords: [
    "hamza ghafoor",
    "Frontend Developer",
    "backend Developer",
    "full stack Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/db14po1qo/image/upload/v1716123913/preview_ndf8x4.png",
   
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic full stack Developer",
  "I build things for the web",
  "I create complex and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: hamza.kamboh31@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/hamza-ghafoor/",
  },
  {
    name: "github",
    url: "https://github.com/Mrhamza01",
  },
  // {
  //   name: "instagram",
  //   url: "https://www.instagram.com/shubhii73/",
  // },
  {
    name: "twitter",
    url: "https://twitter.com/hamzakambo33483",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "python",
     "nodejs",
    "sass",
    // "cpp",
   "vue",
  //  "vite",
   
    // "php",
    // "python",
   
    // "webpack",
    "vite",
    "firebase",
    "wordpress",
    "docker",
    "git",
    "graphql",
    "aws",
    "azure",


    // "moralis",
    // "stripe",
  //  "mongoDB",
  //  "mysql",
 

    // "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "django",
    "tailwindcss",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: [ "docker",
  "kubernetes",],
};

export const PROJECTS = [
  {
    name: "summarizer",
    image: "/projects/aisummrizer.jpg",
    blurImage: "/projects/aisummrizer",
    description:
      "I built an AI summarizer that uses the GPT-4 model to summarize articles. It takes a link to an article and summarizes it into a shorter, more concise version. The summary is generated using natural language processing (NLP) techniques to identify the most important information in the article and generate a summary that captures the essence of the original content deploy of nelify",
    gradient: ["#FFCF1B", "#FF881B"],
    url: "https://taupe-buttercream-cd5453.netlify.app",
    tech: ["react", "tailwindcss","api" , "mongodb", "nelify"],
  },
  {
    name: "linktok RESTfull API base full stack social media app",
    image: "/projects/frontend.png",
    blurImage: "/projects/blur/frontend.png",
    description: "LinkTok is a secure, full-stack social media app with a user-friendly frontend and a RESTful backend. It features robust authentication, local storage for media, and an array of tools like an admin dashboard, post scheduling, story creation, and a follow system. Users enjoy curated content and detailed analytics, all within a personalized ‘For You’ video page. 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/Mrhamza01/frontendLinkTok",
    tech: ["react","nextjs", "typescript", "tailwindcss" ,"redux","api",],
  },
  // {
  //   name: "link tok backend",
  //   image: "/projects/R.jpeg",
  //   blurImage: "/projects/blur/R.jpeg",
  //   description: "linktok social media app backend 🛏️",
  //   gradient: ["#FFA62E", "#EA4D2C"],
  //   url: "https://github.com/Mrhamza01/backendLinkTok",
  //   tech: ["php", "larvel", "api",],
  // },
  // {
  //   name: "Inshorts",
  //   image: "/projects/inshorts.webp",
  //   blurImage: "/projects/blur/airbnb-blur.webp",
  //   description:
  //     "Conversational Voice Controlled React News Application using Alan AI 🎙",
  //   gradient: ["#000066", "#6699FF"],
  //   url: "https://shubh73-inshorts.netlify.app/",
  //   tech: ["react", "chakra-ui", "alan"],
  // },
  // {
  //   name: "Tesla",
  //   image: "/projects/tesla.webp",
  //   blurImage: "/projects/blur/tesla-blur.webp",
  //   description: "A Tesla React Native App 🏎️",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://github.com/shubh73/tesla",
  //   tech: ["react"],
  // },
];

export const WORK = [
  {
    id: 1,
    company: "self employes",
    title: "full stack Developer",
    location: "pakistan",
    range: "Ocutber 2023 - Ocutber 2023",
    responsibilities: [
      "making different projects and learn new skills and technologies",
      "solving leetcodes and read new developers articles",
      "exploring new technolgies and exprimentents with there power",
    ],
    url: "https://taupe-buttercream-cd5453.netlify.app",
    
    
    video: "https://res.cloudinary.com/db14po1qo/video/upload/v1716124228/ai-summrizer_vff6ro.mkv",
    
  },
  {
    id: 2,
    company: "link tok ",
    title: "Frontend Developer",
    location: "pakistan ",
    range: "april 2024 - may 2024",
    responsibilities: [
      "Built forntend for a restfull api base social media app name linktok .",
      "handle more then  30 apis with RTK querry to make the project fast reliable and scaleable.",
      "Successfully handle all the APIs with error handling and loading state.",
    ],
    url: "https://github.com/Mrhamza01/frontendLinkTok",
    video: "https://res.cloudinary.com/db14po1qo/video/upload/v1716124188/linktok_pll718.mp4",
  },
  // {
  //   id: 3,
  //   company: "link tok",
  //   title: "Frontend Developer",
  //   location: "pakistan",
  //   range: "april 2024 - may 2024",
  //   responsibilities: [
  //     "Engineered the backend for Link Tok, focusing on RESTful principles to ensure fast, reliable, and scalable service.",
  //     "Created authentication and authorization mechanisms from scratch.",
  //     "Implemented CRUD operations for all API endpoints, contributing to a complex and comprehensive backend structure.",
  //     "For a closer look at my work, visit my projects"
  //   ],
  //   url: "https://github.com/Mrhamza01/backendLinkTok",
  //   video: "/work/spacenos.mp4",
  // },
];

export const certificationData  =[
  {
      id: 1,
      title:"IBM Full Stack Software Developer Specialization",
      issuedBY:"Coursera",
      IssuedDate: "Sep 2023",
      CredentialID: "MMUN6DJEERPU",
      CertificateURL:"https://www.coursera.org/account/accomplishments/specialization/certificate/MMUN6DJEERPU"
  },
  {
      id: 2,
      title:"Google Digital Marketing & E-commerce Specialization",
      issuedBY:"Coursera",
      IssuedDate: "Nov 2022",
      CredentialID: "VMQB38YM9AM8",
      CertificateURL:"https://www.coursera.org/account/accomplishments/specialization/certificate/VMQB38YM9AM8"
  },
  {
      id: 3,
      title:"Back End Development and APIs",
      issuedBY:"freeCodeCamp",
      IssuedDate: "Nov 2023",
      CredentialID: "MMUN6DJEERPUCredential",
      CertificateURL:"https://freecodecamp.org/certification/hamza_ghafoor/back-end-development-and-apis"
  },
  {
      id: 4,
      title:" Google Data Analytics Specialization",
      issuedBY:"Coursera",
      IssuedDate: "oct 2022",
      CredentialID: "3NJRKWYEG8P6",
      CertificateURL:"https://www.coursera.org/account/accomplishments/specialization/certificate/3NJRKWYEG8P6"
  },
  {
      id: 5,
      title:" Google UX Design Specialization",
      issuedBY:"Coursera",
      IssuedDate: "oct 2022",
      CredentialID: "KMQ97E8MEZPY",
      CertificateURL:"https://www.credly.com/badges/220537be-a0f2-45c8-91ab-aae2cb487cfc/linked_in_profile"
  }
  ];

export const GTAG = "G-5HCTL2TJ5W";
