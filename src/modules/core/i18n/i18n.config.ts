import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			search: "Search by Websites",
			explore: "Explore",
			tale: "My Fairy Tale",
			all: "All",
			genreLabel: "Genre",
			genre: {
				avontuur: "Adventure",
				fantasie: "Fantasy",
				horror: "Horror",
				magie: "Magic",
				mythologie: "Mythology",
				dierenverhaal: "Animal Story",
				romantiek: "Romance",
			},
		},
	},
	nl: {
		translation: {
			search: "Zoek Websites",
			explore: "Ontdek",
			tale: "Mijn Sprookje",
			all: "Alles",
			genreLabel: "Genre",
			genre: {
				avontuur: "Avontuur",
				fantasie: "Fantasie",
				horror: "Horror",
				magie: "Magie",
				mythologie: "Mythologie",
				dierenverhaal: "Dierenverhaal",
				romantiek: "Romantiek",
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
