export const getSkillGroupsSimple = (i18n: any) => [
  {
    label: i18n.SKILLS.GROUP_ML,
    skills: ["Python", "TensorFlow", "Keras", "pandas", "NumPy", "scikit-learn", "Jupyter"],
  },
  {
    label: i18n.SKILLS.GROUP_BACKEND,
    skills: ["Flask", "SQLAlchemy", "PostgreSQL", "REST APIs"],
  },
  {
    label: i18n.SKILLS.GROUP_FRONTEND,
    skills: ["React", "Angular", "TailwindCSS", "TypeScript", "Vite", "Astro", "JavaScript", "HTML/CSS"],
  },
  {
    label: i18n.SKILLS.GROUP_DEVOPS,
    skills: ["Git", "Github", "Docker", "Linux"],
  },
];

export const getSkillGroupsWithIcons = (i18n: any) => [
  {
    label: i18n.SKILLS.GROUP_ML,
    emoji: "🤖",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "TensorFlow", icon: "logos:tensorflow" },
      { name: "Keras", icon: "simple-icons:keras" },
      { name: "pandas", icon: "simple-icons:pandas" },
      { name: "NumPy", icon: "simple-icons:numpy" },
      { name: "scikit-learn", icon: "simple-icons:scikitlearn" },
      { name: "Jupyter", icon: "logos:jupyter" },
      { name: "Google Colab", icon: "mdi:notebook" },
    ],
  },
  {
    label: i18n.SKILLS.GROUP_BACKEND,
    emoji: "⚙️",
    skills: [
      { name: "Flask", icon: "simple-icons:flask" },
      { name: "SQLAlchemy", icon: "simple-icons:sqlalchemy" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "REST APIs", icon: "mdi:api" },
      { name: "Java", icon: "logos:java" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
    ],
  },
  {
    label: i18n.SKILLS.GROUP_FRONTEND,
    emoji: "🎨",
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Vite", icon: "logos:vitejs" },
      { name: "Astro", icon: "logos:astro-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
    ],
  },
  {
    label: i18n.SKILLS.GROUP_DEVOPS,
    emoji: "🚀",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "mdi:github" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
    ],
  },
];
