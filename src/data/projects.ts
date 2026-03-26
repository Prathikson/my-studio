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
  image: "/assets/projects/proj2.png",
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
    "/assets/projects/proj2.png",
    "/assets/projects/cafe/hero.png",
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
  image: "/assets/projects/proj5.png",
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
    "/assets/projects/proj5.png",
    "/assets/projects/proj5-dashboard.png",
    "/assets/projects/proj5-transcript.png",
    "/assets/projects/proj5-summary.png",
    "/assets/projects/proj5-mobile.png"
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
  image: "/assets/projects/proj6.png",
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
    "/assets/projects/proj6.png",
    "/assets/projects/ride/hero.png",
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

];