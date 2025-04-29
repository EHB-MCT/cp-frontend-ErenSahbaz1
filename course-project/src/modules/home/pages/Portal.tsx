import React from "react";
import { markers } from "~/core/i18n/markers";
import { Trans, useTranslation } from "react-i18next";
import { Navigation } from "~/core/components/Navigation";

const Portal = () => {
	const { i18n } = useTranslation();
	function setLanguage(language: string) {
		i18n.changeLanguage(language);
	}
	return (
		<div className="wrapper">
			<Navigation />
			<Trans>{markers.intro}</Trans>
			<button
				onClick={() => setLanguage("en")}
				className=" bg-emerald-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold "
			>
				English
			</button>
			<button
				onClick={() => setLanguage("nl")}
				className=" bg-emerald-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold ml-2"
			>
				Nederlands
			</button>
		</div>
	);
};

export default Portal;
