// Static Portfolio Data for Ashish Pal (ashupal86)
// Real data gathered from GitHub profile and LinkedIn

export const profileData = {
  name: "Akram Md",
  username: "AKram-codes",
  title: "Aspiring Developer | 3+ Years Self-Learning | Python & Flask Enthusiast",
  bio: "💻 Self-taught Developer with 3+ years of learning journey | 🌐 Flask Enthusiast | AI Engineer | Passionate to develop GenAI applications",
  location: "Kavali, Andhra Pradesh, India",
  website: "https://akram-md.me",
  github: "https://github.com/AKram-codes",
  linkedin: "https://linkedin.com/in/akram-md-690a15339",
  email: "akram.codes24@gmail.com",
  phone: "+91-6302178536",
  
  stats: {
    
    followers: 10,
    following: 7,
    publicRepos: 18,
    totalStars: 4
  },
  
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "PBR Visvodaya Institute of Technology and Sciences(PBRVITS)",
    location: "Kavali, Andhra Pradesh",
    year: "4rd Year (Currently Pursuing)",
    cgpa: "8.3/10",
    status: "Currently pursuing"
  }
};

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My portfolio is inspired from the appearance of bash terminal. I love terminals and that give me inspiration to build and deploy a web based terminal portfolio website.",
    fullDescription: "A modern, responsive portfolio website showcasing my skills and projects. Built with React and Vite, featuring a clean design inspired by terminal aesthetics.",
    category: "frontend",
    featured: true,
    technologies: ["React", "Vite", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/AKram-codes/My-Portfolio",
    demo: "https://portfolio-9ucx.onrender.com/",
    status: "live",
    features: [
      "Responsive design for all devices",
      "Modern React architecture with Vite",
      "Terminal-inspired aesthetic",
      "Fast loading and optimized performance",
      "SEO optimized with meta tags"
    ],
    lastUpdated: "2025-08-07",
    stars: 0,
    forks: 0
  },
  {
    id: 2,
    title: "Hand Gesture recognition",
    description: "Developed a real-time hand gesture recognition system using Google’s MediaPipe framework. The project leverages computer vision techniques to track and analyze 21 hand landmarks from webcam input, enabling accurate gesture detection. Custom logic was implemented to classify predefined gestures (e.g., thumbs up, victory sign, closed fist) for interactive applications such as sign language interpretation, virtual mouse control, or touchless UI navigation.",
    fullDescription: "A real-time hand gesture recognition system using Google’s MediaPipe framework. Tracks 21 hand landmarks from webcam input for accurate gesture detection.",
    category: "AI, OpenCV",
    featured: true,
    technologies: ["Python", "OpenCV", "Mediapipe", "TensorFlow"],
    github: "https://github.com/AKram-codes/Hand_magics/tree/main/Handsmagics",
    status: "completed",
    features: [
      "Real-time hand tracking using MediaPipe Hands",
      "Scalable framework for adding new gestures",
      "Developed a webcam-based gesture detection system using Google’s MediaPipe (21 landmarks).",
      "Mapped hand gestures to system actions with 95%+ accuracy on real-time video.",
      "Tools: Python, OpenCV, TensorFlow — ran efficiently at 25 FPS on CPU."
    ],
    lastUpdated: "2024-01-20",
    stars: 0,
    forks: 0
  },
  {
    id: 3,
    title: "Object Detection using YOLO Model",
    description: "Built an object detection model using YOLOv5 to detect and classify multiple objects in real-time from video feeds and images. Leveraged pre-trained weights from YOLOv5 for fast and accurate inference, achieving high accuracy on standard objects like persons, vehicles, animals, etc. The system was fine-tuned to work efficiently even on resource-constrained devices, with potential applications in surveillance, automation, and safety systems.",
    fullDescription: "An object detection model using YOLOv5 to detect and classify multiple objects in real-time from video feeds and images.",
    category: "AI",
    featured: true,
    technologies: ["Python", "Flask", "SQLite", "REST API"],
    github: "https://github.com/AKram-codes/Object_detection_using_YOLO",
    status: "active",
    features: [
      "Real-time detection with high FPS and accuracy",
      "Bounding boxes and labels over detected objects",
      "Option to switch between CPU and GPU inference",
      "Supports both webcam input and image/video files",
      "Easy model retraining for custom datasets"
    ],
    lastUpdated: "2024-11-30",
    stars: 0,
    forks: 0
  },
  {
    id: 4,
    title: " URL Shortener Application",
    description: "Built a full-stack URL shortener web application using Java, Spring Boot, and Spring MVC, enabling users to generate shortened links for long URLs. The application maps long URLs to unique short codes, stores them in a database, and redirects users to the original URL upon access. Designed a clean and responsive front end, and ensured secure, efficient backend logic with RESTful APIs.",
    fullDescription: "Built a full-stack URL shortener web application using Java, Spring Boot, and Spring MVC, enabling users to generate shortened links for long URLs. The application maps long URLs to unique short codes, stores them in a database, and redirects users to the original URL upon access. Designed a clean and responsive front end, and ensured secure, efficient backend logic with RESTful APIs.",
    category: "fullstack",
    featured: true,
    technologies: ["HTML", "CSS", "Java", "SpringBoot", "PostgreSQL","Docker"],
    github: "https://github.com/AKram-codes/url_shortner_java",
    status: "completed",
    features: [
      "Integrated PostgeSQL for persistent storage and utilized Spring Data JPA for database operations",
      "Applied frontend frameworks like HTML/CSS and Thymeleaf to build an interactive UI",
      "Followed MVC architecture and deployed the app using tools like Postman and GitHub."
    ],
    lastUpdated: "2025-04-15",
    stars: 0,
    forks: 0
  },
  {
    id: 5,
    title: "Flames Game",
    description: "Developed a web-based FLAMES game using HTML, CSS, and JavaScript that predicts relationship compatibility based on two names. The game follows the traditional FLAMES logic—calculating the relationship type as Friendship, Love, Affection, Marriage, Enemy, or Sibling—based on letter eliminations. It’s a fun, interactive project that showcases creative logic implementation and DOM manipulation.",
    fullDescription: "A web-based FLAMES game using HTML, CSS, and JavaScript that predicts relationship compatibility based on two names. The game follows the traditional FLAMES logic—calculating the relationship type as Friendship, Love, Affection, Marriage, Enemy, or Sibling—based on letter eliminations.",
    category: "JavaScript",
    featured: true,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AKram-codes/Flames-game",
    demo: "https://akram-md.github.io/Flames-game/",
    status: "active",
    features: [
      "FLAMES logic implemented from scratch in JavaScript",
      "Dynamic result display with relationship type and animation",
      "Interactive and visually appealing UI using CSS",
      "Fully responsive design for desktop and mobile"
    ],
    lastUpdated: "2025-05-10",
    stars: 0,
    forks: 0
  },
  /*{
    id: 6,
    title: "Android Calculator",
    description: "This is an android calculator built in java. I learned a lot of java concepts while building this as this is pure array modification to solve the problem. This does not use any type of external library to solve the problem.",
    fullDescription: "A fully functional Android calculator application built in Java without external libraries, using pure array manipulation for mathematical operations.",
    category: "mobile",
    featured: false,
    technologies: ["Java", "Android Studio", "XML"],
    github: "https://github.com/ashupal86/Bharat_intern_calculator",
    status: "completed",
    features: [
      "Basic arithmetic operations",
      "Pure Java implementation",
      "No external dependencies",
      "Custom array-based calculation logic",
      "Android native UI"
    ],
    lastUpdated: "2024-07-20",
    stars: 0,
    forks: 0
  },
  {
    id: 7,
    title: "Self-Hosted Homelab",
    description: "A Proxmox server running multiple containers including a Windows 11 Pro VM with GPU passthrough as my daily driver, TrueNAS Scale for NAS storage, and multiple Linux VMs for self-hosted services, testing, and debugging with snapshot restore capabilities.",
    fullDescription: "A comprehensive homelab setup built on Proxmox virtualization platform, featuring enterprise-grade infrastructure for personal use, development, and learning.",
    category: "devops",
    featured: true,
    technologies: ["Proxmox", "Windows 11 Pro", "TrueNAS Scale", "Linux VMs", "GPU Passthrough", "Docker", "Virtualization"],
    github: "https://github.com/ashupal86/homelab-setup",
    status: "ongoing",
    features: [
      "Proxmox virtualization platform",
      "Windows 11 Pro VM with GPU passthrough",
      "Native OS speed with display connectivity",
      "TrueNAS Scale for NAS storage",
      "Self-hosted file management services",
      "Photo storage alternatives",
      "Linux testing and debugging environment",
      "VM snapshot and restore functionality",
      "Multiple containerized services"
    ],
    lastUpdated: "2024-12-01",
    stars: 2,
    forks: 1
  }*/
];

