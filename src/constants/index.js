import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Founder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software + Prompt Engineer",
    company_name: "Delilah - Startup",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2022 - Present",
    points: [
      "Devloping and maintaining deiliah.ai",
      "Working on Templates feature where users can have targeted essay help",
      "Handling OpenAI API calls for GPT-3 & GPT-4 implementation",
      "Part of growth and marketing teams",
    ],
  },
  {
    title: "Machine Learning Digital Pathology Reseracher",
    company_name: "Dartmouth Hitchcock Medical Center",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    title: "Kaggle Master",
    company_name: "Kaggle",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "I am one of the youngest Kaggle Dataset Masters in the world, ranking as high as 74th of ~80,000 PhD/industry professional users in 2022",
      "Attained 200,000+ dataset views & 30,000+ downloads over 16 datasets",
      'featured on Kaggle trending datasets page (top search result on Google for “Car Object Detection”)',
      "catalyzed over 100+ real world research project notebooks on topics such as Glaucoma, Vehicle Object Detection, COVID-19, etc",
    ],
  },
  {
    title: "Founder",
    company_name: "__",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "TBA-TBA",
    points: [
      "",
      "",
      "",
      "",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "____",
    name: "TBD",
    designation: "TBD",
    company: "TBD",
    image: "",
  },
  {
    testimonial:
      "____",
    name: "TBD",
    designation: "TBD",
    company: "TBD",
    image: "",
  },
  {
    testimonial:
      "____",
    name: "TBD",
    designation: "TBD",
    company: "TBD",
    image: "",
  },
];

const projects = [
  {
    name: "LymeLyte",
    description:
      "I developed a free and easy-to-use Lyme disease app called LymeLyte under the guidance of the Chief of the Lyme Studies Unit at the NIH, Dr. Adriana Marques. Our app runs a machine learning learning model, achieving an accuracy of 93%, and outperforms clinician visual diganosis specificity of 60%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "TBA",
    description:
      "__",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "TBA",
    description:
      "_",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
