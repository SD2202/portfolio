import carestep from "../assets/images/projects/carestep.png";
import expense1 from "../assets/images/projects/expense1.png";
import expense2 from "../assets/images/projects/expense2.png";
import expense3 from "../assets/images/projects/expense3.png";
import insight1 from "../assets/images/projects/InsightForge1.png";
import insight2 from "../assets/images/projects/InsightForge2.png";
import insight3 from "../assets/images/projects/InsightForge3.png";
import insight4 from "../assets/images/projects/InsightForge4.png";
import scout1 from "../assets/images/projects/ScoutFlow1.png";
import scout2 from "../assets/images/projects/ScoutFlow2.png";
import scout3 from "../assets/images/projects/ScoutFlow3.png";
import scout4 from "../assets/images/projects/ScoutFlow4.png";
import scout5 from "../assets/images/projects/ScoutFlow5.png";
import scout6 from "../assets/images/projects/ScoutFlow6.png";
export const projects = [
  {
  title: "ScoutFlow AI",
  description:
    "AI-powered recruitment platform that parses job descriptions and matches candidates using intelligent automation workflows.",
  image: scout1,
  gallery: [scout1, scout2, scout3,scout4,scout5,scout6],
  tech: ["React", "FastAPI", "AI", "NVIDIA NIM", "MongoDB"],
  live: "https://scout-flow-frontend.vercel.app/",
  github: "https://github.com/SD2202/Deccan_AI_Hackathon",
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
    title: "CareStep",
    description: "Healthcare platform for booking medical services with role-based dashboards.",
    image: carestep,
    gallery: [carestep],
    tech: ["HTML", "JS", "Tailwind", "Python", "MySQL"],
    live: "https://carestep-healthcare.netlify.app/",
    github: "https://github.com/SD2202/Carestep",
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
