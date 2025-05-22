import courseProjectsMock from "~/shared/mock/courseProjects.json";

class CourseProjectsService {
	getCourseProjects(): Promise<any> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(courseProjectsMock);
			}, 5000);
		});
	}
}

export const courseProjectsService = new CourseProjectsService();
