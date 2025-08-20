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
  Rocket,
  Users,
  Zap,
} from "lucide-react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaCode,
  FaMobileAlt,
  FaBullhorn,
  FaPaintBrush,
  FaRocket,
  FaLock,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import technologyServies from "../assets/service/technology-services.png";
import advertisingServies from "../assets/service/advertising-services.png";
import webImg from "../assets/service/web-development.png";
import mobileImg from "../assets/service/mobile-app.png";
import uiuxImg from "../assets/service/ui-ux.png";
import cloudImg from "../assets/service/cloud.png";
import maintenanceImg from "../assets/service/maintenance.png";
import digitalImg from "../assets/service/digital-marketing.png";
import brandingImg from "../assets/service/branding.png";
import campaignsImg from "../assets/service/campaigns.png";
import videoImg from "../assets/service/video-production.png";

export const Menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link:"/services",
    subMenuHeading: ["Software Development", "Advertising & Marketing"],
    submenu: [
      // Under "Software Development"
      {
        heading: "Technology Solutions",
        items: [
          {
            name: "Web Development",
            desc: "Custom websites and web applications",
            icon: Globe,
            link: "/services/web-development",
          },
          {
            name: "Mobile App Development",
            desc: "iOS, Android, and cross-platform apps",
            icon: Smartphone,
            link: "/services/mobile-app-development",
          },
          {
            name: "UI/UX Design",
            desc: "User-friendly and modern interface design",
            icon: Palette,
            link: "/services/ui-ux-design",
          },
          {
            name: "Cloud Solutions",
            desc: "Scalable cloud hosting and integrations",
            icon: Cloud,
            link: "/services/cloud-solutions",
          },
          {
            name: "Maintenance",
            desc: "Ongoing support and updates",
            icon: Wrench,
            link: "/services/maintenance",
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
            link: "/services/digital-marketing",
          },
          {
            name: "Creative & Branding",
            desc: "Logos, brand identity, and design assets",
            icon: Sparkles,
            link: "/services/creative-branding",
          },
          {
            name: "Campaigns",
            desc: "Targeted online and offline advertising",
            icon: Target,
            link: "/services/campaigns",
          },
          {
            name: "Video Production",
            desc: "Promotional videos and animations",
            icon: Video,
            link: "/services/video-production",
          },
        ],
      },
    ],
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const technologySolutions = {
  name: "Technology Solutions",
  image: technologyServies,
  link: "/services/technology-solutions",
  items: [
    {
      name: "Web Development",
      desc: "Responsive and modern websites that convert visitors",
      icon: Globe,
      link: "/services/web-development",
    },
    {
      name: "Mobile App Development",
      desc: "iOS and Android apps that engage and retain users",
      icon: Smartphone,
      link: "/services/mobile-app-development",
    },
    {
      name: "UI/UX Design",
      desc: "Intuitive and attractive interfaces for seamless experiences",
      icon: Palette,
      link: "/services/ui-ux-design",
    },
    {
      name: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure and integrations",
      icon: Cloud,
      link: "/services/cloud-solutions",
    },
    {
      name: "Maintenance",
      desc: "Ongoing support, updates, and optimizations for your apps",
      icon: Cog,
      link: "/services/maintenance",
    },
  ],
};

export const advertisingMarketing = {
  name: " Advertising & Marketing",
  image: advertisingServies,
  link: "/services/advertising-marketing",
  items: [
    {
      name: "Digital Marketing",
      desc: "SEO, SEM, and social media campaigns to grow your audience",
      icon: BarChart2,
      link: "/services/digital-marketing",
    },
    {
      name: "Creative & Branding",
      desc: "Build a strong brand identity with unique visual design",
      icon: Layout,
      link: "/services/creative-branding",
    },
    {
      name: "Campaigns",
      desc: "End-to-end campaign planning and execution for impact",
      icon: Target,
      link: "/services/campaigns",
    },
    {
      name: "Video Production",
      desc: "Engaging videos that tell your brand story effectively",
      icon: Video,
      link: "/services/video-production",
    },
  ],
};

export const homeServiceSectionData = [
  technologySolutions,
  advertisingMarketing,
];