export const skillsData = {
  languages: [
    { name: "Python", level: 90, category: "backend", primary: true },
    { name: "JavaScript", level: 85, category: "frontend", primary: true },
    { name: "Java", level: 80, category: "backend", primary: true },
    { name: "HTML/CSS", level: 90, category: "frontend", primary: true },
    { name: "C++", level: 75, category: "programming", primary: false },
    { name: "SQL", level: 80, category: "database", primary: false }
  ],
  
  frameworks: [
    { name: "Flask", level: 90, category: "backend", primary: true },
    { name: "React", level: 65, category: "frontend", primary: true },
    { name: "Vite", level: 70, category: "build-tool", primary: false },
    { name: "Bootstrap", level: 85, category: "frontend", primary: false }
  ],
  
  tools: [
    { name: "Docker", level: 55, category: "devops", primary: true },
    { name: "Git", level: 90, category: "version-control", primary: true },
    { name: "Linux", level: 80, category: "os", primary: true },
    { name: "VS Code", level: 95, category: "editor", primary: false },
    { name: "Android Studio", level: 75, category: "mobile", primary: false },
    { name: "Figma", level: 70, category: "design", primary: false }
  ],
  
  databases: [
    { name: "SQLite", level: 85, category: "database", primary: true },
    { name: "MySQL", level: 80, category: "database", primary: true },
    { name: "PostgreSQL", level: 70, category: "database", primary: false },
    { name: "MongoDB", level: 80, category: "database", primary: false }
  ],
  
  cloud: [
    { name: "Google Cloud", level: 65, category: "cloud", primary: false },
    { name: "Vercel", level: 80, category: "hosting", primary: true },
    { name: "Render", level: 85, category: "hosting", primary: true },
    { name: "GitHub", level: 90, category: "platform", primary: true }
  ]
};

