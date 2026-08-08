export const profile = {
  name: "Pearl Sarpong",
  title: "Full-Stack Developer",
  location: "Accra, Ghana",
  phone: "+233 206145007",
  email: "pearlsensory01@gmail.com",
  github: "https://github.com/pearl-sensories",
  linkedin: "https://www.linkedin.com/in/pearl-sarpong",
  summary:
    "Full-Stack Developer with a background in digital administration and hands-on experience building production-level applications. Proficient in React, JavaScript, PHP, Next.js, AWS and C-programming, with a proven track record of managing mission-critical auditing tools and inventory systems. Beyond development, I bring a versatile skill set from previous roles as a Virtual and In-Person Assistant, where I successfully grew social media engagement and managed complex appointment scheduling. I am a collaborative problem-solver committed to building scalable, user-centric products using clean code and modern frameworks like React and Node.js.",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    items: ["PHP", "MySQL", "RESTful APIs", "Node.js (Learning)", "C-programming"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "AWS", "Postman", "PhpStorm", "VS Code", "Antigravity", "Claude Code"],
  },
  {
    category: "Design & Multimedia",
    items: ["Figma (UI/UX)", "CapCut", "InShot", "Video Content Creation"],
  },
  {
    category: "Digital Admin & Social",
    items: ["Virtual Assistance", "Social Media Management", "Appointment Scheduling", "Engagement Analytics"],
  },
  {
    category: "Languages",
    items: ["English (Fluent)", "German (Beginner)"],
  },
];

export const experience = [
  {
    company: "SumsureIQ (Ghana)",
    role: "Full-Stack Developer",
    period: "Current",
    points: [
      "Leading the ongoing development, cloud infrastructure management, and optimization of a mission-critical auditing application, strengthening system performance and reliability for a market research firm.",
      "Architected scalable features and refined user interfaces using React and PHP, deploying secure, high-availability solutions across AWS (EC2, S3, RDS, IAM) to ensure clean, maintainable code for high-impact internal tools.",
      "Improved data accuracy and speed by optimizing RDS MySQL queries and refining the backend architecture, resulting in a more seamless user experience for field researchers.",
      "Manage end-to-end production updates independently while utilizing IAM for secure role-based access control, collaborating remotely to align technical solutions with business goals.",
    ],
  },
  {
    company: "Everything IT Technologies",
    role: "Full-Stack Developer Intern",
    period: "April 2025 — June 2025",
    points: [
      "Rapidly mastered Next.js to build and deploy a full-stack inventory management system for real-time stock tracking.",
      "Developed responsive front-end components and secure back-end APIs to streamline internal inventory workflows.",
      "Collaborated with a senior team using Figma for UI/UX prototyping and participated in code reviews to ensure alignment with industry standards.",
    ],
  },
  {
    company: "Virtual & In-Person Assistant",
    role: "Assistant",
    period: "January 2024 — September 2024",
    points: [
      "Managed and grew social media accounts across multiple platforms, increasing engagement and followers through consistent content scheduling and audience interaction.",
    ],
  },
];

export const projects = [
  {
    title: "SumsureIQ Auditing Platform",
    subtitle: "Datum Forms · Full-Stack Developer",
    points: [
      "Lead the maintenance and optimization of a mission-critical auditing tool, ensuring 99% data reliability for market research field operations.",
      "Engineered a centralized AWS Lambda Layer for database connections to streamline backend architecture and ensure consistency across live functions.",
      "Developed a dynamic tracking system featuring real-time UI logic that updates item availability based on user completion status, reducing data entry errors.",
      "Integrated PHP and MySQL backend enhancements to support scalable operations and improved UI responsiveness for remote field agents.",
    ],
    tags: ["React", "PHP", "AWS Lambda", "MySQL"],
    links: [
      { label: "Live Platform", url: "https://form.datumforms.com/" },
      { label: "Test Environment", url: "https://datum-forms-test-environment-475s.vercel.app/" },
    ],
  },
  {
    title: "Bavaria Blind Tasting Questionnaire",
    subtitle: "SumsureIQ · Full-Stack Developer",
    points: [
      "Built a client-facing blind-tasting survey for Bavaria, guiding respondents step-by-step through sample evaluation questions.",
      "Applied the same React and PHP architecture used across SumsureIQ's auditing tools to ensure consistent, reliable data capture from field participants.",
      "Designed a clean, distraction-free UI so respondents could focus on honest sensory feedback with minimal friction.",
    ],
    tags: ["React", "PHP", "SumsureIQ"],
    links: [{ label: "Live Demo", url: "https://blind-tasing-questionnaire-1g5b-sandy.vercel.app/" }],
  },
  {
    title: "Inventory Management System",
    subtitle: "Next.js, MySQL",
    points: [
      "Architected an end-to-end inventory solution during an internship at Everything IT Technologies, mastering the Next.js framework on the job.",
      "Designed and implemented core modules for real-time stock tracking, item record management, and automated status updates.",
      "Integrated custom authentication and data validation protocols to ensure system integrity and secure stock-level monitoring.",
    ],
    tags: ["Next.js", "MySQL", "Auth"],
    links: [{ label: "Live Demo", url: "https://inventory-project-nextjs-mxi1.vercel.app/" }],
  },
  {
    title: "E-Commerce Application",
    subtitle: "Frontend Developer & QA",
    points: [
      "Collaborated with the BB Tech Solutions team to build responsive frontend features based on UI/UX design requirements.",
      "Conducted rigorous functional testing and debugging to ensure seamless usability and high-quality code deployment.",
      "Utilized Git for collaborative workflows, participating in peer code reviews to maintain industry-standard application structures.",
    ],
    tags: ["React", "Git", "QA"],
    links: [{ label: "Live Site", url: "https://misqabbigh.com/" }],
  },
  {
    title: "Bots AdStore",
    subtitle: "Lead Frontend Developer",
    points: [
      "Led frontend development for a digital showroom connecting vendors and retailers in one media library platform.",
      "Built responsive, sign-up-ready pages enabling vendors to upload product images, promotional videos, and specifications.",
      "Focused on a clean, media-first layout that keeps browsing and discovery simple for retailers and buyers.",
    ],
    tags: ["Frontend Development", "UI/UX", "Responsive Design"],
    links: [{ label: "Live Demo", url: "https://advertisement-k7hm.vercel.app/" }],
  },
  {
    title: "GLOSSLAB — Frontend Clone",
    subtitle: "HTML & CSS Practice Build",
    points: [
      "Rebuilt the GLOSSLAB nail salon site pixel-for-pixel to sharpen HTML/CSS layout and responsive design skills.",
      "Practiced translating a polished, animation-heavy design into clean, semantic markup.",
    ],
    tags: ["HTML5", "CSS3", "Clone Practice"],
    links: [{ label: "Live Demo", url: "https://glosslab-nails.vercel.app/html/index.html" }],
  },
];

export const education = [
  { school: "MEST Ghana", degree: "Web Development", period: "April 2025" },
  { school: "KNUST", degree: "BSc. Medical Imaging", period: "September 2022" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
