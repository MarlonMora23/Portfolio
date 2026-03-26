// English imports
import enHero from "@/i18n/multilingual_content/sections/hero/en.json";
import enAbout from "@/i18n/multilingual_content/sections/about/en.json";
import enProjects from "@/i18n/multilingual_content/sections/projects/en.json";
import enSkills from "@/i18n/multilingual_content/sections/skills/en.json";
import enEducation from "@/i18n/multilingual_content/sections/education/en.json";
import enContact from "@/i18n/multilingual_content/sections/contact/en.json";
import enFooter from "@/i18n/multilingual_content/sections/footer/en.json";
import enProjectModal from "@/i18n/multilingual_content/sections/project_modal/en.json";
import enCommon from "@/i18n/multilingual_content/sections/common/en.json";

// Spanish imports
import esHero from "@/i18n/multilingual_content/sections/hero/es.json";
import esAbout from "@/i18n/multilingual_content/sections/about/es.json";
import esProjects from "@/i18n/multilingual_content/sections/projects/es.json";
import esSkills from "@/i18n/multilingual_content/sections/skills/es.json";
import esEducation from "@/i18n/multilingual_content/sections/education/es.json";
import esContact from "@/i18n/multilingual_content/sections/contact/es.json";
import esFooter from "@/i18n/multilingual_content/sections/footer/es.json";
import esProjectModal from "@/i18n/multilingual_content/sections/project_modal/es.json";
import esCommon from "@/i18n/multilingual_content/sections/common/es.json";

const LANG = {
	ENGLISH: "en",
	SPANISH: "es",
};

// Merge all sections for each language
const englishContent = {
	...enCommon,
	...enHero,
	...enAbout,
	...enProjects,
	...enSkills,
	...enEducation,
	...enContact,
	...enFooter,
	PROJECT_MODAL: enProjectModal,
};

const spanishContent = {
	...esCommon,
	...esHero,
	...esAbout,
	...esProjects,
	...esSkills,
	...esEducation,
	...esContact,
	...esFooter,
	PROJECT_MODAL: esProjectModal,
};

export const getI18n = ({
	currentLocale = "es",
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.ENGLISH) return englishContent;
	return spanishContent;
};