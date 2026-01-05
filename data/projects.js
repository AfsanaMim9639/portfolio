// data/projects.js
export const projects = [
  {
    id: 1,
    name: "CareNest - Healthcare Management ",
    image: "/images/carenest.png",
    shortDesc: " CareNest is a comprehensive healthcare management platform connecting users with essential caregiving services including baby care, elderly care, and sick patient care. Features dynamic booking, location-based services, secure authentication, and automated email notifications.",
    techStack: ["React", "Node.js","Next.js", "MongoDB", "Stripe"],
    description: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart, and secure payment processing. Implemented real-time inventory tracking and order management system.",
    liveLink: "https://carenest-sywa.vercel.app/",
    githubLink: "https://github.com/AfsanaMim9639/carenest",
    challenges: "Implementing real-time inventory synchronization across multiple concurrent users was challenging. Solved by using MongoDB transactions and optimistic locking.",
    improvements: "Planning to add AI-powered product recommendations and multi-vendor support in future iterations."
  },
  {
    id: 2,
    name: "EcoTrack - Sustainable Living Challenge Platform",
    image: "/images/echotrack.png",
    shortDesc: "  EcoTrack is a comprehensive platform empowering individuals and communities to adopt sustainable habits through engaging environmental challenges. Track your carbon footprint, minimize waste, and adopt eco-friendly practices with advanced progress tracking, team collaboration, and achievement systems. Join thousands of eco-warriors making meaningful environmental impact.",
    techStack: ["React", "MongoDB", "Tailwind", "Stripe"],
    description: "An analytics platform that processes large datasets and provides interactive visualizations. Features include custom chart builders, export functionality, and real-time data updates.",
    liveLink: "https://ecotrack-71dcf.web.app/",
    githubLink: "https://github.com/AfsanaMim9639/ecotrack-client?tab=readme-ov-file",
    challenges: "Handling large datasets efficiently required implementing pagination, caching strategies, and optimized database queries.",
    improvements: "Future plans include adding machine learning predictions and automated report generation."
  },
  {
    id: 3,
    name: "eTuitionBD - Complete Tuition Management System",
    image: "images/etuition.png",
    shortDesc: "eTuitionBD is a full-stack tuition management platform that connects students with qualified tutors. It solves the real problem of finding verified tutors and legitimate tuition opportunities through automated workflows, transparent payments, digital class tracking, and structured communication. The platform enables students to post tuition requirements, tutors to apply for opportunities, and admins to monitor all activities efficiently.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    description: "A task management application that uses machine learning to predict task completion times and automatically prioritize tasks based on user behavior patterns.",
    liveLink: "https://etuitionbd-b9b1d.web.app/",
    githubLink: "https://github.com/AfsanaMim9639/eTuition-client",
    challenges: "Training an accurate ML model required collecting sufficient user interaction data while maintaining privacy.",
    improvements: "Planning to add collaborative features and integration with popular calendar applications."
  }
  
];