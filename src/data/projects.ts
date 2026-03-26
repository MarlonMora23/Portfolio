import nueroscreen_img from "public/assets/projects/neuroscreen/neuroscreen.webp";
import neuroscreen_gallery1 from "public/assets/projects/neuroscreen/neuroscreen_gallery1.webp";
import leetcode_clone_img from "public/assets/projects/leetcode_clone/leetcode_clone.avif";
import leetcode_clone_gallery1 from "public/assets/projects/leetcode_clone/leetcode_clone_gallery1.webp";
import radio_app_img from "public/assets/projects/radio_app_img.webp";
import pokedex_img from "public/assets/projects/pokedex_img.webp";
import calinema_app_img from "public/assets/projects/calinema_app.webp";
import calinema_api_img from "public/assets/projects/calinema_api.avif";
import democracia_elite_img from "public/assets/projects/democracia_elite.avif";
import menu_usb_img from "public/assets/projects/menu_usb.avif";
import xrays_img from "public/assets/projects/xrays.avif";

export const projects = [
  // ── FEATURED ────────────────────────────────────────────────────────────
  {
    id: "neuroscreen",
    featured: true,
    image: nueroscreen_img,
    imageAlt: "NeuroScreen-A dashboard",
    status: "in-progress",
    year: "2025 – 2026",
    stack: {
      Frontend: ["React 18", "TypeScript", "Vite", "TailwindCSS", "React Query", "Framer Motion"],
      Backend: ["Flask", "SQLAlchemy", "PostgreSQL", "Celery"],
      ML: ["TensorFlow", "Keras"],
      Infra: ["JWT", "CORS"],
    },
    links: {
      live: "https://lidis.usbcali.edu.co/neuro/",
      code: "https://github.com/MarlonMora23/NeuroScreen-A",
    },
    screenshots: [neuroscreen_gallery1],
  },
  {
    id: "leetcode-clone",
    featured: true,
    image: leetcode_clone_img,
    imageAlt: "LeetCode Clone interface",
    status: "completed",
    year: "2024 – May 2025",
    stack: {
      Backend: ["Flask", "Python"],
      Frontend: ["HTML", "CSS", "JavaScript"],
      Auth: ["Flask-Login"],
    },
    links: {
      live: null,
      code: "https://github.com/MarlonMora23/LeetCode_Clon",
    },
    screenshots: [leetcode_clone_gallery1],
  },

  // ── SECONDARY ───────────────────────────────────────────────────────────
  {
    id: "calinema",
    featured: false,
    image: calinema_app_img,
    imageAlt: "CaliNema app",
    status: "completed",
    year: "2023",
    stack: { Frontend: ["Astro", "JavaScript", "HTML", "CSS"] },
    links: {
      live: "https://calinema.onrender.com/",
      code: "https://github.com/MarlonMora23/CaliNema",
    },
    screenshots: [],
  },
  {
    id: "calinema-api",
    featured: false,
    image: calinema_api_img,
    imageAlt: "CaliNema API",
    status: "completed",
    year: "2023",
    stack: { Backend: ["Django REST Framework", "Python", "Web Scraping"] },
    links: {
      live: null,
      code: "https://github.com/MarlonMora23/API_Calinema",
    },
    screenshots: [],
  },
  {
    id: "radioapp",
    featured: false,
    image: radio_app_img,
    imageAlt: "RadioApp",
    status: "completed",
    year: "2024",
    stack: {
      Frontend: ["Vite", "React", "JavaScript", "HTML", "CSS"],
      API: ["Radio Browser API"],
    },
    links: {
      live: "https://radio-app-ochre.vercel.app/",
      code: "https://github.com/MarlonMora23/RadioApp",
    },
    screenshots: [],
  },
  {
    id: "pokedex",
    featured: false,
    image: pokedex_img,
    imageAlt: "Pokédex 3D",
    status: "completed",
    year: "2024",
    stack: {
      Frontend: ["React", "Vite", "Three.js", "React Three Fiber"],
      "3D": ["Three.js", "Framer Motion"],
    },
    links: {
      live: null,
      code: "https://github.com/MarlonMora23/Pokedex_3D",
    },
    screenshots: [],
  },
  {
    id: "menuusb",
    featured: false,
    image: menu_usb_img,
    imageAlt: "MenuUSB",
    status: "completed",
    year: "2023",
    stack: { Frontend: ["Django", "Python", "HTML", "CSS", "JavaScript"] },
    links: {
      live: null,
      code: "https://github.com/MarlonMora23/MenuUsb",
    },
    screenshots: [],
  },
  {
    id: "democracia-elite",
    featured: false,
    image: democracia_elite_img,
    imageAlt: "Democracia Elite",
    status: "completed",
    year: "2023",
    stack: { Frontend: ["HTML", "CSS", "JavaScript"] },
    links: {
      live: "https://marlonmora23.github.io/",
      code: "https://github.com/MarlonMora23/marlonmora23.github.io",
    },
    screenshots: [],
  },
  {
    id: "xrays",
    featured: false,
    image: xrays_img,
    imageAlt: "X-Ray Classification",
    status: "completed",
    year: "2024",
    stack: {
      "Machine Learning": ["Python", "TensorFlow", "Keras", "OpenCV"],
      Models: ["VGG16", "ResNet50", "CNN"],
    },
    links: {
      live: null,
      code: "https://github.com/MarlonMora23/ml-medical-xrays",
    },
    screenshots: [],
  },
];