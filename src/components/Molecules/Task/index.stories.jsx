import { Task } from "./index";

export default {component: Task};

export const Default = {
    args:{
        onTaskNameChange: (value) => {
            console.log("edited: "+value);
        },
        onTaskComplete: () => {
            console.log("task completed");
        },
        taskName: "",
        defaultIsEditing: false,
    }
};