export const experienceData = [
  {
    id: 1,
    role: " Full Stack Java Intern",
    company: "CodeTantra",
    type: "Internship",
    location: "Remote",
    duration: "2025",
    period: "3 months",
    status: "completed",
    description: "Completed a certified internship program focused on enterprise-level full stack Java development. Developed a robust URL Shortener Application using Spring Boot, enabling long URLs to be transformed into concise short links with expiration, redirection, and analytics features.",
    achievements: [
      "Implemented RESTful APIs for creating, retrieving, and managing shortened URLs with secure token-based access.",
      "Integrated PostgeSQL for persistent storage and utilized Spring Data JPA for database operations.",
      "Applied frontend frameworks like HTML/CSS and Thymeleaf to build an interactive UI.",
      "Followed MVC architecture and deployed the app using tools like Postman and GitHub."
    ],
    technologies: ["Java", "Springboot", "Git", "REST APIs"],
    skills: ["Backend Development", "Full Stack", "Code Review", "Team Collaboration"]
  },
  {
    id: 2,
    role: "Technical Head",
    company: "PPT tech Club, PBR VITS",
    type: "Leadership",
    location: "Kavali, AP",
    duration: "2024 - Present",
    period: "Current",
    status: "active",
    description: "Leading technical initiatives and mentoring fellow students in programming and development practices. Responsible for organizing tech events and workshops at the campus.",
    achievements: [
      "Organized 5+ technical events including Tech talks and coding competitions",
      "Conducted workshops on Github Student Education",
      "Mentored students in web development and programming",
      "Managed technical aspects of club activities and events",
      "Fostered a collaborative environment for learning and innovation"
    ],
    technologies: ["Event Management", "Github", "Teaching", "Leadership"],
    skills: ["Team Leadership", "Event Organization", "Mentoring", "Public Speaking"]
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "1st Place - PPT & Idea Pitching Competition",
    event: "Inter-College Tech Fest",
    type: "competition",
    date: "2024",
    icon: "🏆",
    description: "Won first place in a PPT competition for innovative tech ideas, showcasing presentation and pitching skills."
  },
  {
    id: 2,
    title: "GSSOC - Open Source Program",
    event: "Online Open Source Initiative",
    type: "competition", 
    date: "2025",
    icon: "🌞",
    description: "Participated in the GirlScript Summer of Code (GSSOC) program, contributing to open source projects and gaining valuable experience in collaborative software development."
  },
  {
    id: 3,
    title: "Event Speaker",
    event: "Workshop on Github Education",
    type: "recognition",
    date: "2024",
    icon: "🎯",
    description: "Delivered a workshop on GitHub Education, sharing knowledge on version control and collaborative coding practices."
  },
  {
    id: 4,
    title: "GitHub Achievement: Pull Shark",
    event: "GitHub",
    type: "badge",
    date: "2024",
    icon: "🦈",
    description: "Earned GitHub's Pull Shark achievement for contributing to open source projects through pull requests."
  },
  {
    id: 5,
    title: "GitHub Achievement: Quickdraw",
    event: "GitHub", 
    type: "badge",
    date: "2024",
    icon: "⚡",
    description: "Earned GitHub's Quickdraw achievement for rapidly closing issues and pull requests."
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2024",
    type: "certification",
    skills: ["Python Programming", "Data Structures", "Algorithms"]
  },
  {
    id: 2,
    title: "Java (Basic)",
    issuer: "HackerRank", 
    date: "2024",
    type: "certification",
    skills: ["Java Programming", "OOP Concepts", "Basic Algorithms"]
  },
  {
    id: 3,
    title: " MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    date: "2024",
    type: "course",
    skills: ["MongoDB", "Databases", "FullStack Development"]
  }
];

