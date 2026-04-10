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
  title: "Social Media Boost",
  slug: "social-media-boost-management",
  image: "/assets/projects/proj1.png",
  badge: "Social Media Management",
  tag: "Social",
  description: "Full-service social media management for Instagram, Facebook, TikTok, and more. We create engaging content, manage communities, and drive real growth across all major platforms.",
  categories: ["Social Media", "Content Creation", "Community Management", "Growth"],
  date: "2025-08-01",
  sections: [
    {
      id: 1,
      title: "Multi-Platform Strategy",
      description: "We developed a cohesive content strategy across Instagram, Facebook, TikTok, and OnlyFans that maintains brand consistency while optimizing for each platform's unique audience and algorithm.",
      cta: {
        text: "View Content Strategy",
        link: "/content-strategy"
      }
    },
    {
      id: 2,
      title: "Content Creation & Scheduling",
      description: "Our team creates scroll-stopping content tailored to each platform, manages posting schedules, engages with communities, and responds to comments and messages to build authentic connections with your audience.",
      cta: {
        text: "See Our Process",
        link: "/process"
      }
    },
    {
      id: 3,
      title: "Growth & Analytics",
      description: "Through strategic content planning and community engagement, we've helped clients achieve consistent follower growth, increased engagement rates, and stronger brand presence across all social platforms."
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
    { id: 1, label: "Follower Growth", value: "250%", description: "Average increase" },
    { id: 2, label: "Engagement Rate", value: "8.5%", description: "Across all platforms" },
    { id: 3, label: "Content Pieces", value: "500+", description: "Created monthly" },
    { id: 4, label: "Platforms Managed", value: "5+", description: "Including OnlyFans" }
  ],
  finalCTA: {
    title: "Ready to Boost Your Social Media Presence?",
    description: "Let us handle your social media so you can focus on running your business. We create content, engage communities, and drive real results.",
    buttonText: "Get Started",
    buttonLink: "/contact"
  }
},
{
  id: 2,
  title: "Luminary Cafe",
  slug: "luminary-cafe-website",
  image: "/assets/projects/hero.png",
  badge: "Web Design & Development",
  tag: "Build",
  description: "A modern, minimal website for Luminary Cafe in Edmonton, Alberta. Clean design meets functionality to showcase their artisan coffee and create an inviting online presence.",
  categories: ["Web Design", "Hospitality", "Branding", "Local Business"],
  date: "2025-08-02",
  sections: [
    {
      id: 1,
      title: "Minimal Design Philosophy",
      description: "We created a clean, modern aesthetic that reflects the cafe's warm atmosphere and artisan approach. The design emphasizes beautiful photography, easy navigation, and a seamless user experience.",
      cta: {
        text: "View Live Site",
        link: "https://cafe.xtoicstudio.com"
      }
    },
    {
      id: 2,
      title: "Menu & Online Ordering",
      description: "An intuitive menu system with beautiful food photography and integrated online ordering functionality. Customers can browse the full menu, view daily specials, and place orders with just a few clicks.",
      cta: {
        text: "Explore Site",
        link: "https://cafe.xtoicstudio.com"
      }
    },
    {
      id: 3,
      title: "Mobile-First Experience",
      description: "Built with a mobile-first approach, the website provides a flawless experience on all devices, making it easy for customers to find hours, location, and menu information on the go."
    }
  ],
  images: [
    "/assets/projects/hero.png",
    "/assets/projects/cafe/proj2.png",
    "/assets/projects/cafe/mainb.png",
    "/assets/projects/cafe/menu.png",
    "/assets/projects/cafe/stacking.png",
    "/assets/projects/cafe/responsive.png",
    "/assets/projects/cafe/testimonial.png",
    "/assets/projects/cafe/journey.png",
  ],
  stats: [
    { id: 1, label: "Page Load Speed", value: "1.2s", description: "Lightning fast" },
    { id: 2, label: "Online Orders", value: "40%", description: "Increase in first month" },
    { id: 3, label: "Mobile Traffic", value: "75%", description: "Of all visitors" },
    { id: 4, label: "User Satisfaction", value: "96%", description: "Positive feedback" }
  ],
  finalCTA: {
    title: "Need a Website for Your Business?",
    description: "We create beautiful, functional websites that help local businesses connect with customers and grow their online presence.",
    buttonText: "Start Your Project",
    buttonLink: "/contact"
  }
},
{
  id: 3,
  title: "Mantis AI",
  slug: "mantis-ai-interview-prep",
  image: "/assets/projects/proj3.png",
  badge: "AI Application",
  tag: "Design",
  description: "An AI-powered interview preparation platform where users create custom mock interviews and practice their skills with intelligent feedback and real-time analysis.",
  categories: ["AI", "EdTech", "Career", "SaaS"],
  date: "2025-08-03",
  sections: [
    {
      id: 1,
      title: "AI Interview Simulation",
      description: "We built an intelligent interview system that adapts to user responses, asks relevant follow-up questions, and provides realistic interview scenarios across various industries and job roles.",
      cta: {
        text: "Try Demo",
        link: "/demo"
      }
    },
    {
      id: 2,
      title: "Real-Time Feedback & Analysis",
      description: "Users receive instant AI-powered feedback on their responses, body language, tone, and communication skills. The system identifies strengths and areas for improvement with actionable insights.",
      cta: {
        text: "See Features",
        link: "/features"
      }
    },
    {
      id: 3,
      title: "Custom Interview Creation",
      description: "Create personalized mock interviews tailored to specific job descriptions, industries, and difficulty levels. The platform adapts to each user's experience level and career goals."
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
    { id: 1, label: "Mock Interviews", value: "10K+", description: "Completed successfully" },
    { id: 2, label: "User Success Rate", value: "87%", description: "Got job offers" },
    { id: 3, label: "AI Accuracy", value: "94%", description: "Feedback precision" },
    { id: 4, label: "Industries Covered", value: "25+", description: "Job categories" }
  ],
  finalCTA: {
    title: "Ready to Build Your AI Product?",
    description: "We specialize in creating intelligent applications that solve real problems and deliver exceptional user experiences.",
    buttonText: "Discuss Your Idea",
    buttonLink: "/contact"
  }
},
{
  id: 4,
  title: "MP4 to MP3 Converter",
  slug: "mp4-to-mp3-converter-tool",
  image: "/assets/projects/proj4.png",
  badge: "Web Application",
  tag: "Build",
  description: "A fast, secure, and user-friendly web tool for converting MP4 video files to MP3 audio format. No downloads required—everything happens in your browser.",
  categories: ["Web App", "Media", "Conversion", "Tools"],
  date: "2025-08-04",
  sections: [
    {
      id: 1,
      title: "Browser-Based Conversion",
      description: "We built a powerful conversion engine that runs entirely in the browser using WebAssembly, ensuring user privacy and eliminating the need for file uploads to external servers.",
      cta: {
        text: "Try Converter",
        link: "/converter"
      }
    },
    {
      id: 2,
      title: "Fast & High Quality",
      description: "Our optimized conversion process maintains audio quality while delivering fast processing speeds. Batch conversion support allows users to convert multiple files simultaneously.",
      cta: {
        text: "View Features",
        link: "/features"
      }
    },
    {
      id: 3,
      title: "Privacy-Focused Design",
      description: "All conversions happen locally in the user's browser—files never leave their device. This ensures complete privacy and eliminates security concerns associated with file uploads."
    }
  ],
  images: [
    "/assets/projects/proj4.png",
    "/assets/projects/proj4-interface.png",
    "/assets/projects/proj4-batch.png",
    "/assets/projects/proj4-settings.png",
    "/assets/projects/proj4-mobile.png"
  ],
  stats: [
    { id: 1, label: "Files Converted", value: "50K+", description: "Since launch" },
    { id: 2, label: "Conversion Speed", value: "2x", description: "Faster than competitors" },
    { id: 3, label: "User Rating", value: "4.9/5", description: "Average satisfaction" },
    { id: 4, label: "Max File Size", value: "2GB", description: "Supported limit" }
  ],
  finalCTA: {
    title: "Need a Custom Web Tool?",
    description: "We build practical, user-friendly web applications that solve everyday problems with clean design and powerful functionality.",
    buttonText: "Start Building",
    buttonLink: "/contact"
  }
},
{
  id: 5,
  title: "Notez AI",
  slug: "notez-ai-meeting-notes",
  image: "/assets/projects/notez/hero.png",
  badge: "AI Note-Taking",
  tag: "Design",
  description: "AI-powered note-taking app that automatically transcribes and summarizes your meeting recordings and class lectures into organized, searchable notes.",
  categories: ["AI", "Productivity", "Education", "SaaS"],
  date: "2025-08-05",
  sections: [
    {
      id: 1,
      title: "Automatic Transcription",
      description: "Our AI engine accurately transcribes audio from meetings and class recordings with industry-leading accuracy. Speaker identification and timestamps make it easy to navigate long recordings.",
      cta: {
        text: "Try Free Trial",
        link: "/trial"
      }
    },
    {
      id: 2,
      title: "Smart Summarization",
      description: "AI-powered summarization extracts key points, action items, and important takeaways from recordings. Get comprehensive summaries in seconds instead of listening to hours of audio.",
      cta: {
        text: "See Examples",
        link: "/examples"
      }
    },
    {
      id: 3,
      title: "Organized & Searchable",
      description: "All notes are automatically organized by date, topic, and tags. Powerful search functionality lets you find specific information across all your recordings instantly."
    }
  ],
  images: [
    "/assets/projects/notez/hero.png",
  ],
  stats: [
    { id: 1, label: "Transcription Accuracy", value: "97%", description: "Word recognition rate" },
    { id: 2, label: "Time Saved", value: "75%", description: "Vs manual note-taking" },
    { id: 3, label: "Active Users", value: "5K+", description: "Students & professionals" },
    { id: 4, label: "Hours Transcribed", value: "50K+", description: "Total recordings" }
  ],
  finalCTA: {
    title: "Ready to Transform Your Productivity?",
    description: "We build AI-powered tools that save time and make your work more efficient. Let's create something amazing together.",
    buttonText: "Get Started",
    buttonLink: "/contact"
  }
},
{
  id: 6,
  title: "MH Rideshare",
  slug: "mh-rideshare-website",
  image: "/assets/projects/hero.png",
  badge: "SEO & Web Design",
  tag: "Branding",
  description: "A modern website for MH Rideshare in Medicine Hat, Alberta, designed to build traffic and digital presence with comprehensive SEO optimization services.",
  categories: ["Web Design", "SEO", "Local Business", "Transportation"],
  date: "2025-08-06",
  sections: [
    {
      id: 1,
      title: "SEO-Optimized Design",
      description: "We built a fully optimized website targeting local search terms and transportation-related keywords. The site ranks on page one for key search queries, driving consistent organic traffic.",
      cta: {
        text: "View Live Site",
        link: "https://mhride.ca"
      }
    },
    {
      id: 2,
      title: "Local Search Domination",
      description: "Through strategic local SEO, Google My Business optimization, and local citation building, we established MH Rideshare as the go-to transportation service in Medicine Hat and surrounding areas.",
      cta: {
        text: "SEO Strategy",
        link: "/services/build/seo/"
      }
    },
    {
      id: 3,
      title: "Digital Presence & Growth",
      description: "The website serves as the central hub for all digital marketing efforts, integrating with social media, online booking systems, and customer communication tools to create a seamless user experience."
    }
  ],
  images: [
    "/assets/projects/hero.png",
    "/assets/projects/ride/main.png",
    "/assets/projects/ride/proj6.png",
    "/assets/projects/ride/about.png",
    "/assets/projects/ride/responsive.png",
    "/assets/projects/ride/download.png",
    "/assets/projects/ride/steps.png",
    "/assets/projects/ride/testimonial.png",
  ],
  stats: [
    { id: 1, label: "Organic Traffic", value: "320%", description: "Increase in 6 months" },
    { id: 2, label: "Search Rankings", value: "#1", description: "For key local terms" },
    { id: 3, label: "Online Bookings", value: "85%", description: "From website traffic" },
    { id: 4, label: "Page Load Speed", value: "0.9s", description: "Mobile optimized" }
  ],
  finalCTA: {
    title: "Need SEO & Web Design Services?",
    description: "We help local businesses dominate their markets with SEO-optimized websites that drive traffic, generate leads, and grow revenue.",
    buttonText: "Boost Your Presence",
    buttonLink: "/contact"
  }
},
  {
    id: 7,
    title: "GTX Mods",
    slug: "gtx-mods-platform",
    image: "/assets/projects/gtx/hero.png",
    badge: "Logistics & Supply Chain",
    tag: "Build",
    description: "A high-performance web platform for GTX, streamlining freight management and global transport logistics with a focus on reliability and real-time tracking.",
    categories: ["Web Design", "Logistics", "Freight", "Enterprise"],
    date: "2025-09-12",
    sections: [
      {
        id: 1,
        title: "Operational Efficiency",
        description: "We designed a clean, professional interface that prioritizes complex data visualization, making it easy for clients to track shipments and manage supply chain operations.",
        cta: {
          text: "View Live Site",
          link: "https://gtx.xtoicstudio.com/"
        }
      },
      {
        id: 2,
        title: "Scalable Infrastructure",
        description: "Built with speed and scalability in mind, the platform ensures rapid load times even with heavy data processing, supporting global logistics demands.",
        cta: {
          text: "Our Tech Stack",
          link: "/services/build/development/"
        }
      }
    ],
    images: [
      "/assets/projects/gtx/hero.png",
      "/assets/projects/gtx/main.png",
      "/assets/projects/gtx/about.png",
      "/assets/projects/gtx/services.png",
      "/assets/projects/gtx/reviews.png",
      "/assets/projects/gtx/video.png",
      "/assets/projects/gtx/faq.png",
      "/assets/projects/gtx/contact.png"
    ],
    stats: [
      { id: 1, label: "User Retention", value: "65%", description: "Increase in platform usage" },
      { id: 2, label: "Load Time", value: "1.1s", description: "Global average" },
      { id: 3, label: "Security", value: "100%", description: "Data encryption" }
    ],
    finalCTA: {
      title: "Streamline Your Logistics?",
      description: "We build robust digital solutions for the transport industry that enhance operational efficiency and user trust.",
      buttonText: "Start Your Project",
      buttonLink: "/contact"
    }
  },
  {
    id: 8,
    title: "Rasoi Indian Kitchen",
    slug: "rasoi-restaurant-website",
    image: "/assets/projects/rasoi/hero.png",
    badge: "UI/UX & Hospitality",
    tag: "Branding",
    description: "A mouth-watering digital experience for Rasoi, showcasing authentic Indian cuisine through immersive visual storytelling and seamless online reservations.",
    categories: ["Hospitality", "Web Design", "Local Business", "UI/UX"],
    date: "2025-10-05",
    sections: [
      {
        id: 1,
        title: "Visual Storytelling",
        description: "Focusing on high-quality food photography and elegant typography, we created a digital menu that captures the essence of Rasoi’s authentic flavors.",
        cta: {
          text: "View Live Site",
          link: "https://rasoi.xtoicstudio.com/"
        }
      },
      {
        id: 2,
        title: "Seamless Reservations",
        description: "Integrated a friction-less booking system that allows customers to reserve tables in seconds, directly increasing dine-in conversions.",
        cta: {
          text: "UI/UX Design",
          link: "/services/design/ui-ux/"
        }
      }
    ],
    images: [
      "/assets/projects/rasoi/hero.png",
      "/assets/projects/rasoi/main.png",
      "/assets/projects/rasoi/space.png",
      "/assets/projects/rasoi/wines.png",
      "/assets/projects/rasoi/menu.png",
      "/assets/projects/rasoi/contact.png",
      "/assets/projects/rasoi/dishes.png",
    ],
    stats: [
      { id: 1, label: "Online Bookings", value: "+120%", description: "Increase in first month" },
      { id: 2, label: "Mobile Traffic", value: "78%", description: "Highly responsive design" },
      { id: 3, label: "Menu Views", value: "5k+", description: "Monthly unique visitors" }
    ],
    finalCTA: {
      title: "Grow Your Restaurant?",
      description: "Transform your culinary brand with a website that looks as good as your food tastes.",
      buttonText: "Book a Discovery Call",
      buttonLink: "/contact"
    }
  },
  {
    id: 9,
    title: "JoyBliss Wellness",
    slug: "joybliss-wellness-retreat",
    image: "/assets/projects/tattoo/preloader.png",
    badge: "E-commerce & Lifestyle",
    tag: "Social",
    description: "A serene and calming web experience for JoyBliss, designed to promote holistic wellness programs and facilitate easy booking for retreats and classes.",
    categories: ["Wellness", "E-commerce", "Health", "Web Design"],
    date: "2025-11-20",
    sections: [
      {
        id: 1,
        title: "Calming User Experience",
        description: "Using a soft color palette and minimalist layout, the design reflects the tranquility of the JoyBliss brand, reducing user friction and stress.",
        cta: {
          text: "View Live Site",
          link: "https://joybliss.xtoicstudio.com/"
        }
      },
      {
        id: 2,
        title: "Class Scheduling",
        description: "A custom-built scheduling system allows users to browse wellness programs and book sessions with real-time availability.",
        cta: {
          text: "Custom Solutions",
          link: "/services/build/development/"
        }
      }
    ],
    images: [
      "/assets/projects/tattoo/preloader.png",
      "/assets/projects/tattoo/hero.png",
      "/assets/projects/tattoo/galllery.png",
      "/assets/projects/tattoo/footer.png",
      "/assets/projects/tattoo/section2.png",
    ],
    stats: [
      { id: 1, label: "Conversion Rate", value: "4.8%", description: "On booking pages" },
      { id: 2, label: "Session Duration", value: "3:45", description: "Average time on site" },
      { id: 3, label: "Growth", value: "45%", description: "Increase in newsletter subs" }
    ],
    finalCTA: {
      title: "Elevate Your Wellness Brand?",
      description: "We create digital environments that resonate with your audience and turn visitors into loyal members.",
      buttonText: "Let's Build Together",
      buttonLink: "/contact"
    }
  },
  {
    id: 10,
    title: "Nexus Tech",
    slug: "nexus-saas-platform",
    image: "/assets/projects/nexus/hero.png",
    badge: "SaaS & Innovation",
    tag: "Social",
    description: "A forward-thinking website for Nexus, a tech-driven platform focusing on innovative software solutions and scalable digital transformation.",
    categories: ["SaaS", "Tech", "B2B", "Web Development"],
    date: "2025-12-15",
    sections: [
      {
        id: 1,
        title: "Tech-Forward Design",
        description: "A modern, dark-themed interface utilizing glassmorphism and high-tech visuals to position Nexus as a leader in the SaaS space.",
        cta: {
          text: "View Live Site",
          link: "https://nexus.xtoicstudio.com/"
        }
      },
      {
        id: 2,
        title: "Feature Showcase",
        description: "Interactive sections highlight the software’s core capabilities, ensuring potential B2B clients understand the value proposition immediately.",
        cta: {
          text: "View Features",
          link: "https://nexus.xtoicstudio.com/tools"
        }
      }
    ],
    images: [
      "/assets/projects/nexus/hero.png",
      "/assets/projects/nexus/pricing.png",
      "/assets/projects/nexus/weoffer.png",
      "/assets/projects/nexus/tool1.png",
      "/assets/projects/nexus/tool2.png",
      "/assets/projects/nexus/booking.png",
    ],
    stats: [
      { id: 1, label: "Page Speed", value: "98/100", description: "Lighthouse score" },
      { id: 2, label: "Lead Gen", value: "210%", description: "Increase in demo requests" },
      { id: 3, label: "Interactions", value: "15k+", description: "Monthly micro-interactions" }
    ],
    finalCTA: {
      title: "Scale Your SaaS?",
      description: "From concept to conversion, we build tech-focused websites that communicate innovation and drive growth.",
      buttonText: "Launch Your SaaS",
      buttonLink: "/contact"
    }
  },
  {
    id: 11,
    title: "Luxe Spa",
    slug: "luxe-spa-services",
    image: "/assets/projects/spa/hero.png",
    badge: "Professional Services",
    tag: "Branding",
    description: "A premium, aesthetic website for a luxury spa, focusing on high-end service presentation and an effortless appointment booking flow.",
    categories: ["Beauty", "Luxury", "Local Business", "Booking"],
    date: "2026-01-10",
    sections: [
      {
        id: 1,
        title: "Aesthetic Excellence",
        description: "The UI was crafted to mirror the luxury experience of the spa itself, using elegant layouts and a soothing, high-end visual language.",
        cta: {
          text: "View Live Site",
          link: "https://spa-website-eight.vercel.app/"
        }
      },
      {
        id: 2,
        title: "Service Catalog",
        description: "Detailed service pages categorized by treatment types, allowing users to explore benefits and book specific therapists easily.",
        cta: {
          text: "Luxury SEO Strategy",
          link: "/services/build/seo/"
        }
      }
    ],
    images: [
      "/assets/projects/spa/hero.png",
      "/assets/projects/spa/herokr.png",
      "/assets/projects/spa/main.png",
      "/assets/projects/spa/reviews.png",
      "/assets/projects/spa/services.png",
      "/assets/projects/spa/story.png"
    ],
    stats: [
      { id: 1, label: "Engagement", value: "340%", description: "Increase in service page views" },
      { id: 2, label: "Booking Speed", value: "45s", description: "Average checkout time" },
      { id: 3, label: "Direct Traffic", value: "55%", description: "From brand searches" }
    ],
    finalCTA: {
      title: "Elevate Your Service Business?",
      description: "We help premium service providers dominate their local markets with high-converting, beautiful websites.",
      buttonText: "Get Started",
      buttonLink: "/contact"
    }
  }

];