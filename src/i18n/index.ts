import english from "@/i18n/multilengual_content/en.json";
import spanish from "@/i18n/multilengual_content/es.json";

const LANG = {
    ENGLISH : "en",
    SPANISH : "es"
};

export const getI18n = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	return spanish;
};