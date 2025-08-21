import React, { useState } from "react";
import { BadgeCheck, Flame, Rocket, Sparkles, Zap, Monitor, Palette, Megaphone } from "lucide-react";
import MinimalHeader from "../../../components/ui/MinimalHeader";
import {useNavigate } from "react-router-dom"; 


type PricingTier = {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  hoverBg: string;
  textColor: string;
  button: string;
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
        price: "$499 + tax",
        description: "Perfect for portfolio sites & basic brands",
        features: [
          "1 Landing Page",
          "Responsive Design",
          "Basic SEO Setup",
          "Delivery in 7 Days",
        ],
        icon: <Zap className="text-gray-300" size={20} />,
        hoverBg: "hover:bg-red-500",
        textColor: "group-hover:text-white",
        button: "bg-white text-black group-hover:bg-white group-hover:text-black",
      },
      {
        title: "Pro",
        price: "$999 + tax",
        description: "Ideal for creative teams & product launches",
        features: [
          "Up to 5 Pages",
          "Custom Animations",
          "Advanced SEO",
          "Delivery in 10 Days",
        ],
        icon: <Rocket className="text-orange-300" size={20} />,
        hoverBg: "hover:bg-red-600",
        textColor: "group-hover:text-gray-100",
        button: "bg-white text-black group-hover:bg-black group-hover:text-red-400",
        popular: true,
      },
      {
        title: "Elite",
        price: "$1599 + tax",
        description: "Full scale studio-level creative execution",
        features: [
          "Up to 25 Pages",
          "Motion Design + GSAP",
          "Responsive Designs",
          "Custom CMS or Headless Setup",
          "Priority Delivery & Support",
        ],
        icon: <Flame className="text-red-300" size={20} />,
        hoverBg: "hover:bg-red-700",
        textColor: "group-hover:text-white",
        button: "bg-white text-black group-hover:bg-white group-hover:text-red-700",
      },
    ],
  },
  {
  name: "Build",
  icon: <Monitor size={18} />,
  color: "blue",
  pricingTiers: [
    {
      title: "Landing Page",
      price: "$499 + tax",
      description: "Single-page website to showcase your brand or product",
      features: [
        "1 Page Design",
        "Responsive & Accessible",
        "Basic Static Site",
        "Delivery in 7 Days",
      ],
      icon: <Sparkles className="text-gray-300" size={20} />,
      hoverBg: "hover:bg-blue-500",
      textColor: "group-hover:text-white",
      button: "bg-white text-black group-hover:bg-white group-hover:text-black",
    },
    {
      title: "Small Website",
      price: "$999 + tax",
      description: "Website up to 10 pages with light backend functionality",
      features: [
        "Up to 10 Pages",
        "Responsive & Accessible",
        "Basic Backend/API Integration",
        "Delivery in 15 Days",
      ],
      icon: <Zap className="text-gray-300" size={20} />,
      hoverBg: "hover:bg-blue-500",
      textColor: "group-hover:text-white",
      button: "bg-white text-black group-hover:bg-white group-hover:text-black",
      popular: true,
    },
    {
      title: "Full Website",
      price: "$1999 + tax",
      description: "Comprehensive website up to 25 pages with SEO and backend",
      features: [
        "Up to 25 Pages",
        "Optimized SEO",
        "Basic Backend/API Integration",
        "Delivery in 30 Days",
      ],
      icon: <Rocket className="text-gray-300" size={20} />,
      hoverBg: "hover:bg-blue-500",
      textColor: "group-hover:text-white",
      button: "bg-white text-black group-hover:bg-white group-hover:text-black",
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
        price: "$399 + tax",
        description: "Logo and basic brand identity",
        features: [
          "Logo Design",
          "Basic Style Guide",
          "1 Revision Cycle",
          "Delivery in 5 Days",
        ],
        icon: <Zap className="text-gray-300" size={20} />,
        hoverBg: "hover:bg-green-500",
        textColor: "group-hover:text-white",
        button: "bg-white text-black group-hover:bg-white group-hover:text-black",
      },
      {
        title: "Pro",
        price: "$899 + tax",
        description: "Complete brand identity and collateral",
        features: [
          "Logo & Visual Identity",
          "Brand Guidelines",
          "Marketing Collateral",
          "Delivery in 12 Days",
        ],
        icon: <Rocket className="text-green-300" size={20} />,
        hoverBg: "hover:bg-green-600",
        textColor: "group-hover:text-gray-100",
        button: "bg-white text-black group-hover:bg-black group-hover:text-green-500",
        popular: true,
      },
      {
        title: "Elite",
        price: "$1499 + tax",
        description: "Full branding experience & strategy",
        features: [
          "Comprehensive Brand Strategy",
          "Visual & Verbal Identity",
          "Campaign Concepts",
          "Priority Delivery & Support",
        ],
        icon: <Flame className="text-green-300" size={20} />,
        hoverBg: "hover:bg-green-700",
        textColor: "group-hover:text-white",
        button: "bg-white text-black group-hover:bg-white group-hover:text-green-700",
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
        price: "$299 + tax",
        description: "Basic social media setup & content",
        features: [
          "Profile Setup",
          "3 Posts Per Week",
          "Basic Analytics",
          "Delivery in 7 Days",
        ],
        icon: <Zap className="text-gray-300" size={20} />,
        hoverBg: "hover:bg-purple-500",
        textColor: "group-hover:text-white",
        button: "bg-white text-black group-hover:bg-white group-hover:text-black",
      },
      {
        title: "Pro",
        price: "$699 + tax",
        description: "Growth & engagement focused",
        features: [
          "Daily Posts",
          "Community Management",
          "Campaign Planning",
          "Delivery in 14 Days",
        ],
        icon: <Rocket className="text-purple-300" size={20} />,
        hoverBg: "hover:bg-purple-600",
        textColor: "group-hover:text-gray-100",
        button: "bg-white text-black group-hover:bg-black group-hover:text-purple-500",
        popular: true,
      },
      {
        title: "Elite",
        price: "$1199 + tax",
        description: "Full social media management & analytics",
        features: [
          "Custom Strategy",
          "Influencer Campaigns",
          "Advanced Analytics",
          "Priority Support",
        ],
        icon: <Flame className="text-purple-300" size={20} />,
        hoverBg: "hover:bg-purple-700",
        textColor: "group-hover:text-white",
        button: "bg-white text-black group-hover:bg-white group-hover:text-purple-700",
      },
    ],
  },
];


const PricingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(services[0].name);
  const navigate = useNavigate(); 
  const activeService = services.find((s) => s.name === activeTab)!;

  return (
    <div className="w-full min-h-screen mb-16 bg-lightGray py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="flex-1">
            <MinimalHeader 
              pillText="Pricing" 
              titleLine1="Choose Your Package"
            />
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {services.map((service) => (
              <button
                key={service.name}
                onClick={() => setActiveTab(service.name)}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === service.name
                    ? "bg-appleBlue text-white shadow-lg transform scale-105"
                    : "bg-white text-carbonGray hover:bg-lightGray border border-gray-200 hover:border-gray-300"
                }`}
                aria-selected={activeTab === service.name}
              >
                <span className={`${activeTab === service.name ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}`}>
                  {service.icon}
                </span>
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
          {activeService.pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative bg-carbonGray rounded-2xl p-6 md:p-8 border border-carbonGray transition-all duration-300 hover:border-white hover:shadow-2xl transform hover:-translate-y-1 ${tier.hoverBg} ${
                tier.popular ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-50' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-appleBlue text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`flex items-center gap-3 mb-4 transition-colors duration-300 ${tier.textColor}`}>
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-opacity-50 transition-all duration-300">
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                  {tier.title}
                </h3>
              </div>

              {/* Description */}
              <p className={`text-lightGray mb-6 leading-relaxed transition-colors duration-300 ${tier.textColor}`}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <h4 className={`text-3xl md:text-4xl font-bold text-white mb-1 transition-colors duration-300 ${tier.textColor}`}>
                  {tier.price}
                </h4>
                <p className="text-lightGray text-sm">One-time payment</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 text-gray-200 transition-colors duration-300 ${tier.textColor}`}
                  >
                    <div className="flex-shrink-0">
                      <BadgeCheck size={18} className="text-green-400" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
              onClick={() => navigate("/contact")}
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${tier.button} hover:shadow-lg transform hover:scale-105`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTabs;