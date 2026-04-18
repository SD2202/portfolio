import carestep from "../assets/images/projects/carestep.png";
import expense1 from "../assets/images/projects/expense1.png";
import expense2 from "../assets/images/projects/expense2.png";
import expense3 from "../assets/images/projects/expense3.png";
import insight1 from "../assets/images/projects/InsightForge1.png";
import insight2 from "../assets/images/projects/InsightForge2.png";
import insight3 from "../assets/images/projects/InsightForge3.png";
import insight4 from "../assets/images/projects/InsightForge4.png";
export const projects = [
  {
    title: "CareStep",
    description: "Healthcare platform for booking medical services with role-based dashboards.",
    image: carestep,
    gallery: [carestep],
    tech: ["HTML", "JS", "Tailwind", "Python", "MySQL"],
    live: "https://carestep-healthcare.netlify.app/",
    github: "https://github.com/SD2202/Carestep",
  },
  {
    title: "Expense Tracker",
    description: "MERN-based financial tracker with analytics and dashboards.",
    image: expense1,
    gallery: [expense1, expense2, expense3],
    tech: ["MERN", "JWT", "Chart.js"],
    live: "https://expensetracker221.netlify.app/",
    github: "https://github.com/SD2202",
  },
  {
    title: "InsightForge",
    description: "AI-powered analytics dashboard with real-time insights. Currently under development, deployment will be soon after some changes.",
    image: insight1,
    gallery: [insight1, insight2, insight3, insight4],
    tech: ["React", "Analytics", "AI", "Python"],
    live: "",
    github: "",
  },
];