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
    git,
    docker,
    threejs,
    hpe,
    unity,
    cpp,
    python,
    golang,
    cypress,
    sql,
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
      title: "Game Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "GoLang",
      icon: golang,
    },
    {
      name: "Cypress",
      icon: cypress,
    },
    {
      name: "SQL",
      icon: sql,
    },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern (Full-time)",
      company_name: "Hewlett Packard Enterprise",
      icon: hpe,
      iconBg: "#fff",
      date: "May 2023 - August 2023",
      points: [
        "Used Cypress UI Automation software to automate the validation of HPE’s product configuration software.",
        "Built the foundation of a product that could reduce the amount of inconsistencies in the configuration tool, saving time and money for the users.",
        "Utilized Javascript and Cypress plugins",
        "Worked in agile project management setting",
        "Used GitHub for Version Control",
      ],
    },
    {
      title: "Software Engineering Intern (Part-time)",
      company_name: "Hewlett Packard Enterprise",
      icon: hpe,
      iconBg: "#fff",
      date: "August 2023 - May 2024",
      points: [
        "Learned skills including Golang, Kubernetes, Docker, Mockery, Unit test creation, and advanced logging through error codes to contribute to the creation of an IaaS",
        "Worked with 20 other team members around the world to complete story points and develop software",
        "Worked in agile project management setting",
        "Used GitHub for Version Control",
      ],
    },
    {
      title: "Game Developer",
      company_name: "Personal Project",
      icon: unity,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Developing simple Unity games to enhance game development skills.",
        "Gaining proficiency in C# and scripting to implement game mechanics and functionality.",
        "Designing and building game elements, including UI, character controls, and interactive elements.",
        "Collaborating with artists and designers to create engaging game assets and improve overall game experience."
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
      name: "Portfolio",
      description:
        "3D developer portfolio using Three.js to showcase my skills and projects with dynamic animations and interactive graphics, bringing a unique, immersive experience to my web presence.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      // image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "CatFe",
      description:
        "CatFe is a game developed using the Unity game engine, providing a flexible and robust platform for creating the game's 2D visuals and mechanics. The project employs C# for scripting, enabling complex game logic and interactions as players manage the cats' tasks and resources.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "UI",
          color: "pink-text-gradient",
        },
      ],
      // image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "CircuitAI",
      description:
        "CircuitAI is an innovative tool that integrates a large language model (LLM) with a graphical circuit design and simulation platform, allowing users to generate circuit designs based on text-based input. This application streamlines the circuit creation process by translating user requirements into SPICE code, which can then be seamlessly imported into simulation software for further analysis and adjustments.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "LLM",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
      ],
      // image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };