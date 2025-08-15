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
} from "lucide-react";

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
