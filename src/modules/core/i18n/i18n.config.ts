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
			makingOf: {
				back: "Back to Home",
				projectNotFound: "Project not found",
				posted: "Posted – 6 May 2025",
				description: "Description",
				seeMore: "See what the FairyTale looks like",
				visitSite: "Visit Site",
				process: "Process",
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
			makingOf: {
				back: "Terug naar Home",
				projectNotFound: "Project niet gevonden",
				posted: "Geplaatst – 6 mei 2025",
				description: "Beschrijving",
				seeMore: "Bekijk hoe het sprookje eruitziet",
				visitSite: "Bezoek Site",
				process: "Proces",
			},
		},
	},
};

// rest of the file remains the same

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
