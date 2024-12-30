import { makeAutoObservable } from "mobx";

interface ActiveResource {
    name: string;
    id: string;
};

interface CourseStoreTypes {
    courseData: any;
    activeCourseId: string;
    activeTopicDetails: ActiveResource;
    activeUnitDetails: ActiveResource;
    isCourseDataLoaded: boolean;
    getCourseDataFromServer: (courseId: string) => void;
    updateActiveTopicId: (name: string, topicId: string) => void;
    updateActiveUnitId: (name: string, unitId: string) => void;
};

class CourseStore {
    courseData: any = {};
    activeCourseId: string = "";
    activeTopicDetails: ActiveResource = {
        name : "",
        id : ""
    };
    activeUnitDetails: ActiveResource = {
        name : "",
        id : ""
    };
    isCourseDataLoaded: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };

    getCourseDataFromServer = async (courseId: string) => {
        // get course data from node server and update it here.
        this.isCourseDataLoaded = false;
        return this.courseData;
    };

    updateActiveTopicId = (name: string, topicId: string) => {
        this.activeTopicDetails = {name, id : topicId}
    }

    updateActiveUnitId = (name : string, unitId: string) => {
        this.activeUnitDetails = {name, id : unitId};
    }

    getUpdatedResourcesDetails = () => {
        // you have to get active topic ID and active unit ID details from here.
        // and add them to store.
    }
    
}

const courseStore = new CourseStore();

export default courseStore;