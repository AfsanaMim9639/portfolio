// data/projects.js
export const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    shortDesc: "Full-stack e-commerce solution with payment integration",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    description: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart, and secure payment processing. Implemented real-time inventory tracking and order management system.",
    liveLink: "#",
    githubLink: "#",
    challenges: "Implementing real-time inventory synchronization across multiple concurrent users was challenging. Solved by using MongoDB transactions and optimistic locking.",
    improvements: "Planning to add AI-powered product recommendations and multi-vendor support in future iterations."
  },
  {
    id: 2,
    name: "Data Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    shortDesc: "Interactive dashboard for data visualization and analysis",
    techStack: ["Next.js", "PostgreSQL", "Python", "Flask"],
    description: "An analytics platform that processes large datasets and provides interactive visualizations. Features include custom chart builders, export functionality, and real-time data updates.",
    liveLink: "#",
    githubLink: "#",
    challenges: "Handling large datasets efficiently required implementing pagination, caching strategies, and optimized database queries.",
    improvements: "Future plans include adding machine learning predictions and automated report generation."
  },
  {
    id: 3,
    name: "AI-Powered Task Manager",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    shortDesc: "Smart task management with ML-based prioritization",
    techStack: ["React", "Node.js", "TensorFlow", "AWS"],
    description: "A task management application that uses machine learning to predict task completion times and automatically prioritize tasks based on user behavior patterns.",
    liveLink: "#",
    githubLink: "#",
    challenges: "Training an accurate ML model required collecting sufficient user interaction data while maintaining privacy.",
    improvements: "Planning to add collaborative features and integration with popular calendar applications."
  },
  {
    id: 4,
    name: "Real-Time Chat Application",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
    shortDesc: "WebSocket-based messaging platform",
    techStack: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    description: "A real-time messaging platform with features including group chats, file sharing, typing indicators, and message encryption.",
    liveLink: "#",
    githubLink: "#",
    challenges: "Managing connection state and ensuring message delivery across server restarts required implementing a robust queuing system.",
    improvements: "Future enhancements include video calling and screen sharing capabilities."
  },
  {
    id: 5,
    name: "Portfolio Generator",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    shortDesc: "SaaS platform for creating developer portfolios",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    description: "A SaaS application that allows developers to create customizable portfolios using pre-built templates. Features include drag-and-drop editor and custom domain support.",
    liveLink: "#",
    githubLink: "#",
    challenges: "Creating a flexible template system that works across different designs while maintaining performance.",
    improvements: "Planning to add more templates and AI-powered content suggestions."
  }
];