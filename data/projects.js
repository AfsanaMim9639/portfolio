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
    challenges: "Integrating location-based service matching with dynamic availability scheduling was complex. Solved by implementing geospatial queries in MongoDB and real-time slot management. Ensuring secure payment processing with Stripe while handling automated email notifications for booking confirmations required careful webhook implementation and error handling.",
    improvements: "Planning to add real-time chat between caregivers and clients, AI-powered caregiver recommendations based on user preferences and past bookings, mobile app version for on-the-go access, and multi-language support for broader accessibility."
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
    challenges: "Creating an accurate carbon footprint calculation system required extensive research and integration of multiple environmental data sources. Implementing team collaboration features while maintaining individual progress tracking was challenging. Solved by designing a flexible schema that supports both individual and team-based challenges with real-time leaderboard updates.",
    improvements: "Future enhancements include integrating with IoT devices for automatic activity tracking, adding social sharing features to increase community engagement, implementing gamification with badges and rewards system, partnering with eco-friendly brands for challenge sponsorships, and creating a mobile app for easier daily habit tracking."
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
    challenges: "Building a fair and transparent tutor verification system was crucial to maintain platform trust. Implementing a three-tier role-based system (students, tutors, admins) with different permissions and workflows required careful authentication and authorization management. Managing the complex application workflow from job posting to tutor selection to payment processing needed robust state management and real-time notifications.",
    improvements: "Planning to add video conferencing integration for online classes, automated attendance tracking with QR codes, tutor rating and review system with detailed feedback, payment escrow system for secure transactions, AI-powered tutor-student matching based on learning styles and preferences, and analytics dashboard showing class performance trends and student progress."
  }
  
];