import {Megaphone, MonitorSmartphone, Palette, SparklesIcon, type LucideIcon } from "lucide-react";


export interface ServiceSection {
  heading: string;
  description: string;
}

export interface ServiceStats {
  label: string;
  value: string;
  description: string;
}

export interface ServiceImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ServiceCTA {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export interface ServiceItem {
  id: string | number;
  name: string;
  path: string;
  slug: string;
  heroTitle: string;
  heroDescription: string;
  sections: ServiceSection[];
  stats: ServiceStats[];
  images: ServiceImage[];
  cta: ServiceCTA;
  category: string;
  tags: string[];
}

export interface ServiceCategory {
  id: number;
  title: string;
 icon: string | LucideIcon;
 emoji: string;
  gradient: string[];
  items: ServiceItem[];
}

export const Services: ServiceCategory[] = [
  {
    id: 1,
    title: 'Brand',
    icon: SparklesIcon,
    emoji: '📷',
    gradient: ['#10b981', '#059669'],
    items: [
      {
        id: 'brand-strategy',
        name: 'Brand Strategy',
        path: '/services/brand/brand-strategy',
        slug: 'brand-strategy',
        heroTitle: 'Strategic Brand Development That Drives Results',
        heroDescription: 'We craft comprehensive brand strategies that position your business for sustainable growth and market leadership.',
        category: 'brand',
        tags: ['Strategy', 'Positioning', 'Market Research', 'Brand Identity'],
        sections: [
          {
            heading: 'Brand Discovery & Research',
            description: 'We dive deep into your market, competitors, and target audience to uncover unique positioning opportunities. Our comprehensive research methodology includes market analysis, consumer insights, and competitive landscape evaluation to build a solid foundation for your brand strategy.'
          },
          {
            heading: 'Strategic Brand Positioning',
            description: 'Develop a compelling brand positioning that differentiates you from competitors and resonates with your target audience. We create brand messaging frameworks, value propositions, and positioning statements that serve as the North Star for all your brand communications.'
          },
          {
            heading: 'Brand Architecture & Guidelines',
            description: 'Establish a cohesive brand architecture that scales with your business. We develop comprehensive brand guidelines, messaging hierarchies, and brand extension strategies that ensure consistency across all touchpoints and future growth initiatives.'
          }
        ],
        stats: [
          { label: 'Brand Recognition Increase', value: '85%', description: 'Average improvement in brand recognition' },
          { label: 'Market Position', value: 'Top 3', description: 'Clients achieve top-tier market positioning' },
          { label: 'Strategy Implementation', value: '12 weeks', description: 'Average time to full strategy rollout' },
          { label: 'Client Satisfaction', value: '98%', description: 'Strategy approval rate from clients' }
        ],
        images: [
          { src: '/images/brand-strategy-1.jpg', alt: 'Brand strategy workshop session', caption: 'Collaborative strategy development process' },
          { src: '/images/brand-strategy-2.jpg', alt: 'Market research analysis', caption: 'In-depth market and competitor analysis' },
          { src: '/images/brand-strategy-3.jpg', alt: 'Brand positioning framework', caption: 'Strategic positioning development' },
          { src: '/images/brand-strategy-4.jpg', alt: 'Brand guidelines documentation', caption: 'Comprehensive brand guidelines' }
        ],
        cta: {
          title: 'Ready to Transform Your Brand?',
          description: 'Let\'s develop a winning brand strategy that sets you apart from the competition and drives meaningful business growth.',
          primaryButton: { text: 'Start Your Brand Strategy', href: '/contact?service=brand-strategy' },
          secondaryButton: { text: 'View Case Studies', href: '/case-studies/brand-strategy' }
        }
      },
      {
        id: '360-creative',
        name: '360° Creative',
        path: '/services/brand/360-creative',
        slug: '360-creative',
        heroTitle: 'Complete Creative Solutions Across All Channels',
        heroDescription: 'Integrated creative campaigns that deliver consistent brand experiences across every touchpoint and platform.',
        category: 'brand',
        tags: ['Creative Direction', 'Multi-Channel', 'Campaign Development', 'Integrated Marketing'],
        sections: [
          {
            heading: 'Integrated Campaign Development',
            description: 'We create cohesive creative campaigns that work seamlessly across all channels - from digital platforms to traditional media. Our 360° approach ensures your brand message is consistent, compelling, and optimized for each specific medium while maintaining overall campaign integrity.'
          },
          {
            heading: 'Cross-Platform Creative Production',
            description: 'Our team produces high-quality creative assets for every platform in your marketing mix. From social media content and digital ads to print materials and video content, we ensure each piece works both independently and as part of the larger creative ecosystem.'
          },
          {
            heading: 'Performance-Driven Creative Optimization',
            description: 'We continuously monitor and optimize creative performance across all channels. Using data-driven insights, we refine messaging, visuals, and creative approaches to maximize engagement, conversions, and brand impact throughout the campaign lifecycle.'
          }
        ],
        stats: [
          { label: 'Cross-Channel Engagement', value: '92%', description: 'Increase in multi-platform engagement' },
          { label: 'Creative Assets Delivered', value: '500+', description: 'Average assets per 360° campaign' },
          { label: 'Campaign Consistency Score', value: '96%', description: 'Brand consistency across channels' },
          { label: 'ROI Improvement', value: '78%', description: 'Average return on creative investment' }
        ],
        images: [
          { src: '/images/360-creative-1.jpg', alt: '360 creative campaign overview', caption: 'Multi-channel campaign visualization' },
          { src: '/images/360-creative-2.jpg', alt: 'Creative asset production', caption: 'Diverse creative asset development' },
          { src: '/images/360-creative-3.jpg', alt: 'Campaign performance dashboard', caption: 'Real-time campaign optimization' },
          { src: '/images/360-creative-4.jpg', alt: 'Brand consistency examples', caption: 'Consistent brand experience across touchpoints' }
        ],
        cta: {
          title: 'Launch Your 360° Creative Campaign',
          description: 'Create a unified brand experience that resonates with your audience across every channel and touchpoint.',
          primaryButton: { text: 'Start Your Campaign', href: '/contact?service=360-creative' },
          secondaryButton: { text: 'Explore Creative Work', href: '/portfolio/creative-campaigns' }
        }
      },
      {
        id: 'art-direction',
        name: 'Art Direction',
        path: '/services/brand/art-direction',
        slug: 'art-direction',
        heroTitle: 'Visually Compelling Art Direction That Captivates',
        heroDescription: 'Expert art direction that brings your brand vision to life with stunning visuals and cohesive aesthetic experiences.',
        category: 'brand',
        tags: ['Visual Direction', 'Creative Leadership', 'Brand Aesthetics', 'Visual Storytelling'],
        sections: [
          {
            heading: 'Creative Vision Development',
            description: 'We establish a strong creative vision that aligns with your brand strategy and resonates with your target audience. Our art directors work closely with your team to define visual styles, mood, and aesthetic approaches that differentiate your brand and create memorable experiences.'
          },
          {
            heading: 'Visual Asset Creation & Direction',
            description: 'From concept to execution, we direct the creation of stunning visual assets including photography, illustration, graphics, and multimedia content. Our team ensures every visual element supports your brand narrative and maintains the highest quality standards.'
          },
          {
            heading: 'Brand Visual Consistency',
            description: 'We maintain visual consistency across all brand touchpoints while allowing for creative flexibility. Our art direction ensures that whether it\'s a social media post, website design, or marketing campaign, your brand maintains its distinctive visual identity and impact.'
          }
        ],
        stats: [
          { label: 'Visual Impact Score', value: '94%', description: 'Client satisfaction with visual direction' },
          { label: 'Brand Recognition', value: '89%', description: 'Improvement in visual brand recognition' },
          { label: 'Creative Assets', value: '1000+', description: 'Directed creative pieces annually' },
          { label: 'Award Recognition', value: '15+', description: 'Design awards for art direction' }
        ],
        images: [
          { src: '/images/art-direction-1.jpg', alt: 'Art direction process', caption: 'Creative vision development session' },
          { src: '/images/art-direction-2.jpg', alt: 'Visual asset creation', caption: 'Directed photography and design assets' },
          { src: '/images/art-direction-3.jpg', alt: 'Brand visual guidelines', caption: 'Comprehensive visual style guide' },
          { src: '/images/art-direction-4.jpg', alt: 'Creative team collaboration', caption: 'Art direction team in action' }
        ],
        cta: {
          title: 'Elevate Your Visual Brand',
          description: 'Let our expert art directors create a compelling visual identity that sets your brand apart and drives engagement.',
          primaryButton: { text: 'Discuss Your Vision', href: '/contact?service=art-direction' },
          secondaryButton: { text: 'View Our Portfolio', href: '/portfolio/art-direction' }
        }
      },
      {
        id: 'copywriting',
        name: 'Copywriting',
        path: '/services/brand/copywriting',
        slug: 'copywriting',
        heroTitle: 'Persuasive Copy That Converts and Connects',
        heroDescription: 'Strategic copywriting that captures your brand voice and drives action across all marketing channels.',
        category: 'brand',
        tags: ['Content Strategy', 'Brand Voice', 'Conversion Copy', 'Storytelling'],
        sections: [
          {
            heading: 'Brand Voice & Messaging Strategy',
            description: 'We develop a distinctive brand voice that resonates with your audience and differentiates you from competitors. Our copywriters craft messaging strategies that ensure consistent communication across all touchpoints while adapting to different platforms and contexts.'
          },
          {
            heading: 'Conversion-Focused Copy',
            description: 'Our copywriting is strategically designed to drive action. From compelling headlines and persuasive product descriptions to effective call-to-actions and landing page copy, we create content that converts visitors into customers and builds lasting relationships.'
          },
          {
            heading: 'Multi-Channel Content Creation',
            description: 'We create engaging copy for every platform in your marketing mix. Whether it\'s website content, social media posts, email campaigns, or advertising copy, our writing adapts to each channel while maintaining your brand\'s authentic voice and messaging consistency.'
          }
        ],
        stats: [
          { label: 'Conversion Rate Increase', value: '73%', description: 'Average improvement in conversion rates' },
          { label: 'Content Engagement', value: '85%', description: 'Increase in content engagement metrics' },
          { label: 'Words Written', value: '2M+', description: 'Words crafted for client brands annually' },
          { label: 'Client Retention', value: '91%', description: 'Long-term copywriting partnerships' }
        ],
        images: [
          { src: '/images/copywriting-1.jpg', alt: 'Copywriting process', caption: 'Strategic content development workflow' },
          { src: '/images/copywriting-2.jpg', alt: 'Brand voice guidelines', caption: 'Brand voice and tone documentation' },
          { src: '/images/copywriting-3.jpg', alt: 'Copy performance analytics', caption: 'Data-driven copy optimization' },
          { src: '/images/copywriting-4.jpg', alt: 'Multi-channel content', caption: 'Copy adapted across all channels' }
        ],
        cta: {
          title: 'Transform Your Brand Message',
          description: 'Let our expert copywriters craft compelling content that speaks to your audience and drives meaningful results.',
          primaryButton: { text: 'Start Your Copy Project', href: '/contact?service=copywriting' },
          secondaryButton: { text: 'Read Copy Samples', href: '/portfolio/copywriting' }
        }
      },
      {
        id: 'editing',
        name: 'Editing',
        path: '/services/brand/editing',
        slug: 'editing',
        heroTitle: 'Professional Editing That Perfects Your Content',
        heroDescription: 'Comprehensive editing services that ensure your content is polished, professional, and perfectly aligned with your brand.',
        category: 'brand',
        tags: ['Content Editing', 'Proofreading', 'Quality Assurance', 'Publishing'],
        sections: [
          {
            heading: 'Comprehensive Content Review',
            description: 'Our editing process goes beyond basic proofreading to include structural, stylistic, and strategic content improvements. We review your content for clarity, flow, brand alignment, and audience engagement while maintaining your authentic voice and message.'
          },
          {
            heading: 'Multi-Format Editing Expertise',
            description: 'We provide editing services across all content formats including web copy, marketing materials, documentation, social media content, and multimedia scripts. Our editors are experienced in platform-specific requirements and optimization best practices.'
          },
          {
            heading: 'Quality Assurance & Brand Consistency',
            description: 'Every piece of content undergoes rigorous quality assurance to ensure error-free, professional delivery. We maintain detailed style guides and brand voice standards to ensure consistency across all your content while optimizing for readability and impact.'
          }
        ],
        stats: [
          { label: 'Error Reduction', value: '99.8%', description: 'Accuracy rate in final content delivery' },
          { label: 'Content Improvement', value: '67%', description: 'Average improvement in content quality scores' },
          { label: 'Turnaround Time', value: '48hrs', description: 'Average editing project completion' },
          { label: 'Client Satisfaction', value: '96%', description: 'Satisfaction with editing quality' }
        ],
        images: [
          { src: '/images/editing-1.jpg', alt: 'Content editing process', caption: 'Professional editing workflow' },
          { src: '/images/editing-2.jpg', alt: 'Quality assurance checklist', caption: 'Comprehensive quality review process' },
          { src: '/images/editing-3.jpg', alt: 'Before and after content', caption: 'Content transformation examples' },
          { src: '/images/editing-4.jpg', alt: 'Editorial team workspace', caption: 'Professional editing environment' }
        ],
        cta: {
          title: 'Polish Your Content to Perfection',
          description: 'Ensure your content makes the best possible impression with our professional editing services.',
          primaryButton: { text: 'Get Content Edited', href: '/contact?service=editing' },
          secondaryButton: { text: 'Editing Guidelines', href: '/resources/editing-standards' }
        }
      },
      {
        id: 'motion-graphics',
        name: 'Motion Graphics',
        path: '/services/brand/motion-graphics',
        slug: 'motion-graphics',
        heroTitle: 'Dynamic Motion Graphics That Bring Brands to Life',
        heroDescription: 'Engaging motion graphics and animation that capture attention and communicate your message with visual impact.',
        category: 'brand',
        tags: ['Animation', 'Video Production', 'Visual Effects', 'Brand Animation'],
        sections: [
          {
            heading: 'Brand Animation & Identity',
            description: 'We create animated brand elements that add personality and energy to your visual identity. From logo animations and brand transitions to animated style guides, our motion graphics ensure your brand comes alive across digital platforms and creates memorable experiences.'
          },
          {
            heading: 'Explainer Videos & Storytelling',
            description: 'Complex ideas become simple and engaging through our motion graphics storytelling. We create explainer videos, product demonstrations, and educational content that combines compelling visuals with clear messaging to drive understanding and action.'
          },
          {
            heading: 'Social Media & Digital Animation',
            description: 'Our motion graphics are optimized for social media platforms and digital marketing campaigns. We create eye-catching animated posts, stories, ads, and video content that stops the scroll and drives engagement across all digital channels.'
          }
        ],
        stats: [
          { label: 'Engagement Increase', value: '156%', description: 'Average boost in content engagement' },
          { label: 'Video Completion Rate', value: '84%', description: 'Viewer completion rate for motion graphics' },
          { label: 'Animations Created', value: '500+', description: 'Motion graphics delivered annually' },
          { label: 'Platform Optimization', value: '15+', description: 'Platforms optimized for motion content' }
        ],
        images: [
          { src: '/images/motion-graphics-1.jpg', alt: 'Motion graphics production', caption: 'Animation production process' },
          { src: '/images/motion-graphics-2.jpg', alt: 'Brand animation examples', caption: 'Animated brand identity elements' },
          { src: '/images/motion-graphics-3.jpg', alt: 'Explainer video storyboard', caption: 'Storytelling through motion graphics' },
          { src: '/images/motion-graphics-4.jpg', alt: 'Social media animations', caption: 'Platform-optimized motion content' }
        ],
        cta: {
          title: 'Animate Your Brand Story',
          description: 'Transform static content into dynamic experiences that capture attention and drive engagement.',
          primaryButton: { text: 'Create Motion Graphics', href: '/contact?service=motion-graphics' },
          secondaryButton: { text: 'View Animation Reel', href: '/portfolio/motion-graphics' }
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Social',
    icon: Megaphone,
    emoji: '📱',
    gradient: ['#60a5fa', '#3b82f6'],
    items: [
      {
        id: 'social-media-strategy',
        name: 'Social Media Strategy',
        path: '/services/social/social-media-strategy',
        slug: 'social-media-strategy',
        heroTitle: 'Data-Driven Social Media Strategies That Scale',
        heroDescription: 'Comprehensive social media strategies that build communities, drive engagement, and deliver measurable business results.',
        category: 'social',
        tags: ['Strategy', 'Community Building', 'Content Planning', 'Analytics'],
        sections: [
          {
            heading: 'Platform Strategy & Optimization',
            description: 'We develop platform-specific strategies that leverage the unique strengths of each social media channel. Our approach includes audience analysis, content optimization, and growth tactics tailored to maximize your presence on Instagram, TikTok, LinkedIn, Twitter, and emerging platforms.'
          },
          {
            heading: 'Content Strategy & Calendar Planning',
            description: 'Strategic content planning that aligns with your business goals and audience interests. We create comprehensive content calendars, develop content pillars, and establish posting schedules that maintain consistent engagement while supporting your marketing objectives.'
          },
          {
            heading: 'Community Building & Engagement',
            description: 'Build authentic relationships with your audience through strategic community management and engagement tactics. We develop conversation strategies, user-generated content campaigns, and community initiatives that turn followers into brand advocates and customers.'
          }
        ],
        stats: [
          { label: 'Follower Growth', value: '340%', description: 'Average follower increase in 6 months' },
          { label: 'Engagement Rate', value: '8.5%', description: 'Average engagement rate achieved' },
          { label: 'Reach Expansion', value: '275%', description: 'Increase in organic reach' },
          { label: 'Lead Generation', value: '92%', description: 'Improvement in social media leads' }
        ],
        images: [
          { src: '/images/social-strategy-1.jpg', alt: 'Social media strategy planning', caption: 'Strategic social media planning session' },
          { src: '/images/social-strategy-2.jpg', alt: 'Content calendar overview', caption: 'Comprehensive content calendar management' },
          { src: '/images/social-strategy-3.jpg', alt: 'Social analytics dashboard', caption: 'Performance tracking and optimization' },
          { src: '/images/social-strategy-4.jpg', alt: 'Community engagement metrics', caption: 'Community growth and engagement analysis' }
        ],
        cta: {
          title: 'Scale Your Social Media Presence',
          description: 'Let us create a winning social media strategy that builds your community and drives business growth.',
          primaryButton: { text: 'Develop Your Strategy', href: '/contact?service=social-media-strategy' },
          secondaryButton: { text: 'Strategy Case Studies', href: '/case-studies/social-media' }
        }
      },
      {
        id: 'tiktok-social-shorts',
        name: 'TikTok/Social Shorts',
        path: '/services/social/tiktok-social-shorts',
        slug: 'tiktok-social-shorts',
        heroTitle: 'Viral Short-Form Content That Captures Attention',
        heroDescription: 'Create engaging TikTok and short-form video content that resonates with audiences and drives viral growth.',
        category: 'social',
        tags: ['Short-Form Video', 'Viral Content', 'TikTok Marketing', 'Content Creation'],
        sections: [
          {
            heading: 'Viral Content Strategy',
            description: 'We develop content strategies specifically designed for short-form platforms like TikTok, Instagram Reels, and YouTube Shorts. Our approach combines trending topics, platform-specific best practices, and your brand messaging to create content with viral potential.'
          },
          {
            heading: 'Creative Production & Editing',
            description: 'Our team produces high-quality short-form videos that stand out in crowded feeds. From concept development and filming to editing and post-production, we ensure every video is optimized for maximum engagement and platform algorithms.'
          },
          {
            heading: 'Trend Analysis & Optimization',
            description: 'Stay ahead of the curve with our trend monitoring and content optimization services. We track emerging trends, analyze performance metrics, and continuously optimize your short-form content strategy to maximize reach and engagement.'
          }
        ],
        stats: [
          { label: 'Average Views', value: '2.3M', description: 'Views per viral short-form campaign' },
          { label: 'Engagement Rate', value: '12.8%', description: 'Average engagement on short-form content' },
          { label: 'Viral Success Rate', value: '35%', description: 'Content achieving 100K+ views' },
          { label: 'Follower Conversion', value: '15%', description: 'Viewers converting to followers' }
        ],
        images: [
          { src: '/images/tiktok-shorts-1.jpg', alt: 'TikTok content creation', caption: 'Short-form video production process' },
          { src: '/images/tiktok-shorts-2.jpg', alt: 'Trending content analysis', caption: 'Trend research and content planning' },
          { src: '/images/tiktok-shorts-3.jpg', alt: 'Video editing workspace', caption: 'Professional short-form video editing' },
          { src: '/images/tiktok-shorts-4.jpg', alt: 'Performance analytics', caption: 'Short-form content performance tracking' }
        ],
        cta: {
          title: 'Create Viral Short-Form Content',
          description: 'Capture your audience\'s attention with engaging TikTok and short-form videos that drive real results.',
          primaryButton: { text: 'Start Creating Content', href: '/contact?service=tiktok-social-shorts' },
          secondaryButton: { text: 'View Content Examples', href: '/portfolio/short-form-video' }
        }
      },
      {
        id: 'influencer-campaigns',
        name: 'Influencer Campaigns',
        path: '/services/social/influencer-campaigns',
        slug: 'influencer-campaigns',
        heroTitle: 'Strategic Influencer Partnerships That Drive Results',
        heroDescription: 'Connect with your target audience through authentic influencer partnerships and strategic campaign management.',
        category: 'social',
        tags: ['Influencer Marketing', 'Partnership Management', 'Campaign Strategy', 'Brand Collaboration'],
        sections: [
          {
            heading: 'Influencer Discovery & Vetting',
            description: 'We identify and vet the perfect influencers for your brand using advanced analytics and audience alignment tools. Our selection process ensures authentic partnerships with creators who genuinely resonate with your target audience and brand values.'
          },
          {
            heading: 'Campaign Strategy & Management',
            description: 'From brief development to campaign execution, we manage every aspect of your influencer partnerships. We create compelling campaign concepts, negotiate partnerships, and ensure all content aligns with your brand guidelines and marketing objectives.'
          },
          {
            heading: 'Performance Tracking & ROI',
            description: 'Measure the success of your influencer campaigns with comprehensive tracking and reporting. We monitor engagement, reach, conversions, and brand sentiment to optimize campaign performance and demonstrate clear ROI on your influencer investments.'
          }
        ],
        stats: [
          { label: 'Campaign Reach', value: '15M+', description: 'Average reach per influencer campaign' },
          { label: 'Engagement Rate', value: '6.8%', description: 'Average campaign engagement rate' },
          { label: 'ROI Achievement', value: '520%', description: 'Average return on influencer investment' },
          { label: 'Brand Partnerships', value: '200+', description: 'Successful influencer collaborations managed' }
        ],
        images: [
          { src: '/images/influencer-campaigns-1.jpg', alt: 'Influencer partnership meeting', caption: 'Strategic influencer partnership development' },
          { src: '/images/influencer-campaigns-2.jpg', alt: 'Campaign brief creation', caption: 'Campaign strategy and brief development' },
          { src: '/images/influencer-campaigns-3.jpg', alt: 'Content collaboration', caption: 'Influencer content creation process' },
          { src: '/images/influencer-campaigns-4.jpg', alt: 'Campaign performance dashboard', caption: 'Campaign tracking and analytics' }
        ],
        cta: {
          title: 'Launch Your Influencer Campaign',
          description: 'Partner with the right influencers to amplify your brand message and reach new audiences authentically.',
          primaryButton: { text: 'Start Your Campaign', href: '/contact?service=influencer-campaigns' },
          secondaryButton: { text: 'Campaign Case Studies', href: '/case-studies/influencer-marketing' }
        }
      },
      {
        id: 'community-management',
        name: 'Community Management',
        path: '/services/social/community-management',
        slug: 'community-management',
        heroTitle: 'Build Thriving Communities Around Your Brand',
        heroDescription: 'Professional community management that fosters engagement, builds loyalty, and turns followers into brand advocates.',
        category: 'social',
        tags: ['Community Building', 'Engagement', 'Social Listening', 'Customer Relationships'],
        sections: [
          {
            heading: 'Daily Community Engagement',
            description: 'Our community managers actively engage with your audience across all social platforms, responding to comments, messages, and mentions in your brand voice. We foster meaningful conversations, address customer concerns, and build lasting relationships with your community members.'
          },
          {
            heading: 'Content Moderation & Crisis Management',
            description: 'Maintain a positive brand environment with professional content moderation and crisis management services. We monitor your social channels 24/7, handle negative feedback professionally, and implement crisis communication strategies when needed.'
          },
          {
            heading: 'Community Growth & Advocacy Programs',
            description: 'Develop programs that turn engaged followers into brand advocates. We create user-generated content campaigns, loyalty programs, and community initiatives that encourage organic growth and deeper brand connections.'
          }
        ],
        stats: [
          { label: 'Response Time', value: '< 2hrs', description: 'Average response time to community inquiries' },
          { label: 'Community Growth', value: '180%', description: 'Average community growth in 12 months' },
          { label: 'Engagement Increase', value: '94%', description: 'Improvement in community engagement' },
          { label: 'Customer Satisfaction', value: '96%', description: 'Community satisfaction with management' }
        ],
        images: [
          { src: '/images/community-management-1.jpg', alt: 'Community engagement dashboard', caption: 'Real-time community engagement monitoring' },
          { src: '/images/community-management-2.jpg', alt: 'Social media response team', caption: 'Professional community management team' },
          { src: '/images/community-management-3.jpg', alt: 'Community growth metrics', caption: 'Community growth and engagement analytics' },
          { src: '/images/community-management-4.jpg', alt: 'User-generated content', caption: 'Community-driven content and advocacy' }
        ],
        cta: {
          title: 'Build Your Brand Community',
          description: 'Create a loyal community around your brand with professional community management that drives engagement and growth.',
          primaryButton: { text: 'Start Community Building', href: '/contact?service=community-management' },
          secondaryButton: { text: 'Community Success Stories', href: '/case-studies/community-management' }
        }
      }
    ]
  },
  {
    id: 3,
    title: 'Build',
    icon: MonitorSmartphone,
    emoji: '💻',
    gradient: ['#f97316', '#ef4444'],
    items: [
      {
        id: 'web-development',
        name: 'Web Development',
        path: '/services/build/web-development',
        slug: 'web-development',
        heroTitle: 'Custom Web Development That Powers Your Business',
        heroDescription: 'Build robust, scalable websites and web applications that deliver exceptional user experiences and drive business growth.',
        category: 'build',
        tags: ['Full-Stack Development', 'Custom Solutions', 'Web Applications', 'E-commerce'],
        sections: [
          {
            heading: 'Custom Web Application Development',
            description: 'We build custom web applications tailored to your specific business needs using modern frameworks like React, Next.js, and Node.js. Our development process includes thorough planning, agile development, and comprehensive testing to ensure your application is secure, scalable, and performance-optimized.'
          },
          {
            heading: 'E-commerce & Business Platforms',
            description: 'Create powerful e-commerce solutions and business platforms that streamline operations and enhance customer experiences. We integrate payment gateways, inventory management systems, and customer relationship tools to build comprehensive digital business solutions.'
          },
          {
            heading: 'Maintenance & Ongoing Support',
            description: 'Keep your web applications running smoothly with our comprehensive maintenance and support services. We provide regular updates, security patches, performance optimization, and technical support to ensure your website continues to perform at its best.'
          }
        ],
        stats: [
          { label: 'Page Load Speed', value: '< 2sec', description: 'Average page load time achieved' },
          { label: 'Uptime Guarantee', value: '99.9%', description: 'Website availability guarantee' },
          { label: 'Projects Delivered', value: '300+', description: 'Successful web development projects' },
          { label: 'Client Retention', value: '95%', description: 'Long-term development partnerships' }
        ],
        images: [
          { src: '/assets/build/web-development-1.png', alt: 'Web development workspace', caption: 'Modern web development environment' },
          { src: '/assets/build/web-development-2.png', alt: 'Code review session', caption: 'Collaborative development process' },
          { src: '/assets/build/web-development-3.png', alt: 'Website performance testing', caption: 'Performance optimization and testing' },
          { src: '/assets/build/web-development-4.png', alt: 'Responsive design showcase', caption: 'Cross-device compatibility testing' }
        ],
        cta: {
          title: 'Build Your Custom Web Solution',
          description: 'Transform your business with a custom web application designed to meet your unique requirements and scale with your growth.',
          primaryButton: { text: 'Start Your Project', href: '/contact?service=web-development' },
          secondaryButton: { text: 'View Development Portfolio', href: '/portfolio/web-development' }
        }
      },
      {
        id: 'frontend-solutions',
        name: 'Frontend Solutions',
        path: '/services/build/frontend-solutions',
        slug: 'frontend-solutions',
        heroTitle: 'Modern Frontend Solutions That Engage Users',
        heroDescription: 'Create stunning, interactive user interfaces with cutting-edge frontend technologies and design systems.',
        category: 'build',
        tags: ['React', 'Vue.js', 'UI Development', 'Interactive Design'],
        sections: [
          {
            heading: 'Modern JavaScript Frameworks',
            description: 'We leverage the latest frontend technologies including React, Vue.js, Angular, and Next.js to create dynamic, interactive user interfaces. Our development approach focuses on component-based architecture, state management, and performance optimization for exceptional user experiences.'
          },
          {
            heading: 'Responsive Design Implementation',
            description: 'Ensure your website looks and functions perfectly across all devices with our responsive design implementation. We use modern CSS techniques, flexible grids, and progressive enhancement to create interfaces that adapt seamlessly to any screen size or device type.'
          },
          {
            heading: 'Performance & Accessibility',
            description: 'Build frontend solutions that are fast, accessible, and inclusive. We implement performance optimization techniques, accessibility standards (WCAG compliance), and progressive web app features to ensure your application reaches and serves all users effectively.'
          }
        ],
        stats: [
          { label: 'Performance Score', value: '95+', description: 'Average Lighthouse performance score' },
          { label: 'Cross-Browser Support', value: '100%', description: 'Compatibility across major browsers' },
          { label: 'Mobile Responsiveness', value: '100%', description: 'Perfect mobile experience guarantee' },
          { label: 'Accessibility Score', value: '98%', description: 'WCAG compliance achievement' }
        ],
        images: [
          { src: '/images/frontend-solutions-1.jpg', alt: 'Frontend development process', caption: 'Modern frontend development workflow' },
          { src: '/images/frontend-solutions-2.jpg', alt: 'Component library showcase', caption: 'Reusable component system development' },
          { src: '/images/frontend-solutions-3.jpg', alt: 'Responsive testing setup', caption: 'Multi-device testing and optimization' },
          { src: '/images/frontend-solutions-4.jpg', alt: 'Performance optimization tools', caption: 'Frontend performance monitoring' }
        ],
        cta: {
          title: 'Create Exceptional User Interfaces',
          description: 'Build modern, performant frontend solutions that delight users and drive engagement across all devices.',
          primaryButton: { text: 'Discuss Your Frontend Needs', href: '/contact?service=frontend-solutions' },
          secondaryButton: { text: 'Frontend Examples', href: '/portfolio/frontend-development' }
        }
      },
      {
        id: 'mobile-apps',
        name: 'Mobile Apps',
        path: '/services/build/mobile-apps',
        slug: 'mobile-apps',
        heroTitle: 'Native & Cross-Platform Mobile App Development',
        heroDescription: 'Build powerful mobile applications that engage users and drive business growth across iOS and Android platforms.',
        category: 'build',
        tags: ['iOS Development', 'Android Development', 'Cross-Platform', 'Mobile UX'],
        sections: [
          {
            heading: 'Native & Cross-Platform Development',
            description: 'We develop mobile applications using both native technologies (Swift for iOS, Kotlin for Android) and cross-platform frameworks like React Native and Flutter. Our approach ensures optimal performance, native user experience, and cost-effective development based on your specific requirements.'
          },
          {
            heading: 'User Experience & Interface Design',
            description: 'Create mobile apps with intuitive interfaces and seamless user experiences. We follow platform-specific design guidelines while maintaining your brand identity, ensuring your app feels native to each platform while delivering consistent functionality.'
          },
          {
            heading: 'App Store Optimization & Launch',
            description: 'Successfully launch your mobile app with our comprehensive app store optimization and launch services. We handle app store submissions, optimize listings for discovery, and provide ongoing support to maximize downloads and user engagement.'
          }
        ],
        stats: [
          { label: 'App Store Rating', value: '4.8⭐', description: 'Average rating for developed apps' },
          { label: 'Download Rate', value: '85%', description: 'Increase in app downloads post-launch' },
          { label: 'User Retention', value: '78%', description: '30-day user retention rate' },
          { label: 'Development Speed', value: '40%', description: 'Faster development with cross-platform' }
        ],
        images: [
          { src: '/images/mobile-apps-1.jpg', alt: 'Mobile app development', caption: 'Cross-platform mobile app development' },
          { src: '/images/mobile-apps-2.jpg', alt: 'App UI design process', caption: 'Mobile-first design and prototyping' },
          { src: '/images/mobile-apps-3.jpg', alt: 'App testing on devices', caption: 'Comprehensive device testing' },
          { src: '/images/mobile-apps-4.jpg', alt: 'App store optimization', caption: 'App store launch and optimization' }
        ],
        cta: {
          title: 'Launch Your Mobile App',
          description: 'Transform your idea into a successful mobile app that users love and your business benefits from.',
          primaryButton: { text: 'Start App Development', href: '/contact?service=mobile-apps' },
          secondaryButton: { text: 'View Mobile Portfolio', href: '/portfolio/mobile-apps' }
        }
      },
      {
        id: 'api-integration',
        name: 'API Integration',
        path: '/services/build/api-integration',
        slug: 'api-integration',
        heroTitle: 'Seamless API Integration & Development Services',
        heroDescription: 'Connect your systems and applications with robust API integrations that streamline operations and enhance functionality.',
        category: 'build',
        tags: ['API Development', 'Third-Party Integration', 'Data Synchronization', 'Automation'],
        sections: [
          {
            heading: 'Custom API Development',
            description: 'We design and develop custom APIs that enable seamless communication between your applications and services. Our RESTful and GraphQL APIs are built with security, scalability, and performance in mind, providing reliable data access and functionality for your digital ecosystem.'
          },
          {
            heading: 'Third-Party Service Integration',
            description: 'Integrate your applications with popular third-party services including payment processors, CRM systems, marketing platforms, and social media APIs. We handle authentication, data mapping, and error handling to ensure smooth, reliable integrations.'
          },
          {
            heading: 'Data Synchronization & Automation',
            description: 'Automate business processes and ensure data consistency across all your systems with our integration solutions. We create automated workflows that synchronize data in real-time, reducing manual work and eliminating data silos.'
          }
        ],
        stats: [
          { label: 'Integration Success Rate', value: '99.5%', description: 'Successful API integration completion' },
          { label: 'Data Sync Speed', value: '< 5sec', description: 'Average real-time data synchronization' },
          { label: 'API Uptime', value: '99.9%', description: 'Custom API availability guarantee' },
          { label: 'Processing Efficiency', value: '85%', description: 'Improvement in automated processes' }
        ],
        images: [
          { src: '/images/api-integration-1.jpg', alt: 'API development process', caption: 'Custom API development and testing' },
          { src: '/images/api-integration-2.jpg', alt: 'System integration diagram', caption: 'Complex system integration planning' },
          { src: '/images/api-integration-3.jpg', alt: 'Data flow visualization', caption: 'Data synchronization and workflow automation' },
          { src: '/images/api-integration-4.jpg', alt: 'API monitoring dashboard', caption: 'API performance monitoring and analytics' }
        ],
        cta: {
          title: 'Connect Your Systems',
          description: 'Streamline your operations with seamless API integrations that connect all your business systems and applications.',
          primaryButton: { text: 'Discuss Integration Needs', href: '/contact?service=api-integration' },
          secondaryButton: { text: 'Integration Case Studies', href: '/case-studies/api-integration' }
        }
      },
      {
        id: 'performance-optimization',
        name: 'Performance Optimization',
        path: '/services/build/performance-optimization',
        slug: 'performance-optimization',
        heroTitle: 'Website Performance Optimization That Drives Results',
        heroDescription: 'Boost your website speed, improve user experience, and increase conversions with comprehensive performance optimization.',
        category: 'build',
        tags: ['Speed Optimization', 'Core Web Vitals', 'User Experience', 'Conversion Rate'],
        sections: [
          {
            heading: 'Speed & Loading Optimization',
            description: 'We optimize every aspect of your website\'s loading performance including image compression, code minification, caching strategies, and CDN implementation. Our goal is to achieve sub-2-second load times that keep users engaged and improve search engine rankings.'
          },
          {
            heading: 'Core Web Vitals Improvement',
            description: 'Meet Google\'s Core Web Vitals standards with targeted optimization of Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). We ensure your website passes Google\'s performance benchmarks for better search visibility.'
          },
          {
            heading: 'User Experience Enhancement',
            description: 'Optimize the overall user experience through performance improvements that reduce bounce rates and increase engagement. We focus on smooth interactions, fast navigation, and responsive design to create positive user experiences that drive conversions.'
          }
        ],
        stats: [
          { label: 'Speed Improvement', value: '67%', description: 'Average page load time reduction' },
          { label: 'Core Web Vitals', value: '95%', description: 'Pass rate for Google\'s standards' },
          { label: 'Bounce Rate Reduction', value: '45%', description: 'Decrease in bounce rates' },
          { label: 'Conversion Increase', value: '32%', description: 'Improvement in conversion rates' }
        ],
        images: [
          { src: '/images/performance-optimization-1.jpg', alt: 'Website speed testing', caption: 'Comprehensive performance analysis' },
          { src: '/images/performance-optimization-2.jpg', alt: 'Optimization workflow', caption: 'Performance optimization process' },
          { src: '/images/performance-optimization-3.jpg', alt: 'Before and after metrics', caption: 'Performance improvement results' },
          { src: '/images/performance-optimization-4.jpg', alt: 'Monitoring dashboard', caption: 'Ongoing performance monitoring' }
        ],
        cta: {
          title: 'Accelerate Your Website',
          description: 'Transform your website performance with optimization strategies that improve speed, user experience, and business results.',
          primaryButton: { text: 'Optimize My Website', href: '/contact?service=performance-optimization' },
          secondaryButton: { text: 'Performance Audit', href: '/tools/website-audit' }
        }
      },
      {
        id: 'seo',
        name: 'Search Engine Optimization (SEO)',
        path: '/services/build/seo',
        slug: 'seo',
        heroTitle: 'Strategic SEO That Drives Organic Growth',
        heroDescription: 'Increase your search visibility and drive qualified traffic with comprehensive SEO strategies that deliver long-term results.',
        category: 'build',
        tags: ['Organic Search', 'Keyword Strategy', 'Technical SEO', 'Content Optimization'],
        sections: [
          {
            heading: 'Technical SEO & Site Architecture',
            description: 'We optimize your website\'s technical foundation including site structure, crawlability, indexation, and Core Web Vitals. Our technical SEO ensures search engines can effectively discover, crawl, and understand your content while providing excellent user experiences.'
          },
          {
            heading: 'Keyword Strategy & Content Optimization',
            description: 'Develop comprehensive keyword strategies that target your ideal customers at every stage of their journey. We create content strategies, optimize existing pages, and develop new content that ranks for valuable search terms and drives qualified traffic.'
          },
          {
            heading: 'Link Building & Authority Development',
            description: 'Build domain authority and search rankings through strategic link building and digital PR campaigns. We focus on earning high-quality backlinks from relevant, authoritative websites that boost your search visibility and credibility.'
          }
        ],
        stats: [
          { label: 'Organic Traffic Growth', value: '185%', description: 'Average increase in organic traffic' },
          { label: 'Keyword Rankings', value: '78%', description: 'Keywords ranking on page 1' },
          { label: 'Domain Authority Increase', value: '+25', description: 'Average domain authority improvement' },
          { label: 'ROI Achievement', value: '420%', description: 'Return on SEO investment' }
        ],
        images: [
          { src: '/images/seo-1.jpg', alt: 'SEO strategy planning', caption: 'Comprehensive SEO strategy development' },
          { src: '/images/seo-2.jpg', alt: 'Keyword research process', caption: 'In-depth keyword and competitor analysis' },
          { src: '/images/seo-3.jpg', alt: 'SEO performance dashboard', caption: 'SEO performance tracking and reporting' },
          { src: '/images/seo-4.jpg', alt: 'Content optimization workflow', caption: 'Content optimization and link building' }
        ],
        cta: {
          title: 'Dominate Search Results',
          description: 'Increase your online visibility and drive qualified traffic with SEO strategies that deliver measurable business growth.',
          primaryButton: { text: 'Start SEO Strategy', href: '/contact?service=seo' },
          secondaryButton: { text: 'SEO Audit', href: '/tools/seo-audit' }
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Design',
    icon: Palette,
    emoji: '🎨',
    gradient: ['#a78bfa', '#ec4899'],
    items: [
      {
        id: 'ui-ux-design',
        name: 'UI/UX Design',
        path: '/services/design/ui-ux-design',
        slug: 'ui-ux-design',
        heroTitle: 'User-Centered Design That Converts',
        heroDescription: 'Create intuitive, engaging user experiences that delight users and drive business results through strategic UI/UX design.',
        category: 'design',
        tags: ['User Experience', 'Interface Design', 'Prototyping', 'Usability Testing'],
        sections: [
          {
            heading: 'User Research & Experience Strategy',
            description: 'We begin every design project with comprehensive user research to understand your audience\'s needs, behaviors, and pain points. Our UX strategy process includes user interviews, persona development, and journey mapping to create designs that truly resonate with your users.'
          },
          {
            heading: 'Interface Design & Prototyping',
            description: 'Transform user insights into beautiful, functional interfaces that guide users toward their goals. We create detailed wireframes, interactive prototypes, and pixel-perfect designs that balance aesthetics with usability and accessibility standards.'
          },
          {
            heading: 'Usability Testing & Optimization',
            description: 'Validate design decisions through rigorous usability testing and iterative improvements. We conduct user testing sessions, analyze user behavior, and continuously optimize the experience to maximize engagement and conversion rates.'
          }
        ],
        stats: [
          { label: 'Conversion Rate Increase', value: '94%', description: 'Average improvement in conversion rates' },
          { label: 'User Satisfaction', value: '96%', description: 'User satisfaction score improvement' },
          { label: 'Task Completion Rate', value: '87%', description: 'User task completion success rate' },
          { label: 'Design System Adoption', value: '100%', description: 'Client adoption of design systems' }
        ],
        images: [
          { src: '/images/ui-ux-design-1.jpg', alt: 'UX research process', caption: 'User research and experience mapping' },
          { src: '/images/ui-ux-design-2.jpg', alt: 'Design prototyping', caption: 'Interactive prototype development' },
          { src: '/images/ui-ux-design-3.jpg', alt: 'Usability testing session', caption: 'User testing and feedback collection' },
          { src: '/images/ui-ux-design-4.jpg', alt: 'Final design showcase', caption: 'Polished UI design implementation' }
        ],
        cta: {
          title: 'Design Experiences Users Love',
          description: 'Create user-centered designs that not only look beautiful but drive engagement and achieve your business goals.',
          primaryButton: { text: 'Start Your Design Project', href: '/contact?service=ui-ux-design' },
          secondaryButton: { text: 'View Design Portfolio', href: '/portfolio/ui-ux-design' }
        }
      },
      {
        id: 'website-redesign',
        name: 'Website Re-Design',
        path: '/services/design/website-redesign',
        slug: 'website-redesign',
        heroTitle: 'Website Redesign That Transforms Your Business',
        heroDescription: 'Revitalize your online presence with strategic website redesigns that improve user experience and drive better results.',
        category: 'design',
        tags: ['Website Redesign', 'Brand Refresh', 'Conversion Optimization', 'Modern Design'],
        sections: [
          {
            heading: 'Strategic Redesign Planning',
            description: 'We start with a comprehensive audit of your current website, analyzing user behavior, identifying pain points, and benchmarking against competitors. Our strategic approach ensures the redesign addresses real business challenges while improving user experience and achieving your goals.'
          },
          {
            heading: 'Modern Design & Development',
            description: 'Transform your website with contemporary design trends, improved user flows, and cutting-edge technology. We create responsive, accessible designs that work perfectly across all devices while maintaining your brand identity and improving overall performance.'
          },
          {
            heading: 'Launch & Performance Optimization',
            description: 'Execute a seamless website launch with comprehensive testing, SEO preservation, and performance optimization. We ensure your new website not only looks great but performs better than your previous site in terms of speed, search rankings, and conversions.'
          }
        ],
        stats: [
          { label: 'Traffic Increase', value: '156%', description: 'Average increase in website traffic post-redesign' },
          { label: 'Conversion Improvement', value: '89%', description: 'Better conversion rates after redesign' },
          { label: 'Page Load Speed', value: '65%', description: 'Improvement in page loading times' },
          { label: 'User Engagement', value: '112%', description: 'Increase in user engagement metrics' }
        ],
        images: [
          { src: '/images/website-redesign-1.jpg', alt: 'Website audit process', caption: 'Comprehensive website analysis and planning' },
          { src: '/images/website-redesign-2.jpg', alt: 'Design mockups', caption: 'Modern design concepts and mockups' },
          { src: '/images/website-redesign-3.jpg', alt: 'Before and after comparison', caption: 'Website transformation showcase' },
          { src: '/images/website-redesign-4.jpg', alt: 'Launch celebration', caption: 'Successful website launch and results' }
        ],
        cta: {
          title: 'Transform Your Website',
          description: 'Give your website the makeover it deserves with a strategic redesign that improves results and user experience.',
          primaryButton: { text: 'Start Website Redesign', href: '/contact?service=website-redesign' },
          secondaryButton: { text: 'Redesign Case Studies', href: '/case-studies/website-redesign' }
        }
      },
      {
        id: 'visual-identity',
        name: 'Visual Identity',
        path: '/services/design/visual-identity',
        slug: 'visual-identity',
        heroTitle: 'Distinctive Visual Identity That Builds Recognition',
        heroDescription: 'Create a memorable visual identity that represents your brand values and resonates with your target audience.',
        category: 'design',
        tags: ['Logo Design', 'Brand Identity', 'Visual Systems', 'Brand Guidelines'],
        sections: [
          {
            heading: 'Logo Design & Brand Mark Creation',
            description: 'We design distinctive logos and brand marks that capture your brand essence and work effectively across all applications. Our logo design process includes concept exploration, refinement, and delivery of comprehensive logo packages with various formats and applications.'
          },
          {
            heading: 'Visual System Development',
            description: 'Extend your brand identity through comprehensive visual systems including color palettes, typography, iconography, and graphic elements. We create cohesive visual languages that maintain consistency while providing flexibility for various brand applications.'
          },
          {
            heading: 'Brand Guidelines & Asset Creation',
            description: 'Document your visual identity with detailed brand guidelines and create essential brand assets. We provide comprehensive brand manuals, template systems, and asset libraries that ensure consistent brand application across all touchpoints and team members.'
          }
        ],
        stats: [
          { label: 'Brand Recognition', value: '78%', description: 'Improvement in brand recognition rates' },
          { label: 'Logo Concepts', value: '25+', description: 'Initial logo concepts explored per project' },
          { label: 'Brand Consistency', value: '95%', description: 'Consistency score across brand applications' },
          { label: 'Client Satisfaction', value: '98%', description: 'Visual identity approval rate' }
        ],
        images: [
          { src: '/images/visual-identity-1.jpg', alt: 'Logo design process', caption: 'Logo concept development and exploration' },
          { src: '/images/visual-identity-2.jpg', alt: 'Brand color palette', caption: 'Visual system and color development' },
          { src: '/images/visual-identity-3.jpg', alt: 'Brand guidelines book', caption: 'Comprehensive brand guidelines creation' },
          { src: '/images/visual-identity-4.jpg', alt: 'Brand application examples', caption: 'Visual identity in real-world applications' }
        ],
        cta: {
          title: 'Create Your Visual Identity',
          description: 'Develop a distinctive visual identity that makes your brand memorable and builds lasting recognition.',
          primaryButton: { text: 'Design Visual Identity', href: '/contact?service=visual-identity' },
          secondaryButton: { text: 'Identity Portfolio', href: '/portfolio/visual-identity' }
        }
      },
      {
        id: 'print-design',
        name: 'Print Design',
        path: '/services/design/print-design',
        slug: 'print-design',
        heroTitle: 'Professional Print Design That Makes an Impact',
        heroDescription: 'Create compelling print materials that communicate your message effectively and leave lasting impressions.',
        category: 'design',
        tags: ['Print Materials', 'Marketing Collateral', 'Publication Design', 'Packaging'],
        sections: [
          {
            heading: 'Marketing Collateral Design',
            description: 'Design professional marketing materials including brochures, flyers, business cards, and promotional items that effectively communicate your brand message. We ensure all print materials align with your visual identity and marketing objectives while optimizing for print production.'
          },
          {
            heading: 'Publication & Editorial Design',
            description: 'Create engaging publications including magazines, annual reports, catalogs, and books with professional layout and typography. Our editorial design expertise ensures excellent readability, visual hierarchy, and compelling presentation of complex information.'
          },
          {
            heading: 'Packaging & Product Design',
            description: 'Design packaging solutions that protect your products while creating compelling shelf presence and unboxing experiences. We consider materials, sustainability, production constraints, and brand positioning to create packaging that drives sales and builds brand loyalty.'
          }
        ],
        stats: [
          { label: 'Print Projects', value: '450+', description: 'Successfully completed print design projects' },
          { label: 'Production Accuracy', value: '99.2%', description: 'Print-ready file accuracy rate' },
          { label: 'Client Satisfaction', value: '97%', description: 'Satisfaction with print design quality' },
          { label: 'Turnaround Time', value: '5 days', description: 'Average project completion time' }
        ],
        images: [
          { src: '/images/print-design-1.jpg', alt: 'Print design process', caption: 'Professional print design workflow' },
          { src: '/images/print-design-2.jpg', alt: 'Marketing materials showcase', caption: 'Diverse print marketing materials' },
          { src: '/images/print-design-3.jpg', alt: 'Publication layout', caption: 'Editorial and publication design' },
          { src: '/images/print-design-4.jpg', alt: 'Packaging design examples', caption: 'Creative packaging design solutions' }
        ],
        cta: {
          title: 'Create Impactful Print Materials',
          description: 'Design professional print materials that communicate your message effectively and reinforce your brand presence.',
          primaryButton: { text: 'Start Print Project', href: '/contact?service=print-design' },
          secondaryButton: { text: 'Print Design Gallery', href: '/portfolio/print-design' }
        }
      },
      {
        id: 'design-systems',
        name: 'Design Systems',
        path: '/services/design/design-systems',
        slug: 'design-systems',
        heroTitle: 'Scalable Design Systems for Consistent Experiences',
        heroDescription: 'Build comprehensive design systems that ensure consistency, efficiency, and scalability across all your digital products.',
        category: 'design',
        tags: ['Design Systems', 'Component Libraries', 'Style Guides', 'Design Tokens'],
        sections: [
          {
            heading: 'Component Library Development',
            description: 'Create reusable component libraries that maintain design consistency while accelerating development workflows. Our component systems include detailed specifications, usage guidelines, and code implementations that enable teams to build cohesive user experiences efficiently.'
          },
          {
            heading: 'Design Token & Style Guide Creation',
            description: 'Establish design tokens and comprehensive style guides that define your brand\'s visual language across all digital touchpoints. We create systematic approaches to colors, typography, spacing, and interactive elements that scale with your product ecosystem.'
          },
          {
            heading: 'Documentation & Team Training',
            description: 'Provide comprehensive documentation and team training to ensure successful design system adoption and maintenance. We create detailed guidelines, best practices, and training materials that empower your team to use and contribute to the design system effectively.'
          }
        ],
        stats: [
          { label: 'Development Speed', value: '65%', description: 'Faster product development with design systems' },
          { label: 'Design Consistency', value: '96%', description: 'Consistency score across products' },
          { label: 'Component Reusability', value: '88%', description: 'Reusability rate of design components' },
          { label: 'Team Adoption', value: '94%', description: 'Design system adoption rate' }
        ],
        images: [
          { src: '/images/design-systems-1.jpg', alt: 'Design system components', caption: 'Comprehensive component library showcase' },
          { src: '/images/design-systems-2.jpg', alt: 'Design tokens documentation', caption: 'Design token and style guide documentation' },
          { src: '/images/design-systems-3.jpg', alt: 'Team training session', caption: 'Design system training and onboarding' },
          { src: '/images/design-systems-4.jpg', alt: 'System implementation', caption: 'Design system in production applications' }
        ],
        cta: {
          title: 'Build Your Design System',
          description: 'Create a scalable design system that ensures consistency and efficiency across all your digital products.',
          primaryButton: { text: 'Develop Design System', href: '/contact?service=design-systems' },
          secondaryButton: { text: 'System Examples', href: '/portfolio/design-systems' }
        }
      }
    ]
  }
];