import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Wrench,
  TrendingUp,
  Sparkles,
  Target,
  Video,
  Laptop,
  Cog,
  BarChart2,
  Layout,
  Lightbulb,
  Handshake,
} from "lucide-react";
import technologyServies from "../assets/service/technology-services.png";
import advertisingServies from "../assets/service/advertising-services.png";

export const Menus = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Services",
    subMenuHeading: ["Software Development", "Advertising & Marketing"],
    submenu: [
      // Under "Software Development"
      {
        heading: "Software Development",
        items: [
          {
            name: "Web Development",
            desc: "Custom websites and web applications",
            icon: Globe,
          },
          {
            name: "Mobile App Development",
            desc: "iOS, Android, and cross-platform apps",
            icon: Smartphone,
          },
          {
            name: "UI/UX Design",
            desc: "User-friendly and modern interface design",
            icon: Palette,
          },
          {
            name: "Cloud Solutions",
            desc: "Scalable cloud hosting and integrations",
            icon: Cloud,
          },
          {
            name: "Maintenance",
            desc: "Ongoing support and updates",
            icon: Wrench,
          },
        ],
      },
      // Under "Advertising & Marketing"
      {
        heading: "Advertising & Marketing",
        items: [
          {
            name: "Digital Marketing",
            desc: "SEO, SEM, and social media campaigns",
            icon: TrendingUp,
          },
          {
            name: "Creative & Branding",
            desc: "Logos, brand identity, and design assets",
            icon: Sparkles,
          },
          {
            name: "Campaigns",
            desc: "Targeted online and offline advertising",
            icon: Target,
          },
          {
            name: "Video Production",
            desc: "Promotional videos and animations",
            icon: Video,
          },
        ],
      },
    ],
  },
  {
    name: "Portfolio",
  },
  {
    name: "Blog",
  },
  {
    name: "Contact",
  },
];

export const technologySolutions = {
  name: "Technology Solutions",
  image: technologyServies,
  items: [
    {
      name: "Software Development",
      desc: "Custom software solutions tailored to your business needs",
      icon: Laptop,
    },
    {
      name: "Web Development",
      desc: "Responsive and modern websites that convert visitors",
      icon: Globe,
    },
    {
      name: "Mobile App Development",
      desc: "iOS and Android apps that engage and retain users",
      icon: Smartphone,
    },
    {
      name: "UI/UX Design",
      desc: "Intuitive and attractive interfaces for seamless experiences",
      icon: Palette,
    },
    {
      name: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure and integrations",
      icon: Cloud,
    },
    {
      name: "Maintenance",
      desc: "Ongoing support, updates, and optimizations for your apps",
      icon: Cog,
    },
  ],
};

export const advertisingMarketing = {
  name: " Advertising & Marketing",
  image: advertisingServies,
  items: [
    {
      name: "Digital Marketing",
      desc: "SEO, SEM, and social media campaigns to grow your audience",
      icon: BarChart2,
    },
    {
      name: "Creative & Branding",
      desc: "Build a strong brand identity with unique visual design",
      icon: Layout,
    },
    {
      name: "Campaigns",
      desc: "End-to-end campaign planning and execution for impact",
      icon: Target,
    },
    {
      name: "Video Production",
      desc: "Engaging videos that tell your brand story effectively",
      icon: Video,
    },
  ],
};

export const homeServiceSectionData = [
  technologySolutions,
  advertisingMarketing,
];

export const ourValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "Always ahead with the latest tech trends to future-proof your business.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Flexible",
    desc: "Solutions built to adapt and grow alongside your business needs.",
  },
  {
    icon: Handshake,
    title: "Trusted by Clients",
    desc: "Proven track record of delivering impactful solutions across industries.",
  },
  {
    icon: Wrench,
    title: "End-to-End Support",
    desc: "From concept to deployment and beyond—we’ve got you covered.",
  },
];
