import courseProjectsMock from "~/shared/mock/courseProjects.json";

class CourseProjectsService {
	// Simulate fetching course projects with a delay
	getCourseProjects(): Promise<any> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(courseProjectsMock);
			}, 1000); // Simulate a 1-second delay
		});
	}
}

export const courseProjectsService = new CourseProjectsService();
