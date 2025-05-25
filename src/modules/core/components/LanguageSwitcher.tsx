import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const [activeLang, setActiveLang] = useState(i18n.language);

	function setLanguage(language: string) {
		i18n.changeLanguage(language);
		setActiveLang(language);
	}

	return (
		<div className="flex gap-2 my-4">
			<button
				onClick={() => setLanguage("en")}
				className={`flex items-center gap-2 rounded-full py-2 px-5 text-xs font-semibold shadow-sm transition
	${
		activeLang === "en"
			? "bg-zinc-800 text-white"
			: "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
	}`}
				aria-pressed={activeLang === "en"}
			>
				<span role="img" aria-label="English">
					🇬🇧
				</span>{" "}
				English
			</button>
			<button
				onClick={() => setLanguage("nl")}
				className={`flex items-center gap-2 rounded-full py-2 px-5 text-xs font-semibold shadow-sm transition
	${
		activeLang === "nl"
			? "bg-zinc-800 text-white"
			: "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
	}`}
				aria-pressed={activeLang === "nl"}
			>
				<span role="img" aria-label="Nederlands">
					🇳🇱
				</span>{" "}
				Nederlands
			</button>
		</div>
	);
};

export default LanguageSwitcher;
