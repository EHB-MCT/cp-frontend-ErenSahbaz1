import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			search: "Search by Websites",
			explore: "Explore",
			tale: "My Fairy Tale",
			all: "All",
			genreLabel: "Genre", // Add this key
			genre: {
				adventure: "Adventure",
				animal: "Animal",
			},
		},
	},
	nl: {
		translation: {
			search: "Zoek Websites",
			explore: "Ontdek",
			tale: "Mijn Sprookje",
			all: "Alles",
			genreLabel: "Genre", // Add this key
			genre: {
				adventure: "Avontuur",
				animal: "Dier",
			},
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
