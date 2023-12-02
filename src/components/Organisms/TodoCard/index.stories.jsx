import { TodoCard } from "./index";

export default {component: TodoCard};

export const Default = {
    args:{
        onTaskNameChange: (value) => {
            console.log("taskname changed: " + value);
        },
        onTaskComplete: () => {
            console.log("task completed");
        },
        taskName: "taskname",
        defaultIsEditing: false,
    }
};