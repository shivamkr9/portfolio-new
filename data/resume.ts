import {
  Briefcase,
  Cloud,
  Code,
  Code2,
  Database,
  Layers,
  Server,
  Zap,
} from "lucide-react"

import { Icons } from "@/components/icons"

export const BLUR_FADE_DELAY = 0.04

const message =
  "Hi%20Shivam!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20my%20project.%20Let's%20discuss%20how%20you%20can%20help!%0A%0ABest%20regards"

const contact = "+919508735800"

export const DATA = {
  name: "Shivam.",
  fullName: "Shivam Kumar",
  whatshap: `https://wa.me/${contact}?text=${message}`,
  role: "Full Stack Developer",
  about:
    "Experienced Full Stack MERN Developer with **~3.3 years** of hands-on experience, working professionally since late **2022**, focused on building scalable, secure, and user-centric web applications using React, Next.js, Node.js, Express, MongoDB, and AWS.",
  menu: [
    { name: "Home", href: "/" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ],
  skills: [
    {
      title: "Frontend",
      icon: Code,
      gradient:
        "from-emerald-300/20 via-emerald-200/10 to-background border-emerald-300/40",
      skill: [
        {
          name: "JavaScript (ES6+)",
          icon: Icons.js,
        },
        {
          name: "TypeScript",
          icon: Icons.ts,
        },
        {
          name: "React.js",
          icon: Icons.react,
        },
        {
          name: "Next.js",
          icon: Icons.nextjs,
        },
        {
          name: "HTML5",
          icon: Icons.html,
        },
        {
          name: "CSS3",
          icon: Icons.css,
        },
        {
          name: "Tailwind CSS",
          icon: Icons.tailwind,
        },
        {
          name: "React Query",
          icon: Icons.rq,
        },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      gradient:
        "from-amber-400/20 via-amber-200/10 to-background border-amber-400/40",
      skill: [
        {
          name: "Node.js",
          icon: Icons.node,
        },
        {
          name: "Express.js",
          icon: Icons.express,
        },
        {
          name: "Next.js",
          icon: Icons.nextjs,
        },
        {
          name: "MongoDB",
          icon: Icons.mongodb,
        },
        {
          name: "PostgreSQL",
          icon: Icons.postgresql,
        },
        {
          name: "Redis",
          icon: Icons.redis,
        },
        {
          name: "Socket.IO",
          icon: Icons.socket,
        },
      ],
    },
    {
      title: "Databases",
      icon: Server,
      gradient:
        "from-purple-400/20 via-purple-300/10 to-background border-purple-400/40",
      skill: [
        {
          name: "MongoDB",
          icon: Icons.mongodb,
        },
        {
          name: "PostgreSQL",
          icon: Icons.postgresql,
        },
      ],
    },
    {
      title: "Enterprise And Cloud",
      icon: Cloud,
      gradient:
        "from-blue-400/20 via-blue-400/5 to-background border-blue-400/40",
      skill: [
        {
          name: "AWS Cloud",
          icon: Icons.aws,
        },
        {
          name: "Git",
          icon: Icons.git,
        },
        {
          name: "Docker",
          icon: Icons.docker,
        },
        {
          name: "Redis",
          icon: Icons.redis,
        },
        {
          name: "Kafka",
          icon: Icons.kafka,
        },
        {
          name: "Rabbitmq",
          icon: Icons.rabbitmq,
        },
        {
          name: "Redis Streams",
          icon: Icons.redis,
        },
      ],
    },
  ],
  features: [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "End-to-end web application development using React, Next.js, Node.js, Express, and MongoDB, delivering scalable, secure, and high-performance solutions tailored to real-world business needs.",
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      iconColor: "text-blue-500",
    },
    {
      icon: Server,
      title: "Robust Backend Architecture",
      description:
        "Designing reliable and scalable server-side systems using Node.js and Express, including REST APIs, authentication, authorization, and efficient data handling.",
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      iconColor: "text-emerald-500",
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      description:
        "Deploying, monitoring, and managing applications on AWS with proper environment configuration, CI/CD pipelines, and scalable cloud infrastructure.",
      gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
      iconColor: "text-cyan-500",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description:
        "Designing modular, maintainable, and scalable application architectures that support future growth, feature expansion, and long-term project stability.",
      gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
      iconColor: "text-purple-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Improving application speed, load times, and runtime efficiency through code optimization, caching strategies, and best development practices.",
      gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      iconColor: "text-amber-500",
    },
    {
      icon: Briefcase,
      title: "Real-World Experience",
      description:
        "Hands-on experience delivering production-ready applications for real clients, live environments, and real business challenges.",
      gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
      iconColor: "text-rose-500",
    },
  ],
  projects: [
    {
      name: "Sri Chaitanya SCORE",
      description:
        "A national-level scholarship and talent search exam for students in Grades 3-12, offering scholarships up to 100%, cash rewards, mentorship, and educational trips, helping students excel in competitive exams.",
      techStack: ["React", "Next.js", "Node.js", "Express", "PostgreSQL"],
      link: "https://srichaitanyascore.com",
      period: "Jun 2025 – Jan 2026",
      duration: "8 months",
      image: "/projects/srichaitanyascore.png",
      gradient:
        "from-emerald-300/20 via-emerald-200/10 to-background border-emerald-300/40",
    },
    {
      name: "FlowerAura",
      description:
        "An online gifting platform offering a wide range of products including fresh flowers, cakes, personalized gifts, plants, and hampers with same-day and midnight delivery across 600+ cities in India.",
      techStack: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      link: "https://www.floweraura.com",
      period: "Oct 2024 – May 2025",
      duration: "8 months",
      image: "/projects/floweraura.png",
      gradient:
        "from-purple-400/20 via-purple-300/10 to-background border-purple-400/40",
    },
    {
      name: "Amoeba Productions",
      description:
        "A Patna-based event management and media production company offering comprehensive services including event planning, corporate events, digital marketing, advertising, and brand promotions across multiple cities.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      link: "https://www.amoebaproductions.in",
      period: "Mar 2024 – Sep 2024",
      duration: "7 months",
      image: "/projects/amoebaproductions.png",
      gradient:
        "from-cyan-400/20 via-cyan-200/10 to-background border-cyan-400/40",
    },
    {
      name: "Livspace",
      description:
        "Home interior and renovation platform providing end-to-end interior design solutions with technology-driven design tools, professional designers, and curated vendors delivering personalized interiors across India.",
      techStack: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind CSS"],
      link: "https://www.livspace.com",
      period: "Jul 2023 – Feb 2024",
      duration: "8 months",
      image: "/projects/livspace.png",
      gradient: "from-primary/20 via-primary/5 to-background border-primary/40",
    },
    {
      name: "SOS Party",
      description:
        "A leading event management platform in India specializing in corporate and team-building experiences, offering virtual, in-person, hybrid events with over 100 unique professionally curated activities.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Next.js"],
      link: "https://sosparty.io",
      period: "Dec 2022 – Jun 2023",
      duration: "7 months",
      image: "/projects/sosparty.png",
      gradient:
        "from-blue-400/20 via-blue-400/5 to-background border-blue-400/40",
    },
    {
      name: "Indraprastha Public School",
      description:
        "A progressive educational institution offering a complete curriculum across academics, sports, arts, and personality development, nurturing confident, well-rounded individuals prepared for future challenges.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://indraprasthapublicschool.com",
      period: "Oct 2022 – Nov 2022",
      duration: "2 months",
      image: "/projects/indraprasthapublicschool.png",
      gradient:
        "from-amber-400/20 via-amber-200/10 to-background border-amber-400/40",
    },
  ],
} as const
