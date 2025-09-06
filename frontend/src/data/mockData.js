export const mockData = {
  experiences: [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Solution Architect",
      period: "2020 - Present",
      location: "Bangalore, India",
      description: "Leading architecture design for cloud-native applications serving 2M+ users. Implemented microservices architecture reducing system downtime by 40%. Mentoring team of 15+ engineers.",
      technologies: ["AWS", "Kubernetes", "Python", "React", "MongoDB", "AI/ML"],
      achievements: [
        "Designed scalable architecture handling 10x traffic growth",
        "Reduced infrastructure costs by 35% through optimization",
        "Led successful migration to cloud-native stack"
      ]
    },
    {
      id: 2,
      company: "InnovateLabs",
      position: "AI Solutions Lead",
      period: "2018 - 2020",
      location: "Chennai, India",
      description: "Spearheaded AI initiative development and implementation. Built recommendation systems and NLP solutions for e-commerce platform. Collaborated with data science teams on ML model deployment.",
      technologies: ["TensorFlow", "PyTorch", "Python", "Docker", "GCP", "FastAPI"],
      achievements: [
        "Implemented AI recommendation system improving conversion by 25%",
        "Deployed 5+ ML models in production environment",
        "Built real-time analytics dashboard for business insights"
      ]
    },
    {
      id: 3,
      company: "CodeCraft Technologies",
      position: "Senior Software Developer",
      period: "2015 - 2018",
      location: "Mumbai, India",
      description: "Developed full-stack web applications using modern frameworks. Implemented DevOps practices and CI/CD pipelines. Collaborated with cross-functional teams on product development.",
      technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Jenkins", "Docker"],
      achievements: [
        "Built 8+ enterprise applications from ground up",
        "Implemented automated testing reducing bugs by 50%",
        "Established development best practices and coding standards"
      ]
    },
    {
      id: 4,
      company: "StartupVenture",
      position: "Full Stack Developer",
      period: "2012 - 2015",
      location: "Hyderabad, India",
      description: "Early-stage startup experience building MVP products. Worked across the entire technology stack from database design to frontend implementation. Participated in product strategy and technical decisions.",
      technologies: ["Node.js", "Express", "React", "MongoDB", "AWS", "Redis"],
      achievements: [
        "Developed MVP that secured $2M in Series A funding",
        "Built real-time collaboration features for 1000+ users",
        "Optimized application performance achieving 2x speed improvement"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered Customer Analytics Platform",
      description: "Enterprise-grade analytics platform leveraging machine learning for customer behavior prediction and business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker"],
      features: [
        "Real-time customer behavior tracking",
        "Predictive analytics with 90% accuracy",
        "Interactive dashboard with custom visualizations",
        "API-first architecture for seamless integrations"
      ],
      status: "Production",
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      id: 2,
      title: "Cloud-Native Microservices Platform",
      description: "Scalable microservices architecture built on Kubernetes with automated deployment and monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Kubernetes", "Docker", "Go", "gRPC", "Prometheus", "Grafana"],
      features: [
        "Auto-scaling based on traffic patterns",
        "Service mesh architecture with Istio",
        "Comprehensive monitoring and alerting",
        "Zero-downtime deployment pipeline"
      ],
      status: "Production",
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      id: 3,
      title: "Intelligent Document Processing System",
      description: "AI-powered document analysis and processing system using computer vision and natural language processing.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenCV", "Tesseract OCR", "spaCy", "FastAPI", "Redis"],
      features: [
        "Automated document classification",
        "Text extraction with 95% accuracy",
        "Multi-language support",
        "Batch processing capabilities"
      ],
      status: "Beta",
      github: "https://github.com",
      demo: "https://demo.example.com"
    },
    {
      id: 4,
      title: "Real-time Collaboration Platform",
      description: "WebSocket-based collaboration platform enabling real-time document editing and team communication.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Socket.io", "React", "MongoDB", "Redis", "AWS"],
      features: [
        "Real-time collaborative editing",
        "Video/audio calling integration",
        "File sharing and version control",
        "Team workspace management"
      ],
      status: "Production",
      github: "https://github.com",
      demo: "https://demo.example.com"
    }
  ],

  skills: {
    technical: [
      { name: "Python", level: 95, category: "Programming" },
      { name: "JavaScript/TypeScript", level: 90, category: "Programming" },
      { name: "Java", level: 85, category: "Programming" },
      { name: "Go", level: 80, category: "Programming" },
      { name: "React/Next.js", level: 90, category: "Frontend" },
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "FastAPI/Django", level: 90, category: "Backend" },
      { name: "Spring Boot", level: 85, category: "Backend" },
      { name: "AWS/GCP/Azure", level: 90, category: "Cloud" },
      { name: "Kubernetes/Docker", level: 88, category: "DevOps" },
      { name: "TensorFlow/PyTorch", level: 82, category: "AI/ML" },
      { name: "MongoDB/PostgreSQL", level: 85, category: "Database" }
    ],
    soft: [
      "Technical Leadership",
      "Solution Architecture",
      "Team Mentoring",
      "Agile Methodologies",
      "Product Strategy",
      "Stakeholder Management"
    ]
  },

  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      position: "VP of Engineering",
      company: "TechCorp Solutions",
      content: "Arun's architectural vision and leadership have been instrumental in our digital transformation. His ability to design scalable solutions while mentoring the team is exceptional.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CTO",
      company: "InnovateLabs",
      content: "Working with Arun on our AI initiatives was a game-changer. His deep understanding of both business requirements and technical implementation made our ML projects successful.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Jennifer Kim",
      position: "Product Manager",
      company: "CodeCraft Technologies",
      content: "Arun consistently delivered high-quality solutions on time. His attention to detail and proactive communication made complex projects feel manageable and successful.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ],

  caseStudies: [
    {
      id: 1,
      title: "Enterprise Cloud Migration",
      client: "Fortune 500 Financial Services",
      challenge: "Legacy monolithic application serving 5M+ customers needed modernization to improve scalability and reduce operational costs.",
      solution: "Designed and implemented microservices architecture on AWS with Kubernetes orchestration, implementing CI/CD pipelines and monitoring systems.",
      results: [
        "40% reduction in infrastructure costs",
        "99.9% uptime improvement",
        "50% faster feature deployment",
        "Improved developer productivity by 60%"
      ],
      duration: "8 months",
      team: "12 engineers"
    },
    {
      id: 2,
      title: "AI-Powered Recommendation Engine",
      client: "E-commerce Platform",
      challenge: "Low customer engagement and conversion rates due to generic product recommendations and poor user experience.",
      solution: "Built machine learning recommendation system using collaborative filtering and content-based algorithms, integrated with real-time analytics.",
      results: [
        "25% increase in conversion rate",
        "35% improvement in user engagement",
        "20% increase in average order value",
        "Reduced customer acquisition cost by 15%"
      ],
      duration: "6 months",
      team: "8 engineers + 3 data scientists"
    }
  ]
};