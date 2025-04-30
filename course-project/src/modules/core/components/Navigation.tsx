import React, { useState } from "react";
import { Search } from "~/core/components/Search";
import { markers } from "../i18n/markers";
import { t } from "i18next";
export const Navigation = () => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<div className="flex items-center justify-between pt-6">
			<div className="flex items-center">
				<img src="./LOGO.svg" alt="" className="max-w-[80px]" />
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
			<div className="text-sm">
				<a href="">{t(markers.explore)}</a>
				<a href="" className="button-primary">
					{t(markers.tale)}
				</a>
			</div>
		</div>
	);
};
