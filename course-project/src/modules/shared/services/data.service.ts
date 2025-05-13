import courseProjectsMock from "~/shared/mock/courseProjects.json";

class CourseProjectsService {
	getCourseProjects(): Promise<any> {
		return new Promise((resolve) => {
			console.log("lololo");
			setTimeout(() => {
				console.log("lalal");
				resolve(courseProjectsMock);
			}, 5000);
		});
	}
}

export const courseProjectsService = new CourseProjectsService();
