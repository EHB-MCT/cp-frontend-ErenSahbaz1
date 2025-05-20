import { useQuery } from "@tanstack/react-query";
import { courseProjectsService } from "~/shared/services/data.service.ts";

export const useCourseProjectsQuery = () => {
	return useQuery({
		queryKey: ["courseProjects"],
		queryFn: courseProjectsService.getCourseProjects,
	});
};
