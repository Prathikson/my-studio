import React, { useState } from "react";
import { BadgeCheck, Flame, Rocket, Sparkles, Zap, Monitor, Palette, Megaphone, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

type PricingTier = {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  glassColor: string;
  accentColor: string;
  popular?: boolean;
};

type ServicePricing = {
  name: string;
  pricingTiers: PricingTier[];
  icon: React.ReactNode;
  color: string;
};

const services: ServicePricing[] = [
  {
    name: "Design",
    icon: <Palette size={18} />,
    color: "red",
    pricingTiers: [
      {
        title: "Starter",
        price: "$799",
        description: "Perfect for portfolio sites & basic brands",
        features: [
          "1 Landing Page",
          "Responsive Design",
          "Basic SEO Setup",
          "Delivery in 7 Days",
        ],
        icon: <Zap size={20} />,
        glassColor: "rgba(255, 255, 255, 0.05)",
        accentColor: "from-orange-400/20 to-red-400/20",
      },
      {
        title: "Pro",
        price: "$2,199",
        description: "Ideal for creative teams & product launches",
        features: [
          "Up to 5 Pages",
          "Custom Animations",
          "Advanced SEO",
          "Delivery in 10 Days",
        ],
        icon: <Rocket size={20} />,
        glassColor: "rgba(255, 165, 0, 0.08)",
        accentColor: "from-orange-500/30 to-red-500/30",
        popular: true,
      },
      {
        title: "Elite",
        price: "$6,599",
        description: "Full scale studio-level creative execution",
        features: [
          "Up to 25 Pages/Web App Wireframe",
          "Motion Design + GSAP",
          "Responsive Designs",
          "Custom CMS or Headless Setup",
          "Priority Delivery & Support",
        ],
        icon: <Flame size={20} />,
        glassColor: "rgba(255, 69, 0, 0.1)",
        accentColor: "from-red-500/40 to-orange-600/40",
      },
    ],
  },
  {
    name: "Build",
    icon: <Monitor size={18} />,
    color: "blue",
    pricingTiers: [
      {
        title: "Starter",
        price: "$799",
        description: "Single-page website to showcase your brand or product",
        features: [
          "1 Page Design",
          "Responsive & Accessible",
          "Basic Static Site",
          "Delivery in 7 Days",
        ],
        icon: <Sparkles size={20} />,
        glassColor: "rgba(255, 255, 255, 0.05)",
        accentColor: "from-blue-400/20 to-cyan-400/20",
      },
      {
        title: "Pro",
        price: "$3,499",
        description: "Website up to 10 pages with light backend functionality",
        features: [
          "Up to 10 Pages",
          "Responsive & Accessible",
          "Basic Backend/API Integration",
          "Delivery in 15 Days",
        ],
        icon: <Zap size={20} />,
        glassColor: "rgba(59, 130, 246, 0.08)",
        accentColor: "from-blue-500/30 to-cyan-500/30",
        popular: true,
      },
      {
        title: "Elite",
        price: "$10,499",
        description: "Comprehensive website up to 25 pages with SEO and backend",
        features: [
          "Up to 25 Pages",
          "Optimized SEO",
          "Basic Backend/API Integration",
          "Delivery in 30 Days",
        ],
        icon: <Rocket size={20} />,
        glassColor: "rgba(37, 99, 235, 0.1)",
        accentColor: "from-blue-600/40 to-indigo-600/40",
      },
    ],
  },
  {
    name: "Branding",
    icon: <Sparkles size={18} />,
    color: "green",
    pricingTiers: [
      {
        title: "Starter",
        price: "$599",
        description: "Logo and basic brand identity",
        features: [
          "Logo Design",
          "Basic Style Guide",
          "1 Revision Cycle",
          "Delivery in 5 Days",
        ],
        icon: <Zap size={20} />,
        glassColor: "rgba(255, 255, 255, 0.05)",
        accentColor: "from-green-400/20 to-emerald-400/20",
      },
      {
        title: "Pro",
        price: "$1,299",
        description: "Complete brand identity and collateral",
        features: [
          "Logo & Visual Identity",
          "Brand Guidelines",
          "Marketing Collateral",
          "Delivery in 12 Days",
        ],
        icon: <Rocket size={20} />,
        glassColor: "rgba(34, 197, 94, 0.08)",
        accentColor: "from-green-500/30 to-emerald-500/30",
        popular: true,
      },
      {
        title: "Elite",
        price: "$2,899",
        description: "Full branding experience & strategy",
        features: [
          "Comprehensive Brand Strategy",
          "Visual & Verbal Identity",
          "Campaign Concepts",
          "Priority Delivery & Support",
        ],
        icon: <Flame size={20} />,
        glassColor: "rgba(22, 163, 74, 0.1)",
        accentColor: "from-green-600/40 to-teal-600/40",
      },
    ],
  },
  {
    name: "Social",
    icon: <Megaphone size={18} />,
    color: "purple",
    pricingTiers: [
      {
        title: "Starter",
        price: "$599",
        description: "Basic social media setup & content",
        features: [
          "Profile Setup",
          "3 Posts Per Week",
          "Basic Analytics",
          "Delivery in 7 Days",
        ],
        icon: <Zap size={20} />,
        glassColor: "rgba(255, 255, 255, 0.05)",
        accentColor: "from-purple-400/20 to-violet-400/20",
      },
      {
        title: "Pro",
        price: "$1,499",
        description: "Growth & engagement focused",
        features: [
          "Daily Posts",
          "Community Management",
          "Campaign Planning",
          "Delivery in 14 Days",
        ],
        icon: <Rocket size={20} />,
        glassColor: "rgba(147, 51, 234, 0.08)",
        accentColor: "from-purple-500/30 to-violet-500/30",
        popular: true,
      },
      {
        title: "Elite",
        price: "$3,299",
        description: "Full social media management & analytics",
        features: [
          "Comprehensive Strategy",
          "Influencer Campaigns",
          "Advanced Analytics",
          "Priority Support",
        ],
        icon: <Flame size={20} />,
        glassColor: "rgba(124, 58, 237, 0.1)",
        accentColor: "from-purple-600/40 to-indigo-600/40",
      },
    ],
  },
];




const PricingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(services[0].name);
  const activeService = services.find((s) => s.name === activeTab)!;
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/contact`);
  };
  return (
    <div className="min-h-screen bg-lightGray0 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-smoothBlack/10 mb-8">
            <Sparkles size={16} className="text-appleBlue" />
            <span className="text-smoothBlack/80 font-medium">Pricing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-carbonGray mb-6 tracking-tight">
            Choose Your
            <span className="bg-gradient-to-r from-smoothBlack  to-carbonGray via-zoroRed bg-clip-text text-transparent"> Package</span>
          </h1>
        </div>

        {/* Liquid Glass Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => setActiveTab(service.name)}
              className={`group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 ${
                activeTab === service.name
                  ? "bg-white/10 backdrop-blur-2xl text-appleBlue border border-white/20 shadow-2xl scale-105"
                  : "bg-white/5 backdrop-blur-xl text-smoothBlack/80 border border-smoothBlack/5 hover:bg-white/8 hover:text-zoroRed hover:border-white/20"
              }`}
            >
              <span className={`transition-all duration-300 ${
                activeTab === service.name ? 'text-appleBlue scale-110' : 'text-smoothBlack group-hover:text-zoroRed/80'
              }`}>
                {service.icon}
              </span>
              {service.name}
              {activeTab === service.name && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-appleBlue/20 to-purple-500/20 blur-xl -z-10"></div>
              )}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activeService.pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden transition-all duration-700 hover:scale-105 ${
                tier.popular ? 'md:scale-110 xl:scale-110' : ''
              }`}
            >
              {/* Liquid Glass Card */}
              <div 
                className="relative h-full  rounded-3xl backdrop-blur-2xl border border-smoothBlack/5 p-8 hover:border-white/20 transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${tier.glassColor}, rgba(255, 255, 255, 0.02))`
                }}
              >
                {/* Popular Badge - Unique Floating Design */}
                {tier.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-2 py-2 rounded-2xl backdrop-blur-xl border border-amber-300/30 shadow-2xl">
                        <div className="flex items-center gap-2">
                          <Crown size={16} className="text-white" />
                          <span className="text-white mt-2 font-bold text-sm uppercase tracking-wider">Most Popular</span>
                        </div>
                      </div>
                      {/* Glowing effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-50 -z-10"></div>
                      {/* Floating animation */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-amber-400/80"></div>
                    </div>
                  </div>
                )}

                {/* Gradient Accent */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${tier.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <div className={`text-zoroRed`}>
                        {tier.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-carbonGray uppercase tracking-wide">
                      {tier.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-carbonGray/70 mb-8 leading-relaxed text-lg">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mb-10">
                    <div className="flex items-baseline gap-2 mb-2">
                      <h4 className="text-5xl font-bold text-carbonGray">
                        {tier.price}
                      </h4>
                      <span className="text-smoothBlack/80 text-lg">+ tax</span>
                    </div>
                    <p className="text-smoothBlack/50 text-sm uppercase tracking-wider">One-time payment</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-smoothBlack/80 group-hover:text-smoothBlack transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 p-1 rounded-full bg-emerald-500/20">
                          <BadgeCheck size={16} className="text-emerald-400" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Liquid Glass CTA Button */}
                  <button className="w-full relative group/btn overflow-hidden" onClick={handleContactClick}>
                    <div className="relative bg-lightGray backdrop-blur-xl px-8 py-4 rounded-2xl border border-smoothBlack/5 font-bold text-smoothBlack text-lg tracking-wide group-hover:text-lightGray group-hover:bg-smoothBlack transition-all duration-300">
                      Get Started
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTabs;