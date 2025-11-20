import ECommerceLogo from "../assets/images/ecommercelogo.webp";
import ResultPortalLogo from "../assets/images/resultlogo.png";
import JavaScriptProjectsLogo from "../assets/images/javascriptprojectlogo.jpg";
import WebProjectLogo from "../assets/images/webprojectlogo.jpg";
import AICareerGuruLogo from "../assets/images/AICareerGuruLogo.jpg";
import BitLinkLogo from "../assets/images/BitLinkLogo.jpg";
const data = [
  {
    name: "AI Career Guru",
    type: "WebApp",
    url: "https://guideaiguru.vercel.app/",
    github: "https://github.com/VikasKoladiya/Ai-Career-Guru",
    image: AICareerGuruLogo,
    slug: "ai-career-guru",
    description:
      "An AI-Powered Guidance Platform that delivers interactive advice and intelligent support, facilitating seamless decision-making through conversational insights and data-driven recommendations.",
    tech: ["Next Js", "Node Js", "Express Js", "PostgreSQL", "OpenAI API"],
  },
  {
    name: "E Commerce App",
    type: "WebApp",
    url: "https://e-commerce-app-pwmz.vercel.app",
    github: "https://github.com/VikasKoladiya/E-Commerce-App",
    image: ECommerceLogo,
    slug: "e-commerce-app",
    description:
      "An E-Commerce Website is a digital platform for buying and selling products online. It provides a seamless shopping experience with user-friendly navigation and secure transactions.",
    tech: ["React Js", "Node Js", "Express Js", "Stripe", "MongoDB"],
  },
  {
    name: "Student Result Portal",
    type: "WebApp",
    url: "https://github.com/VikasKoladiya/Result-Portal",
    github: "https://github.com/VikasKoladiya/Result-Portal",
    image: ResultPortalLogo,
    slug: "student-result-portal",
    description:
      "The Student Result Portal is a web-based platform that allows students to check their academic results easily. It provides a secure and organized way to access, track, and manage performance records. ",
    tech: ["HTML", "CSS", "PHP", "MySql"],
  },
  {
    name: "Bit Link",
    type: "WebApp",
    url: "https://bitlink-smartlink.vercel.app/",
    github: "https://github.com/VikasKoladiya/BitLink",
    image: BitLinkLogo,
    slug: "bit-link",
    description:
      "A smart link-management platform that lets users create, customize, and track short links, offering an easy dashboard with organized link control and quick performance analytics.",
    tech: ["React Js", "Node Js", "Express Js", "MongoDB"],
  },
  {
    name: "JavaScript Projects",
    type: "WebApp",
    url: "https://github.com/VikasKoladiya/Javascript-Project",
    github: "https://github.com/VikasKoladiya/Javascript-Project",
    image: JavaScriptProjectsLogo,
    slug: "javascript-projects",
    description:
      "A JavaScript Projects Repository showcasing various interactive and functional web applications built using JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Web Projects",
    type: "WebApp",
    url: "https://github.com/VikasKoladiya/Web-Projects",
    github: "https://github.com/VikasKoladiya/Web-Projects",
    image: WebProjectLogo,
    slug: "web-projects",
    description:
      "A Web Projects Repository featuring a collection of dynamic and responsive websites built using modern web technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export function getData() {
  return data;
}
