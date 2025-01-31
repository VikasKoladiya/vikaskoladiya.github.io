import ECommerceLogo from "../assets/images/ecommercelogo.webp";
import ResultPortalLogo from "../assets/images/resultlogo.png";
import JavaScriptProjectsLogo from "../assets/images/javascriptprojectlogo.jpg";
import WebProjectLogo from "../assets/images/webprojectlogo.jpg";
const data = [
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
    name: "JavaScript Projects",
    type: "WebApp",
    url: "https://github.com/VikasKoladiya/Javascript-Project",
    github: "https://github.com/VikasKoladiya/Javascript-Project",
    image: JavaScriptProjectsLogo,
    slug: "javascript-projects",
    description:
      "A JavaScript Projects Repository showcasing various interactive and functional web applications built using JavaScript.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
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
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];

export function getData() {
  return data;
}