export const servicesDetailData = {
  "web-development": {
    title: "Web Development",
    desc: "Responsive and modern websites that convert visitors into loyal customers.",
    para: "We craft high-performance websites and web applications optimized for speed, security, and scalability. Every project is tailored to your business goals to ensure a seamless user experience and measurable results.",
    icon: Globe,
    image: webImg,
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    desc: "Engaging iOS and Android apps designed to retain and delight users.",
    para: "Our mobile apps are built for performance and usability. We focus on intuitive interfaces, smooth interactions, and scalable architectures to ensure your app grows with your user base.",
    icon: Smartphone,
    image: mobileImg,
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    desc: "Intuitive and attractive interfaces for seamless user experiences.",
    para: "We design user-centric interfaces that are visually appealing and accessible. Our approach improves engagement, reduces friction, and drives user satisfaction across all platforms.",
    icon: Palette,
    image: uiuxImg,
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    desc: "Secure, scalable, and reliable cloud infrastructure and integrations.",
    para: "We provide cloud-based solutions that ensure your applications run smoothly under any load. From hosting to integration, our cloud services are secure, scalable, and efficient.",
    icon: Cloud,
    image: cloudImg,
  },
  maintenance: {
    title: "Maintenance & Support",
    desc: "Ongoing support, updates, and optimizations to keep your software running flawlessly.",
    para: "We offer proactive maintenance services to keep your apps and websites secure, up-to-date, and optimized. Our team ensures minimal downtime and maximum reliability.",
    icon: Cog,
    image: maintenanceImg,
  },
  "digital-marketing": {
    title: "Digital Marketing",
    desc: "SEO, SEM, and social campaigns to grow your audience and ROI.",
    para: "Our digital marketing strategies focus on measurable results. From search engine optimization to paid campaigns, we help you reach your audience effectively and efficiently.",
    icon: BarChart2,
    image: digitalImg,
  },
  "creative-branding": {
    title: "Creative & Branding",
    desc: "Build a strong, cohesive brand identity with unique visuals.",
    para: "We develop brand identities that resonate with your target audience. Through design, messaging, and strategy, your brand will stand out and leave a lasting impression.",
    icon: Layout,
    image: brandingImg,
  },
  campaigns: {
    title: "Campaigns",
    desc: "End-to-end campaign planning and execution for maximum impact.",
    para: "Our team plans and executes marketing campaigns that deliver measurable results. We combine strategy, creativity, and analytics to drive engagement and conversions.",
    icon: Target,
    image: campaignsImg,
  },
  "video-production": {
    title: "Video Production",
    desc: "Engaging videos that tell your brand story effectively.",
    para: "We produce high-quality videos to showcase your products or services. From scripting to post-production, our videos capture attention and drive engagement.",
    icon: Video,
    image: videoImg,
  },
};

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

export const testimonials = [
  "We create technology solutions that grow alongside your business, ensuring long-term scalability and adaptability.",
  "Our approach combines creativity and technical expertise to deliver systems that are both efficient and reliable.",
  "From concept to deployment, we focus on results-driven solutions that make a real impact.",
  "We embrace innovation and emerging technologies to keep your business ahead of the curve.",
];

export const footerMenu = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/" },
  { title: "Blog", href: "/" },
  { title: "Contact", href: "/" },
];

export const footerServices = [
  { title: "All Services", href: "/services" },
  { title: "Technology Solutions", href: "/services/technology-solutions" },
  { title: "Advertising & Marketing", href: "/" },
];

export const footerIcon = [FaLinkedin, FaGithub, FaInstagram, FaWhatsapp];

export const whyChooseUs = [
  {
    title: "Full-Service Approach",
    desc: "Software, design, cloud, and marketing under one roof for a seamless digital strategy.",
    icon: Globe,
  },
  {
    title: "Startup-Friendly",
    desc: "Affordable, scalable solutions tailored to help startups grow without limits.",
    icon: Rocket,
  },
  {
    title: "Global Outlook",
    desc: "We deliver international-level quality with performance-driven results.",
    icon: Users,
  },
  {
    title: "Passion for Impact",
    desc: "We don’t just aim for completion; we aim for transformation and long-term success.",
    icon: Zap,
  },
];

export const featuredServices = [
  {
    icon: FaCode,
    title: "Web Development",
    desc: "Custom websites and web applications",
    link: "/services/web-development",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Apps",
    desc: "iOS, Android, and cross-platform apps",
    link: "/services/mobile-app-development",
  },
  {
    icon: FaPaintBrush,
    title: "Creative & Branding",
    desc: "Logos, brand identity, and design assets",
    link: "/services/creative-branding",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    desc: "SEO, SEM, and social media campaigns",
    link: "/services/digital-marketing",
  },
];
export const features = [
  {
    title: "Scalable & Secure",
    icon: FaLock,
    desc: "We build systems designed to grow with your business, backed by strong security.",
  },
  {
    title: "Cutting-Edge Tech",
    icon: FaRocket,
    desc: "We leverage the latest technologies to ensure modern and future-ready solutions.",
  },
  {
    title: "User-Focused",
    icon: FaUsers,
    desc: "Our design-first approach ensures intuitive and engaging digital experiences.",
  },
  {
    title: "Data-Driven",
    icon: FaChartLine,
    desc: "We use insights and analytics to create solutions that deliver measurable results.",
  },
];

export const faqs = [
  {
    title: "How long does it take to build a custom website or app?",
    desc: "Timelines vary depending on complexity, but most projects take between 8–12 weeks from planning to launch.",
  },
  {
    title: "Do you provide post-launch support and maintenance?",
    desc: "Yes, we offer ongoing support, updates, and monitoring to ensure your product continues to perform reliably.",
  },
  {
    title: "Can you scale solutions as our business grows?",
    desc: "Absolutely. We build with scalability in mind, using modern technologies and cloud infrastructure that grow with your business.",
  },
  {
    title: "How do you ensure quality and security?",
    desc: "We follow best practices in code reviews, automated testing, and security audits to deliver safe, high-quality solutions.",
  },
];
