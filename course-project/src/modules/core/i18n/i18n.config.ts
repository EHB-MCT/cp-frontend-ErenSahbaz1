import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			intro: "Hello, Don't forget to Recycle!",
		},
	},
	nl: {
		translation: {
			intro: "Hallo, vergeet niet te recyclen!",
		},
	},
};

const lng = "en";

i18n.use(initReactI18next).init({
	resources,
	lng,
	debug: true,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
