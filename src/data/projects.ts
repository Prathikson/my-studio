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
    description:
      "Full-service social media management for Instagram, Facebook, TikTok, and more. We create engaging content, manage communities, and drive real growth across all major platforms.",
    categories: ["Social Media", "Content Creation", "Community Management", "Growth"],
    date: "2025-08-01",
    sections: [
      {
        id: 1,
        title: "Multi-Platform Strategy",
        description:
          "We develop a cohesive content strategy across Instagram, Facebook, and TikTok that maintains brand consistency while optimizing for each platform's unique audience and algorithm.",
        cta: {
          text: "View Content Strategy",
          link: "/content-strategy",
        },
      },
      {
        id: 2,
        title: "Content Creation & Scheduling",
        description:
          "Our team creates scroll-stopping content tailored to each platform, manages posting schedules, engages with communities, and responds to comments and messages to build authentic connections with your audience.",
        cta: {
          text: "See Our Process",
          link: "/process",
        },
      },
      {
        id: 3,
        title: "Growth & Analytics",
        description:
          "Through strategic content planning and community engagement, we help clients achieve consistent follower growth, increased engagement rates, and a stronger brand presence across all social platforms.",
      },
    ],
    images: [
      "/assets/projects/proj1.png",
      "/assets/projects/proj1-detail1.png",
      "/assets/projects/proj1-detail2.png",
      "/assets/projects/proj1-detail3.png",
      "/assets/projects/proj1-detail4.png",
    ],
    stats: [
      { id: 1, label: "Follower Growth", value: "250%", description: "Average increase" },
      { id: 2, label: "Engagement Rate", value: "8.5%", description: "Across all platforms" },
      { id: 3, label: "Content Pieces", value: "500+", description: "Created monthly" },
      { id: 4, label: "Platforms Managed", value: "5+", description: "Including TikTok & Reels" },
    ],
    finalCTA: {
      title: "Ready to Boost Your Social Media Presence?",
      description:
        "Let us handle your social media so you can focus on running your business. We create content, engage communities, and drive real results.",
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
  },
  {
    id: 2,
    title: "Luminary Café",
    slug: "luminary-cafe-website",
    image: "/assets/projects/cafe/hero.png",
    badge: "Web Design & Development",
    tag: "Build",
    description:
      "A high-end café based in Edmonton offering Korean-inspired baked goods, specialty drinks, and artisan coffee. We built a modern, editorial website that captures the warmth and sophistication of the Luminary brand.",
    categories: ["Web Design", "Hospitality", "Branding", "Local Business"],
    date: "2025-08-02",
    sections: [
      {
        id: 1,
        title: "Editorial Design for a High-End Café",
        description:
          "Luminary isn't your average coffee shop — it's a Korean-inspired café experience with a refined, local identity. We crafted an aesthetic that balances warmth and editorial elegance, letting the food and drinks speak through rich photography and clean layouts.",
        cta: {
          text: "View Live Site",
          link: "https://cafe.xtoicstudio.com",
        },
      },
      {
        id: 2,
        title: "Menu & Online Ordering",
        description:
          "An intuitive menu system with beautiful food photography and integrated online ordering functionality. Customers can browse the full menu including Korean-inspired bakes, specialty lattes, and seasonal specials — and place orders in seconds.",
        cta: {
          text: "Explore Site",
          link: "https://cafe.xtoicstudio.com",
        },
      },
      {
        id: 3,
        title: "Mobile-First Experience",
        description:
          "Built with a mobile-first approach, the website delivers a flawless experience on all devices — making it effortless for customers to browse the menu, check hours, and find the location on the go.",
      },
    ],
    images: [
      "/assets/projects/cafe/hero.png",
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
      { id: 4, label: "User Satisfaction", value: "96%", description: "Positive feedback" },
    ],
    finalCTA: {
      title: "Need a Website for Your Business?",
      description:
        "We create beautiful, functional websites that help local businesses connect with customers and grow their online presence.",
      buttonText: "Start Your Project",
      buttonLink: "/contact",
    },
  },
  {
    id: 3,
    title: "Mantis AI",
    slug: "mantis-ai-interview-prep",
    image: "/assets/projects/proj3.png",
    badge: "AI Application",
    tag: "Design",
    description:
      "An AI-powered interview preparation platform where users create custom mock interviews and practice their skills with intelligent feedback and real-time analysis.",
    categories: ["AI", "EdTech", "Career", "SaaS"],
    date: "2025-08-03",
    sections: [
      {
        id: 1,
        title: "AI Interview Simulation",
        description:
          "We built an intelligent interview system that adapts to user responses, asks relevant follow-up questions, and delivers realistic interview scenarios across a wide range of industries and job roles.",
        cta: {
          text: "Try Demo",
          link: "/demo",
        },
      },
      {
        id: 2,
        title: "Real-Time Feedback & Analysis",
        description:
          "Users receive instant AI-powered feedback on their responses, communication skills, and delivery. The system pinpoints strengths and areas for improvement with clear, actionable insights.",
        cta: {
          text: "See Features",
          link: "/features",
        },
      },
      {
        id: 3,
        title: "Custom Interview Creation",
        description:
          "Create personalized mock interviews tailored to specific job descriptions, industries, and difficulty levels. The platform adapts to each user's experience level and career goals.",
      },
    ],
    images: [
      "/assets/projects/proj3.png",
      "/assets/projects/proj3-interface.png",
      "/assets/projects/proj3-mobile.png",
      "/assets/projects/proj3-heatmap.png",
      "/assets/projects/proj3-dashboard.png",
    ],
    stats: [
      { id: 1, label: "Mock Interviews", value: "10K+", description: "Completed successfully" },
      { id: 2, label: "User Success Rate", value: "87%", description: "Got job offers" },
      { id: 3, label: "AI Accuracy", value: "94%", description: "Feedback precision" },
      { id: 4, label: "Industries Covered", value: "25+", description: "Job categories" },
    ],
    finalCTA: {
      title: "Ready to Build Your AI Product?",
      description:
        "We specialize in creating intelligent applications that solve real problems and deliver exceptional user experiences.",
      buttonText: "Discuss Your Idea",
      buttonLink: "/contact",
    },
  },
  {
    id: 4,
    title: "MP4 to MP3 Converter",
    slug: "mp4-to-mp3-converter-tool",
    image: "/assets/projects/proj4.png",
    badge: "Web Application",
    tag: "Build",
    description:
      "A fast, secure, and user-friendly web tool for converting MP4 video files to MP3 audio format. No downloads required — everything happens in your browser.",
    categories: ["Web App", "Media", "Conversion", "Tools"],
    date: "2025-08-04",
    sections: [
      {
        id: 1,
        title: "Browser-Based Conversion",
        description:
          "We built a powerful conversion engine that runs entirely in the browser, ensuring user privacy and eliminating the need to upload files to any external server.",
        cta: {
          text: "Try Converter",
          link: "/converter",
        },
      },
      {
        id: 2,
        title: "Fast & High Quality",
        description:
          "Our optimized conversion process preserves audio quality while delivering fast processing speeds. Batch conversion support lets users handle multiple files at once.",
        cta: {
          text: "View Features",
          link: "/features",
        },
      },
      {
        id: 3,
        title: "Privacy-Focused Design",
        description:
          "All conversions happen locally — files never leave the user's device. This guarantees complete privacy and eliminates the security concerns that come with cloud-based upload tools.",
      },
    ],
    images: [
      "/assets/projects/proj4.png",
      "/assets/projects/proj4-interface.png",
      "/assets/projects/proj4-batch.png",
      "/assets/projects/proj4-settings.png",
      "/assets/projects/proj4-mobile.png",
    ],
    stats: [
      { id: 1, label: "Files Converted", value: "50K+", description: "Since launch" },
      { id: 2, label: "Conversion Speed", value: "2x", description: "Faster than competitors" },
      { id: 3, label: "User Rating", value: "4.9/5", description: "Average satisfaction" },
      { id: 4, label: "Max File Size", value: "2GB", description: "Supported limit" },
    ],
    finalCTA: {
      title: "Need a Custom Web Tool?",
      description:
        "We build practical, user-friendly web applications that solve everyday problems with clean design and powerful functionality.",
      buttonText: "Start Building",
      buttonLink: "/contact",
    },
  },
  {
    id: 5,
    title: "Notez AI",
    slug: "notez-ai-meeting-notes",
    image: "/assets/projects/notez/hero.png",
    badge: "AI Note-Taking",
    tag: "Design",
    description:
      "AI-powered note-taking app that automatically transcribes and summarizes your meeting recordings and class lectures into organized, searchable notes.",
    categories: ["AI", "Productivity", "Education", "SaaS"],
    date: "2025-08-05",
    sections: [
      {
        id: 1,
        title: "Automatic Transcription",
        description:
          "Our AI engine accurately transcribes audio from meetings and class recordings with industry-leading accuracy. Speaker identification and timestamps make it easy to navigate long recordings.",
        cta: {
          text: "Try Free Trial",
          link: "/trial",
        },
      },
      {
        id: 2,
        title: "Smart Summarization",
        description:
          "AI-powered summarization extracts key points, action items, and important takeaways from recordings. Get comprehensive summaries in seconds instead of listening to hours of audio.",
        cta: {
          text: "See Examples",
          link: "/examples",
        },
      },
      {
        id: 3,
        title: "Organized & Searchable",
        description:
          "All notes are automatically organized by date, topic, and tags. Powerful search lets you find specific information across all your recordings instantly.",
      },
    ],
    images: ["/assets/projects/notez/hero.png"],
    stats: [
      { id: 1, label: "Transcription Accuracy", value: "97%", description: "Word recognition rate" },
      { id: 2, label: "Time Saved", value: "75%", description: "Vs manual note-taking" },
      { id: 3, label: "Active Users", value: "5K+", description: "Students & professionals" },
      { id: 4, label: "Hours Transcribed", value: "50K+", description: "Total recordings" },
    ],
    finalCTA: {
      title: "Ready to Transform Your Productivity?",
      description:
        "We build AI-powered tools that save time and make your work more efficient. Let's create something amazing together.",
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
  },
  {
    id: 6,
    title: "MH Rideshare",
    slug: "mh-rideshare-website",
    image: "/assets/projects/ride/hero.png",
    badge: "SEO & Web Design",
    tag: "Branding",
    description:
      "A modern website for MH Rideshare in Medicine Hat, Alberta, designed to build digital presence and drive local organic traffic through comprehensive SEO optimization.",
    categories: ["Web Design", "SEO", "Local Business", "Transportation"],
    date: "2025-08-06",
    sections: [
      {
        id: 1,
        title: "SEO-Optimized Design",
        description:
          "We built a fully optimized website targeting local search terms and transportation-related keywords. The site ranks on page one for key search queries, driving consistent organic traffic from Medicine Hat and surrounding areas.",
        cta: {
          text: "View Live Site",
          link: "https://mhride.ca",
        },
      },
      {
        id: 2,
        title: "Local Search Domination",
        description:
          "Through strategic local SEO, Google Business Profile optimization, and citation building, we positioned MH Rideshare as the go-to transportation service in the region.",
        cta: {
          text: "SEO Strategy",
          link: "/services/build/seo/",
        },
      },
      {
        id: 3,
        title: "Digital Presence & Growth",
        description:
          "The website serves as the central hub for all digital marketing efforts, integrating with social media, online booking, and customer communication tools to create a seamless experience.",
      },
    ],
    images: [
      "/assets/projects/ride/hero.png",
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
      { id: 4, label: "Page Load Speed", value: "0.9s", description: "Mobile optimized" },
    ],
    finalCTA: {
      title: "Need SEO & Web Design Services?",
      description:
        "We help local businesses dominate their markets with SEO-optimized websites that drive traffic, generate leads, and grow revenue.",
      buttonText: "Boost Your Presence",
      buttonLink: "/contact",
    },
  },
  {
    id: 7,
    title: "GTX Mods",
    slug: "gtx-mods-platform",
    image: "/assets/projects/gtx/hero.png",
    badge: "Auto Mods & Repair",
    tag: "Build",
    description:
      "A high-performance website for GTX Mods — an Edmonton-based auto modification and repair shop specializing in custom parts, performance upgrades, and full-service repairs across everything from daily drivers to luxury and high-end hypercars.",
    categories: ["Web Design", "Automotive", "Local Business", "Branding"],
    date: "2025-09-12",
    sections: [
      {
        id: 1,
        title: "Built for Car Enthusiasts",
        description:
          "GTX Mods isn't just a repair shop — it's a destination for car culture. We designed a bold, performance-driven website that reflects the shop's expertise in custom modifications, aftermarket parts, and precision repairs for all vehicle types, including luxury and hypercars.",
        cta: {
          text: "View Live Site",
          link: "https://gtx.xtoicstudio.com/",
        },
      },
      {
        id: 2,
        title: "Services Showcase",
        description:
          "From bolt-on mods and ECU tuning to full body kits and exotic car servicing, we built a clean, organized services section that communicates GTX's full range of capabilities and builds trust with high-value clients.",
        cta: {
          text: "Our Tech Stack",
          link: "/services/build/development/",
        },
      },
    ],
    images: [
      "/assets/projects/gtx/hero.png",
      "/assets/projects/gtx/main.png",
      "/assets/projects/gtx/about.png",
      "/assets/projects/gtx/services.png",
      "/assets/projects/gtx/reviews.png",
      "/assets/projects/gtx/video.png",
      "/assets/projects/gtx/faq.png",
      "/assets/projects/gtx/contact.png",
    ],
    stats: [
      { id: 1, label: "User Retention", value: "65%", description: "Increase in return visits" },
      { id: 2, label: "Load Time", value: "1.1s", description: "Global average" },
      { id: 3, label: "Security", value: "100%", description: "Data encryption" },
    ],
    finalCTA: {
      title: "Need a Website for Your Auto Business?",
      description:
        "We build powerful digital experiences for automotive businesses that look as sharp as the cars they work on.",
      buttonText: "Start Your Project",
      buttonLink: "/contact",
    },
  },
  {
    id: 8,
    title: "Rasoi Royal",
    slug: "rasoi-restaurant-website",
    image: "/assets/projects/rasoi/hero.png",
    badge: "UI/UX & Hospitality",
    tag: "Branding",
    description:
      "A luxury dining experience brought online. Rasoi Royal is an upscale Indian restaurant and bar in Edmonton featuring an extensive wine collection and a refined atmosphere. We built a website that matches every bit of that elegance.",
    categories: ["Hospitality", "Web Design", "Luxury", "Restaurant & Bar"],
    date: "2025-10-05",
    sections: [
      {
        id: 1,
        title: "Luxury Visual Storytelling",
        description:
          "Rasoi Royal is more than an Indian restaurant — it's a fine dining destination with its own curated wine collection. We led the design with high-quality food and ambiance photography, rich typography, and a layout that communicates prestige from the first scroll.",
        cta: {
          text: "View Live Site",
          link: "https://rasoi.xtoicstudio.com/",
        },
      },
      {
        id: 2,
        title: "Seamless Reservations",
        description:
          "We integrated a friction-free booking system that allows guests to reserve tables in seconds, directly increasing dine-in conversions and reducing front-of-house workload.",
        cta: {
          text: "UI/UX Design",
          link: "/services/design/ui-ux/",
        },
      },
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
      { id: 3, label: "Menu Views", value: "5k+", description: "Monthly unique visitors" },
    ],
    finalCTA: {
      title: "Ready to Elevate Your Restaurant Online?",
      description:
        "Transform your culinary brand with a website that looks as exceptional as the experience you deliver.",
      buttonText: "Book a Discovery Call",
      buttonLink: "/contact",
    },
  },
  {
    id: 9,
    title: "Joy Bliss Tattoo",
    slug: "joybliss-tattoo-studio",
    image: "/assets/projects/tattoo/preloader.png",
    badge: "Portfolio & Showcase",
    tag: "Design",
    description:
      "A portfolio showcase website for a talented tattoo artist. Clean, dark, and editorial — built to let the artwork do the talking with an immersive gallery and smooth booking flow.",
    categories: ["Portfolio", "Art", "Tattoo", "Web Design"],
    date: "2025-11-20",
    sections: [
      {
        id: 1,
        title: "Art-First Portfolio Design",
        description:
          "Joy Bliss is a tattoo artist with a distinct style and a loyal clientele. We built a dark, high-contrast portfolio site that puts the artwork front and center — with a curated gallery, smooth scroll transitions, and an immersive visual experience.",
        cta: {
          text: "View Live Site",
          link: "https://joybliss.xtoicstudio.com/",
        },
      },
      {
        id: 2,
        title: "Booking & Contact Flow",
        description:
          "A streamlined contact and booking section makes it easy for potential clients to enquire about custom pieces, view availability, and connect with the artist — turning portfolio visitors into actual bookings.",
        cta: {
          text: "Custom Solutions",
          link: "/services/build/development/",
        },
      },
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
      { id: 3, label: "Growth", value: "45%", description: "Increase in enquiries" },
    ],
    finalCTA: {
      title: "Want a Portfolio That Gets You Booked?",
      description:
        "We create showcase websites for artists and creatives that turn viewers into clients.",
      buttonText: "Let's Build Together",
      buttonLink: "/contact",
    },
  },
  {
    id: 10,
    title: "Nexus Fitness",
    slug: "nexus-fitness-coach",
    image: "/assets/projects/nexus/hero.png",
    badge: "Fitness Coaching & Tools",
    tag: "Build",
    description:
      "A dynamic website for a fitness coach to showcase services, pricing, and interactive tools — including a calorie counter and goal tracker — with a built-in contact form to book sessions directly.",
    categories: ["Fitness", "Coaching", "Health", "Web Development"],
    date: "2025-12-15",
    sections: [
      {
        id: 1,
        title: "Coach Showcase & Services",
        description:
          "A bold, motivational design that communicates the coach's philosophy, training programs, and transformation results. Each service tier is clearly laid out with pricing to help visitors self-select and convert faster.",
        cta: {
          text: "View Live Site",
          link: "https://nexus.xtoicstudio.com/",
        },
      },
      {
        id: 2,
        title: "Interactive Fitness Tools",
        description:
          "We built a suite of interactive tools directly into the site — a calorie calculator, goal achievement tracker, and BMI estimator — keeping visitors engaged and positioning the coach as a credible, value-first expert.",
        cta: {
          text: "View Tools",
          link: "https://nexus.xtoicstudio.com/tools",
        },
      },
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
      { id: 2, label: "Session Bookings", value: "210%", description: "Increase in enquiries" },
      { id: 3, label: "Tool Interactions", value: "15k+", description: "Monthly engagements" },
    ],
    finalCTA: {
      title: "Ready to Grow Your Coaching Business?",
      description:
        "From services to interactive tools and direct bookings — we build fitness coach websites that work as hard as you do.",
      buttonText: "Launch Your Site",
      buttonLink: "/contact",
    },
  },
  {
    id: 11,
    title: "Shinara Spa",
    slug: "shinara-spa-services",
    image: "/assets/projects/spa/hero.png",
    badge: "Beauty & Wellness",
    tag: "Branding",
    description:
      "A premium website for Shinara — a full-service spa, beauty, and nails parlour offering massages, manicures, pedicures, lash extensions, and more. Elegant design meets effortless booking.",
    categories: ["Beauty", "Spa & Wellness", "Nails", "Local Business"],
    date: "2026-01-10",
    sections: [
      {
        id: 1,
        title: "High-End Beauty, Online",
        description:
          "Shinara offers everything from deep tissue massage and facials to gel nails, lash lifts, and full mani-pedi experiences. We built a website that mirrors that luxury — refined layouts, soft palettes, and rich visuals that make every service feel like a treat before the appointment is even booked.",
        cta: {
          text: "View Live Site",
          link: "https://spa-website-eight.vercel.app/",
        },
      },
      {
        id: 2,
        title: "Service Catalog & Booking",
        description:
          "A detailed service catalog organized by category — massages, nails, lashes, facials — lets clients explore treatments in depth and book directly with their preferred specialist. Fast, elegant, and friction-free.",
        cta: {
          text: "View Services",
          link: "/services/build/seo/",
        },
      },
    ],
    images: [
      "/assets/projects/spa/hero.png",
      "/assets/projects/spa/herokr.png",
      "/assets/projects/spa/main.png",
      "/assets/projects/spa/reviews.png",
      "/assets/projects/spa/services.png",
      "/assets/projects/spa/story.png",
    ],
    stats: [
      { id: 1, label: "Engagement", value: "340%", description: "Increase in service page views" },
      { id: 2, label: "Booking Speed", value: "45s", description: "Average checkout time" },
      { id: 3, label: "Direct Traffic", value: "55%", description: "From brand searches" },
    ],
    finalCTA: {
      title: "Ready to Elevate Your Spa or Beauty Business?",
      description:
        "We create premium digital experiences for beauty and wellness brands that turn first-time visitors into loyal regulars.",
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
  },
  {
    id: 12,
    title: "JVM Dates",
    slug: "jvm-dates-dry-fruits",
    image: "/assets/projects/jvm/hero.png",
    badge: "E-Commerce & Branding",
    tag: "Build",
    description:
      "JVM Dates & Dry Fruits is a premium organic dates and dry fruit supplier based in Coimbatore, Tamil Nadu — sourcing directly from heritage farms across Jordan, Saudi Arabia, Iran, and Kashmir since 2009. We handled web development, SEO optimization, and full branding.",
    categories: ["E-Commerce", "Branding", "SEO", "Food & Organic"],
    date: "2026-02-10",
    sections: [
      {
        id: 1,
        title: "Premium E-Commerce Experience",
        description:
          "JVM has been sourcing the world's finest dates and dry fruits for over 15 years — Medjool from Jordan, Ajwa from Saudi Arabia, Kashmiri walnuts, Iranian pistachios, and more. We built a high-end e-commerce site that reflects that heritage, with an elegant product catalog, INR pricing, and a seamless cart and checkout experience.",
        cta: {
          text: "View Live Site",
          link: "https://jvmdates.vercel.app/",
        },
      },
      {
        id: 2,
        title: "Brand Identity & SEO",
        description:
          "We developed the JVM brand identity from the ground up — logo, color system, typography, and tone of voice — positioning the brand as a trusted, premium supplier for households and hospitality businesses across India. Full on-page and local SEO was implemented to drive organic traffic from Coimbatore and beyond.",
        cta: {
          text: "SEO Services",
          link: "/services/build/seo/",
        },
      },
      {
        id: 3,
        title: "Farm-to-Doorstep Storytelling",
        description:
          "The site tells the full JVM story — direct sourcing, zero additives, certified quality control, and express delivery across India. Every section was crafted to build trust and convert health-conscious buyers who won't compromise on quality.",
      },
    ],
    images: [
      "/assets/projects/jvm/hero.png",
      "/assets/projects/jvm/main.png",
      "/assets/projects/jvm/about.png",
      "/assets/projects/jvm/trust.png",
      "/assets/projects/jvm/products.png",
      "/assets/projects/jvm/tamil.png",
      "/assets/projects/jvm/footer.png",
    ],
    stats: [
      { id: 1, label: "Products Listed", value: "50+", description: "Origins across 10+ countries" },
      { id: 2, label: "Organic Traffic", value: "180%", description: "Increase post-launch" },
      { id: 3, label: "Avg. Order Value", value: "₹1,800", description: "Per transaction" },
      { id: 4, label: "Years of Legacy", value: "15+", description: "Founded in Coimbatore, 2009" },
    ],
    finalCTA: {
      title: "Have a Product Business That Deserves a Premium Online Presence?",
      description:
        "We build e-commerce brands that look world-class and sell with purpose — from identity to SEO to conversion.",
      buttonText: "Start Your Project",
      buttonLink: "/contact",
    },
  },
  {
    id: 13,
    title: "DRIPD",
    slug: "dripd-vape-shop-edmonton",
    image: "/assets/projects/vape/hero.png",
    badge: "Retail & Lifestyle Branding",
    tag: "Build",
    description:
      "DRIPD is a premium vape and cigar shop in the heart of Mill Woods, Edmonton — curating only the best devices, e-liquids, disposables, and accessories. We delivered a full brand identity, high-end website, SEO, retargeting ads, order-taking and contact forms, and ongoing social media management.",
    categories: ["Retail", "Branding", "SEO", "Social Media", "Retargeting Ads"],
    date: "2026-03-01",
    sections: [
      {
        id: 1,
        title: "A Vape Shop Done Right",
        description:
          "DRIPD set out to be Edmonton's most elevated vape destination — not just another shop. We built a sleek, dark-themed lifestyle website with floating nav, GSAP scroll animations, a full product catalog with variant selection, and an integrated cart with order-taking forms for both in-store and online customers.",
        cta: {
          text: "View Live Site",
          link: "https://vape-rouge.vercel.app/",
        },
      },
      {
        id: 2,
        title: "SEO & Retargeting Ads",
        description:
          "We ran targeted local SEO to capture Mill Woods and greater Edmonton search traffic, alongside retargeting ad campaigns that re-engaged site visitors across Meta and Google — driving consistent foot traffic and online orders.",
        cta: {
          text: "SEO & Ads Strategy",
          link: "/services/build/seo/",
        },
      },
      {
        id: 3,
        title: "Branding & Social Media",
        description:
          "From logo and visual identity to ongoing Instagram and Facebook content management, we gave DRIPD a cohesive brand voice — bold, local, and community-first. Regular posts, stories, and promotions kept the audience engaged and growing.",
      },
    ],
    images: [
      "/assets/projects/vape/hero.png",
      "/assets/projects/vape/main.png",
      "/assets/projects/vape/marq.png",
      "/assets/projects/vape/about.png",
      "/assets/projects/vape/products.png",
      "/assets/projects/vape/reviews.png",
    ],
    stats: [
      { id: 1, label: "Retargeting ROAS", value: "3.8x", description: "Return on ad spend" },
      { id: 2, label: "Online Orders", value: "60%", description: "Increase in 60 days" },
      { id: 3, label: "Social Followers", value: "2.2k+", description: "Organic growth" },
      { id: 4, label: "Google Reviews", value: "4.9/5", description: "Based on 1,200+ reviews" },
    ],
    finalCTA: {
      title: "Ready to Build a Brand That Actually Stands Out?",
      description:
        "From website to ads to social — we give retail brands everything they need to dominate their local market.",
      buttonText: "Let's Talk",
      buttonLink: "/contact",
    },
  },
];