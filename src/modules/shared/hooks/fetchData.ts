import { courseProjectsService } from "~/shared/services/data.service";

export const fetchCourseProjects = async () => {
	return courseProjectsService.getCourseProjects();
};
