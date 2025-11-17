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
            title: "FoodShare-Nairobi - Food Donation Platform",
            description: "A full-stack web platform connecting food donors with charitable organizations to reduce waste and fight hunger in Kenya.",
            image: "/projects/project-1.webp",
            technologies: ["HTML", "CSS", "JavaScript", "Express", "Node.js", "MySQL"],
            github: "https://github.com/VictorNzai/FoodShare-Nairobi",
            demo: "https://foodsharenairobi.netlify.app/"
        },
        {
            id: 2,
            title: "CheapThrills – Budget Travel App",
            description:
              "A modern travel platform that helps users discover and book affordable travel experiences with a clean UI, responsive design, and seamless browsing.",
            image: "/projects/project-2.webp", 
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Daraja API"],
            github: "https://github.com/VictorNzai/Software-Engineering-Project", 
            demo: "https://cheapthrillsse.vercel.app/"
          },
          {
            id: 3,
            title: "Recipe Website - Restaurant Platform",
            description:
              "A beautiful restaurant platform featuring digital menus, elegant UI, smooth navigation, and a modern food-themed experience for customers.",
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
            company: "Foundly Inc",
            period: "2025 - Present",
            location: "New York, United States (Remote)",
            description: "Leading the development of customer-facing and institutional dashboards for a lost-and-found platform focused on building infrastructure for trust. Driving frontend architecture, performance optimization, and seamless integration with machine learning services.",
            responsibilities: [
                "Leading development of modular, responsive dashboards using React.js and TailwindCSS",
                "Translating design prototypes into production-grade UI with a focus on accessibility and speed",
                "Building interactive features including item submissions, map views, match confidence scoring, and claim verification flows",
                "Collaborating with backend and ML teams to integrate APIs and AI outputs smoothly",
                "Implementing modern frontend architecture using Next.js, TypeScript, and ShadCN/UI"
            ],
            technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "ShadCN/UI", "JavaScript"]
        },
        {
            position: "Software Engineering Extern",
            company: "Jackal Tech Ltd",
            period: "March 2025 - August 2025",
            location: "New York, United States (Remote)",
            description: "Contributed to the development of JackalCare, a digital health platform serving hospitals and patients across Rwanda. Designed and built full-stack solutions that improved medical data access, insurance verification, and AI-powered health recommendations.",
            responsibilities: [
                "Led cross-functional teams of 4–5 engineers through sprint planning and code reviews",
                "Architected and built smart medical card features enabling real-time patient record access",
                "Implemented secure authentication, integrated payments, and RESTful APIs",
                "Built React- and Node-based systems with MongoDB backend architecture",
                "Maintained high code-quality standards and mentored junior developers"
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"]
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