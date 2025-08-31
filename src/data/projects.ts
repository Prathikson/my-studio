export interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  badge: string;
  tag: "Branding" | "Build" | "Design" | "Social";
  description: string;
  categories: string[];
  date: string;
  seo?: string;
  // New fields for detailed project pages
  sections: ProjectSection[];
  images: string[];
  stats: ProjectStat[];
  finalCTA: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface ProjectSection {
  id: number;
  title: string;
  description: string;
  cta?: {
    text: string;
    link: string;
  };
}

export interface ProjectStat {
  id: number;
  label: string;
  value: string;
  description?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Your Brand Recognized",
    slug: "brand-identity-wildfire-ai",
    image: "/assets/projects/proj1.png",
    badge: "Brand Identity",
    tag: "Branding",
    description: "A detailed case study on fighting Canada's record wildfires using modern AI techniques and comprehensive brand strategy.",
    categories: ["Environmental", "AI", "Safety", "Branding"],
    date: "2025-08-01",
    sections: [
      {
        id: 1,
        title: "Brand Strategy & Identity",
        description: "We developed a comprehensive brand identity that communicates trust, innovation, and environmental responsibility. The visual system reflects the urgency of wildfire prevention while maintaining approachability for government and public stakeholders.",
        cta: {
          text: "View Brand Guidelines",
          link: "/brand-guidelines"
        }
      },
      {
        id: 2,
        title: "AI Integration & Technology",
        description: "Our team integrated cutting-edge AI algorithms for wildfire prediction, creating a seamless user experience that makes complex data accessible to emergency response teams and government officials.",
        cta: {
          text: "Explore Technology",
          link: "/technology-stack"
        }
      },
      {
        id: 3,
        title: "Impact & Results",
        description: "The implemented solution has shown remarkable results in wildfire prediction accuracy, helping Alberta's emergency services respond 40% faster to potential wildfire threats and saving millions in damage prevention."
      }
    ],
    images: [
      "/assets/projects/proj1.png",
      "/assets/projects/proj1-detail1.png",
      "/assets/projects/proj1-detail2.png",
      "/assets/projects/proj1-detail3.png",
      "/assets/projects/proj1-detail4.png"
    ],
    stats: [
      { id: 1, label: "Response Time Improvement", value: "40%", description: "Faster emergency response" },
      { id: 2, label: "Prediction Accuracy", value: "94%", description: "Wildfire risk assessment" },
      { id: 3, label: "Cost Savings", value: "$2.3M", description: "In prevented damages" },
      { id: 4, label: "Coverage Area", value: "500K km²", description: "Monitored territory" }
    ],
    finalCTA: {
      title: "Ready to Transform Your Environmental Initiative?",
      description: "Let's work together to create innovative solutions that make a real impact on environmental challenges.",
      buttonText: "Start Your Project",
      buttonLink: "/contact"
    }
  },
  {
    id: 2,
    title: "GovLab Impact Report",
    slug: "govlab-impact-report-2024",
    image: "/assets/projects/proj2.png",
    badge: "GovLab — AI",
    tag: "Build",
    description: "An comprehensive impact report detailing GovLab's achievements in the 2023–2024 period with interactive data visualizations.",
    categories: ["Government", "Planning", "Impact", "Data Visualization"],
    date: "2025-08-02",
    sections: [
      {
        id: 1,
        title: "Interactive Data Dashboard",
        description: "We built a comprehensive dashboard that transforms complex government data into intuitive, interactive visualizations. The platform allows stakeholders to explore impact metrics, track progress, and identify trends across multiple government initiatives.",
        cta: {
          text: "View Dashboard",
          link: "/dashboard"
        }
      },
      {
        id: 2,
        title: "Report Design & Structure",
        description: "Our design team created a visually compelling report structure that presents dense information in an accessible format. The report combines data storytelling with clean design principles to engage both technical and non-technical audiences.",
        cta: {
          text: "Download Report",
          link: "/download-report"
        }
      },
      {
        id: 3,
        title: "Stakeholder Engagement",
        description: "The impact report has been widely adopted across government departments, serving as a model for transparent reporting and data-driven decision making in public sector initiatives."
      }
    ],
    images: [
      "/assets/projects/proj2.png",
      "/assets/projects/proj2-dashboard.png",
      "/assets/projects/proj2-charts.png",
      "/assets/projects/proj2-mobile.png",
      "/assets/projects/proj2-analytics.png"
    ],
    stats: [
      { id: 1, label: "Government Departments", value: "15", description: "Using the platform" },
      { id: 2, label: "Data Points Tracked", value: "10K+", description: "Across all initiatives" },
      { id: 3, label: "Report Downloads", value: "5,000", description: "In first quarter" },
      { id: 4, label: "User Engagement", value: "85%", description: "Monthly active usage" }
    ],
    finalCTA: {
      title: "Need a Government Digital Solution?",
      description: "We specialize in creating transparent, user-friendly platforms for government agencies and public sector organizations.",
      buttonText: "Discuss Your Project",
      buttonLink: "/contact"
    }
  },
  {
    id: 3,
    title: "Alberta Looking at AI to Predict Wildfires",
    slug: "alberta-ai-wildfire-prediction",
    image: "/assets/projects/proj3.png",
    badge: "Alberta Wildfire AI",
    tag: "Design",
    description: "Exploring how AI is being used in Alberta to predict and prevent wildfires through innovative design solutions.",
    categories: ["Environmental", "Technology", "AI", "User Experience"],
    date: "2025-08-03",
    sections: [
      {
        id: 1,
        title: "User Experience Design",
        description: "We designed an intuitive interface that allows emergency responders to quickly understand AI predictions and take appropriate action. The design prioritizes clarity and speed, essential for emergency response scenarios.",
        cta: {
          text: "View UX Process",
          link: "/ux-process"
        }
      },
      {
        id: 2,
        title: "Data Visualization",
        description: "Complex AI prediction models are translated into clear, actionable visualizations. Heat maps, risk assessments, and probability indicators are designed to be understood at a glance by field teams and command centers.",
        cta: {
          text: "Explore Visualizations",
          link: "/data-viz"
        }
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Recognizing that emergency responders need access in the field, we created a mobile-first design that works reliably in challenging conditions with limited connectivity."
      }
    ],
    images: [
      "/assets/projects/proj3.png",
      "/assets/projects/proj3-interface.png",
      "/assets/projects/proj3-mobile.png",
      "/assets/projects/proj3-heatmap.png",
      "/assets/projects/proj3-dashboard.png"
    ],
    stats: [
      { id: 1, label: "Emergency Teams", value: "12", description: "Using the system" },
      { id: 2, label: "Alert Response Time", value: "60s", description: "Average notification speed" },
      { id: 3, label: "Interface Usability", value: "98%", description: "User satisfaction score" },
      { id: 4, label: "Field Deployment", value: "24/7", description: "Continuous monitoring" }
    ],
    finalCTA: {
      title: "Need Emergency Response Design?",
      description: "We create user-centered designs for critical systems where every second counts and usability can save lives.",
      buttonText: "Get Started",
      buttonLink: "/contact"
    }
  },
  {
    id: 4,
    title: "Social Media Revolution",
    slug: "social-media-campaign-revolution",
    image: "/assets/projects/proj1.png",
    badge: "Social Campaign",
    tag: "Social",
    description: "A comprehensive social media strategy that increased engagement by 300% and built a community of environmental advocates.",
    categories: ["Social Media", "Marketing", "Community", "Environmental"],
    date: "2025-07-15",
    sections: [
      {
        id: 1,
        title: "Content Strategy",
        description: "We developed a content strategy that balances educational information with engaging visuals, creating a narrative that resonates with diverse audiences while driving action on environmental issues.",
        cta: {
          text: "View Content Library",
          link: "/content-strategy"
        }
      },
      {
        id: 2,
        title: "Community Building",
        description: "Our approach focused on building genuine connections between followers, creating space for meaningful discussions and user-generated content that amplified the campaign's reach organically.",
        cta: {
          text: "See Community Growth",
          link: "/community-metrics"
        }
      },
      {
        id: 3,
        title: "Campaign Results",
        description: "The campaign exceeded all expectations, creating lasting behavior change and establishing a self-sustaining community of environmental advocates who continue to drive engagement."
      }
    ],
    images: [
      "/assets/projects/proj1.png",
      "/assets/projects/social-content1.png",
      "/assets/projects/social-content2.png",
      "/assets/projects/social-analytics.png",
      "/assets/projects/social-community.png"
    ],
    stats: [
      { id: 1, label: "Engagement Growth", value: "300%", description: "Increase in interactions" },
      { id: 2, label: "Follower Growth", value: "150K", description: "New community members" },
      { id: 3, label: "User-Generated Content", value: "2,500", description: "Posts from community" },
      { id: 4, label: "Campaign Reach", value: "1.2M", description: "Total impressions" }
    ],
    finalCTA: {
      title: "Ready to Build Your Community?",
      description: "Let's create a social media strategy that builds genuine connections and drives meaningful engagement with your audience.",
      buttonText: "Start Social Campaign",
      buttonLink: "/contact"
    }
  },
  {
    id: 5,
    title: "Digital Infrastructure Upgrade",
    slug: "digital-infrastructure-modernization",
    image: "/assets/projects/proj2.png",
    badge: "Infrastructure",
    tag: "Build",
    description: "Modernizing legacy systems with cloud-native architecture, improving performance by 250% and reducing operational costs.",
    categories: ["Infrastructure", "Cloud", "Performance", "Modernization"],
    date: "2025-07-20",
    sections: [
      {
        id: 1,
        title: "System Architecture",
        description: "We redesigned the entire system architecture using microservices and cloud-native patterns, ensuring scalability, reliability, and maintainability for future growth and changing requirements.",
        cta: {
          text: "View Architecture",
          link: "/system-architecture"
        }
      },
      {
        id: 2,
        title: "Performance Optimization",
        description: "Through strategic caching, database optimization, and efficient resource management, we achieved dramatic performance improvements while reducing infrastructure costs significantly.",
        cta: {
          text: "See Performance Metrics",
          link: "/performance"
        }
      },
      {
        id: 3,
        title: "Migration Strategy",
        description: "Our phased migration approach ensured zero downtime during the transition, with comprehensive testing and rollback procedures to guarantee business continuity throughout the upgrade process."
      }
    ],
    images: [
      "/assets/projects/proj2.png",
      "/assets/projects/infrastructure-diagram.png",
      "/assets/projects/performance-charts.png",
      "/assets/projects/cloud-architecture.png",
      "/assets/projects/monitoring-dashboard.png"
    ],
    stats: [
      { id: 1, label: "Performance Boost", value: "250%", description: "Faster response times" },
      { id: 2, label: "Cost Reduction", value: "45%", description: "Lower operational costs" },
      { id: 3, label: "Uptime Improvement", value: "99.9%", description: "System availability" },
      { id: 4, label: "Migration Time", value: "0", description: "Zero downtime migration" }
    ],
    finalCTA: {
      title: "Need Infrastructure Modernization?",
      description: "Transform your legacy systems with our proven approach to cloud migration and performance optimization.",
      buttonText: "Plan Your Upgrade",
      buttonLink: "/contact"
    }
  },
  {
    id: 6,
    title: "E-commerce Platform Redesign",
    slug: "ecommerce-platform-redesign",
    image: "/assets/projects/proj3.png",
    badge: "E-commerce",
    tag: "Design",
    description: "Complete redesign of an e-commerce platform resulting in 180% increase in conversions and improved user experience.",
    categories: ["E-commerce", "UX/UI", "Conversion", "Mobile"],
    date: "2025-06-10",
    sections: [
      {
        id: 1,
        title: "User Research & Analysis",
        description: "We conducted extensive user research to understand pain points in the existing platform, analyzing user behavior, conversion funnels, and identifying opportunities for improvement.",
        cta: {
          text: "View Research Findings",
          link: "/user-research"
        }
      },
      {
        id: 2,
        title: "Design System Creation",
        description: "A comprehensive design system was created to ensure consistency across all touchpoints, with reusable components and clear guidelines for future development and scaling.",
        cta: {
          text: "Explore Design System",
          link: "/design-system"
        }
      },
      {
        id: 3,
        title: "Conversion Optimization",
        description: "Through strategic UX improvements, streamlined checkout processes, and mobile optimization, we achieved significant increases in conversion rates and customer satisfaction."
      }
    ],
    images: [
      "/assets/projects/proj3.png",
      "/assets/projects/ecommerce-homepage.png",
      "/assets/projects/ecommerce-product.png",
      "/assets/projects/ecommerce-checkout.png",
      "/assets/projects/ecommerce-mobile.png"
    ],
    stats: [
      { id: 1, label: "Conversion Increase", value: "180%", description: "Higher sales conversion" },
      { id: 2, label: "User Satisfaction", value: "92%", description: "Positive feedback score" },
      { id: 3, label: "Mobile Traffic", value: "65%", description: "Increase in mobile users" },
      { id: 4, label: "Page Load Speed", value: "2.1s", description: "Average load time" }
    ],
    finalCTA: {
      title: "Ready to Boost Your Conversions?",
      description: "Let's redesign your e-commerce experience to drive more sales and create happier customers.",
      buttonText: "Start Redesign",
      buttonLink: "/contact"
    }
  },
  {
    id: 7,
    title: "Healthcare App Development",
    slug: "healthcare-mobile-app",
    image: "/assets/projects/proj1.png",
    badge: "Healthcare",
    tag: "Build",
    description: "A secure, HIPAA-compliant mobile application connecting patients with healthcare providers for remote consultations.",
    categories: ["Healthcare", "Mobile", "Security", "Telemedicine"],
    date: "2025-05-22",
    sections: [
      {
        id: 1,
        title: "Security & Compliance",
        description: "Built with HIPAA compliance at its core, featuring end-to-end encryption, secure authentication, and comprehensive audit trails to protect patient data while enabling seamless healthcare delivery.",
        cta: {
          text: "Learn About Security",
          link: "/security-features"
        }
      },
      {
        id: 2,
        title: "User Experience Design",
        description: "Designed with both patients and healthcare providers in mind, the interface is intuitive for users of all ages and technical abilities, reducing barriers to accessing quality healthcare.",
        cta: {
          text: "View App Demo",
          link: "/app-demo"
        }
      },
      {
        id: 3,
        title: "Integration & Scalability",
        description: "The platform integrates seamlessly with existing healthcare systems and electronic health records, built to scale from small practices to large healthcare networks."
      }
    ],
    images: [
      "/assets/projects/proj1.png",
      "/assets/projects/healthcare-login.png",
      "/assets/projects/healthcare-consultation.png",
      "/assets/projects/healthcare-dashboard.png",
      "/assets/projects/healthcare-mobile.png"
    ],
    stats: [
      { id: 1, label: "Active Users", value: "25K+", description: "Registered patients" },
      { id: 2, label: "Consultations", value: "100K+", description: "Completed sessions" },
      { id: 3, label: "Provider Satisfaction", value: "96%", description: "Positive feedback" },
      { id: 4, label: "Response Time", value: "<30s", description: "Average connection time" }
    ],
    finalCTA: {
      title: "Building Healthcare Solutions?",
      description: "We create secure, compliant healthcare applications that improve patient outcomes and streamline provider workflows.",
      buttonText: "Discuss Healthcare Project",
      buttonLink: "/contact"
    }
  },
  {
    id: 8,
    title: "Startup Brand Launch",
    slug: "fintech-startup-branding",
    image: "/assets/projects/proj2.png",
    badge: "FinTech Startup",
    tag: "Branding",
    description: "Complete brand identity and launch strategy for a fintech startup, from logo design to market positioning.",
    categories: ["Branding", "Startup", "FinTech", "Strategy"],
    date: "2025-04-18",
    sections: [
      {
        id: 1,
        title: "Brand Identity Development",
        description: "We created a distinctive brand identity that conveys trust and innovation in the competitive fintech space, with a memorable logo, comprehensive color palette, and typography that works across all platforms.",
        cta: {
          text: "View Brand Assets",
          link: "/brand-assets"
        }
      },
      {
        id: 2,
        title: "Market Positioning",
        description: "Our strategic positioning differentiates the startup in a crowded market, focusing on transparency and user empowerment while building credibility with both consumers and investors.",
        cta: {
          text: "Read Strategy Brief",
          link: "/positioning-strategy"
        }
      },
      {
        id: 3,
        title: "Launch Campaign",
        description: "The coordinated launch campaign generated significant buzz, resulting in strong initial user adoption and successful seed funding round within six months of brand launch."
      }
    ],
    images: [
      "/assets/projects/proj2.png",
      "/assets/projects/fintech-logo.png",
      "/assets/projects/fintech-website.png",
      "/assets/projects/fintech-mobile-app.png",
      "/assets/projects/fintech-marketing.png"
    ],
    stats: [
      { id: 1, label: "Brand Recognition", value: "78%", description: "Within target market" },
      { id: 2, label: "User Acquisition", value: "50K", description: "First year signups" },
      { id: 3, label: "Funding Raised", value: "$2.5M", description: "Seed round success" },
      { id: 4, label: "Market Share", value: "12%", description: "In target segment" }
    ],
    finalCTA: {
      title: "Launching a New Brand?",
      description: "From concept to market success, we help startups build powerful brands that attract customers and investors.",
      buttonText: "Launch Your Brand",
      buttonLink: "/contact"
    }
  }
];