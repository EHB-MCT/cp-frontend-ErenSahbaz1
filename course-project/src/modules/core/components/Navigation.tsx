import React, { useState } from "react";
import { Search } from "~/core/components/Search";
export const Navigation = () => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<div className="flex items-center justify-between pt-6">
			<div className="flex items-center">
				<img src="./LOGO.svg" alt="" className="max-w-[80px]" />
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
			<div className="text-sm">
				<a href="">Explore</a>
				<a href="" className="button-primary">
					My Fairy Tale
				</a>
			</div>
		</div>
	);
};
