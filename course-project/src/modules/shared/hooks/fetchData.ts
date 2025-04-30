import { courseProjectsService } from "~/shared/services/data.service";

export const fetchCourseProjects = async () => {
	// Use the service to fetch course projects
	return courseProjectsService.getCourseProjects();
};
