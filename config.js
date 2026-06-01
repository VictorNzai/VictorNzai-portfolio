import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Victor",
    },
    social: {
        github: "VictorNzai",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Admobi — GPS-Verified Digital Advertising Network",
            description:
                "Jan 2026 – Present. A DOOH advertising platform for Nairobi, Mombasa, and Kisumu — placing verified ads on taxi tops and delivery bikes. Built campaign management workflows, dynamic content rendering, media upload, and reusable UI components. Set up GitHub Actions CI/CD in a Turborepo TypeScript monorepo.",
            image: "/projects/project-4.webp",
            technologies: ["Next.js", "TypeScript", "TailwindCSS", "Turborepo", "GitHub Actions", "Framer Motion"],
            github: null,
            demo: "https://admobihq.com/"
        },
        {
            id: 2,
            title: "FoodShare Nairobi — Food Donation Platform",
            description:
                "Apr–Aug 2025. Web platform connecting food donors with verified charitable institutions in Nairobi. Led architecture for Donor/Charity/Admin roles, two-stage verification, a feedback/rating system, and an admin dashboard. Implemented bcrypt auth, email verification via Nodemailer, and Docker deployment.",
            image: "/projects/project-1.webp",
            technologies: ["Node.js", "Express", "Docker", "Nodemailer", "PostgreSQL", "Postman"],
            github: "https://github.com/VictorNzai/FoodShare-Nairobi",
            demo: "https://foodsharenairobi.netlify.app/"
        },
        {
            id: 3,
            title: "CheapThrills — Travel Booking System",
            description:
                "Apr–Aug 2024. Team-built web app for booking budget-friendly travel packages. Focused on UX and integrated the MPESA Daraja API so travelers could search, select, and pay without leaving the platform.",
            image: "/projects/project-2.webp",
            technologies: ["React", "TailwindCSS", "MPESA Daraja API"],
            github: "https://github.com/VictorNzai/Software-Engineering-Project",
            demo: "https://cheapthrillsse.vercel.app/"
        },
        {
            id: 4,
            title: "Recipe Website - Restaurant Platform",
            description:
                "A restaurant platform featuring digital menus, elegant UI, smooth navigation, and a modern food-themed experience for customers.",
            image: "/projects/project-3.webp",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            github: "https://github.com/VictorNzai/Recipe-Website",
            demo: "https://culinaryhaven.vercel.app/"
        },
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Next.js 15", level: "Advanced", hot: true },
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Advanced" },
                { name: "Express.js", level: "Advanced", hot: true },
                { name: "MySQL", level: "Advanced" },
                { name: "PHP", level: "Intermediate" },
                { name: "Supabase", level: "Intermediate" },
                { name: "Firebase", level: "Intermediate" },
                { name: "REST API Design", level: "Advanced" }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" },
                // { name: "Photoshop", level: "Intermediate" },
                { name: "Git", level: "Advanced" },
                { name: "Figma", level: "Intermediate" }
            ]
        },
        
    {
        title: "Cloud & DevOps",
        icon: <HiBriefcase />,
        description: "Deployment, hosting & scaling",
        bgClass: "bg-purple-500/10",
        iconClass: "text-purple-500",
        skills: [
            { name: "AWS", level: "Intermediate", hot: true },
            { name: "Docker", level: "Intermediate" },
            { name: "Vercel", level: "Expert" },
            { name: "Cloudflare", level: "Intermediate" },
            { name: "CI/CD", level: "Advanced" },
            { name: "GitHub Actions", level: "Intermediate" }
        ]
    },
    ],
    experiences: [
        {
            position: "Frontend Engineering Lead",
            company: "Syntahub",
            period: "January 2026 - Present",
            location: "Nairobi, Kenya (Remote)",
            description:
                "Owns the frontend across Syntahub's product suite — a fleet management system and Sazara, a multi-tenant POS platform. Builds the interfaces operators actually rely on daily across logistics and retail.",
            responsibilities: [
                "Architected reusable component systems for Sazara's multi-tenant POS, supporting dashboards and workflows across logistics and retail verticals",
                "Integrated real-time GPS and map-based tracking into fleet modules, giving operators live vehicle visibility",
                "Partnered with backend engineers to design and consume REST APIs, translating complex data models into intuitive UIs",
                "Maintained code quality across multiple active product branches via PR reviews and cross-browser debugging"
            ],
            technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "REST APIs"],
            links: [
                { label: "LinkedIn", href: "https://www.linkedin.com/company/synthahub/" },
                { label: "Sazara", href: "https://sazara.co.ke/" },
                { label: "Sazara POS", href: "https://pos.sazara.co.ke/" },
            ],
        },
        {
            position: "Frontend Engineering Lead",
            company: "Foundly Inc",
            period: "June 2025 - Present",
            location: "New York, United States (Remote)",
            description:
                "Building the trust infrastructure for a lost-and-found platform — from item reporting and claim flows to ML-powered match confidence scores.",
            responsibilities: [
                "Translated design prototypes into modular, accessible, production-grade interfaces using Next.js, TypeScript, and ShadCN/UI",
                "Built core platform features end-to-end: item submission, map views, match scores, and claim verification portals",
                "Integrated AI/ML outputs from backend specialists into seamless user-facing experiences",
                "Led frontend development of customer-facing and institutional dashboards with TailwindCSS and Supabase"
            ],
            technologies: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN/UI", "Firebase", "Supabase", "Node.js"],
            links: [
                { label: "LinkedIn", href: "https://www.linkedin.com/company/foundlyhq/" },
                { label: "Foundly", href: "https://foundlyhq.com/" },
            ],
        },
        {
            position: "Software Engineering Extern",
            company: "Jackal Tech Ltd",
            period: "March 2025 - August 2025",
            location: "New York, United States (Remote)",
            description:
                "Led a 4–5 person engineering team building JackalCare — a digital health platform serving hospitals and patients in Rwanda.",
            responsibilities: [
                "Architected a smart medical card system handling real-time patient records, insurance verification, and AI-powered health recommendations",
                "Ran agile ceremonies: sprint planning, deployments, API design reviews, and cross-team coordination with leadership",
                "Delivered full-stack features using React, TailwindCSS, Node.js, and MongoDB with secure auth and payment integration",
                "Enforced code quality through structured reviews and hands-on mentorship of junior engineers"
            ],
            technologies: ["React", "TailwindCSS", "Node.js", "MongoDB", "Agile/Scrum"]
        },
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@VictorNzai",
            link: `https://github.com/VictorNzai`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "victormusembi5@gmail.com",
            link: "mailto:victormusembi5@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Nairobi, Kenya",
            link: null
        }
    ]
}