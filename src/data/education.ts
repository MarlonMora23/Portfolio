export const getEducationData = (i18n: any) => [
  {
    degree: i18n.EDUCATION.DEGREE_SYSTEMS,
    institution: "Universidad de San Buenaventura Cali",
    period: "2022 – " + i18n.EDUCATION.PRESENT,
    status: "in-progress",
    emoji: "💻",
  },
  {
    degree: i18n.EDUCATION.DEGREE_BUSINESS,
    institution: "Universidad de San Buenaventura Cali",
    period: "2021 – " + i18n.EDUCATION.PRESENT,
    status: "in-progress",
    emoji: "📊",
  },
];

export const getCertificationsData = (i18n: any) => [
  {
    name: "C2 Proficient — EF SET",
    issuer: "EF Standard English Test",
    category: i18n.EDUCATION.CERT_CAT_LANGUAGE,
    year: "2024",
    color: "#004aad",
    emoji: "🌐",
  },
  {
    name: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    category: i18n.EDUCATION.CERT_CAT_METHODOLOGY,
    year: "2024",
    color: "#0f766e",
    emoji: "🔄",
  },
  {
    name: "Technical Introduction to Cybersecurity 3.0",
    issuer: "Fortinet Training Institute",
    category: i18n.EDUCATION.CERT_CAT_SECURITY,
    year: "2024",
    color: "#b45309",
    emoji: "🔒",
  },
];

export const getAchievementsData = (i18n: any) => [
  {
    emoji: "🏆",
    title: i18n.EDUCATION.ACH_SCHOLARSHIP_TITLE,
    desc: i18n.EDUCATION.ACH_SCHOLARSHIP_DESC,
    year: "2026-1",
    weight: "featured",
  },
  {
    emoji: "📄",
    title: i18n.EDUCATION.ACH_PAPER_TITLE,
    desc: i18n.EDUCATION.ACH_PAPER_DESC,
    year: i18n.EDUCATION.IN_PROGRESS,
    weight: "featured",
  },
  {
    emoji: "🎤",
    title: i18n.EDUCATION.ACH_SPEAKER_TITLE,
    desc: i18n.EDUCATION.ACH_SPEAKER_DESC,
    year: "2025",
    weight: "normal",
  },
  {
    emoji: "⚡",
    title: i18n.EDUCATION.ACH_IEEE_TITLE,
    desc: i18n.EDUCATION.ACH_IEEE_DESC,
    year: "2024 – " + i18n.EDUCATION.PRESENT,
    weight: "normal",
  },
  {
    emoji: "🚀",
    title: i18n.EDUCATION.ACH_HACKATHON_TITLE,
    desc: i18n.EDUCATION.ACH_HACKATHON_DESC,
    year: "2023 – " + i18n.EDUCATION.PRESENT,
    weight: "normal",
  },
];