export const hobbiesData = [
  { name: "Gaming", icon: "🎮", description: "PC and mobile gaming enthusiast" },
  { name: "Music", icon: "🎵", description: "Listening to various genres of music" },
  { name: "Gym", icon: " 🏋️ ", description: "Been a consistent Gym member" },
  { name: "Learning", icon: "📚", description: "Continuously learning new technologies" }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/AKram-codes",
    icon: "💻",
    username: "@AKram-codes"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/akram-md-690a15339",
    icon: "💼",
    username: "@akram-md-690a15339"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mr_brain_dead_6", 
    icon: "📸",
    username: "@mr_brain_dead_6"
  },
  {
    name: "Email",
    url: "mailto:akram.codes24@gmail.com",
    icon: "📧",
    username: "akram.codes24@gmail.com"
  }
];

// Currently learning
export const currentlyLearning = [
  "Generative AI",
  "Docker",
  "Advanced Flask",
  "Microservices",
  "CI/CD Pipelines",
  "React Advanced Patterns"
];

// Fun fact
export const funFact = "I taught a computer to recognize hand gestures. Now it knows when I’m giving it a thumbs up... or a high five for compiling without errors.";

export default {
  profileData,
  projectsData,
  skillsData,
  experienceData,
  achievementsData,
  certificationsData,
  hobbiesData,
  socialLinks,
  currentlyLearning,
  funFact
}; 