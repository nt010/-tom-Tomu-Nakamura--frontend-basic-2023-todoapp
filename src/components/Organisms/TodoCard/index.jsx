import React, {useState} from "react";
import {TaskButton} from "../../Atoms/AddTaskButton";
import {Task} from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const TodoCard = () => {

    const [taskList,setTaskList] = useState([]);


    const onAddTaskButtonClick = () => {
        //Spread構文: [...array]で配列を展開
        setTaskList(taskList => [...taskList, {name:"", initializing: true}]);
    }

    const onTaskComplete = (taskIndex) => {
        const filteredTaskList = taskList.filter((index) => (index != taskIndex));
        setTaskList(filteredTaskList);
    }

    const onTaskNameChange = (value, taskIndex) => {
        if(value === ""){
            const editedTaskList = taskList.filter((task, index) => {
                return index !== taskIndex;
            });
            setTaskList(editedTaskList);
        }else{
            const editedTaskList = taskList.map((task, index) => {
                if(index === taskIndex){
                    task.name = value;
                    task.initializing = false;
                }
                return task;
            });
            setTaskList(editedTaskList);
        }
    }

    return (
        <StyledWrapper>
            <TaskButton onClick={onAddTaskButtonClick}/>
            <StyledTaskList>
                {taskList ? taskList.map((task, index) => (
                <Task
                    key={index}
                    onTaskComplete={() => onTaskComplete(index)} 
                    onTaskNameChange={(value) => onTaskNameChange(value, index)}
                    taskName = {task.name}
                    defaultIsEditing = {task.initializing}
                />  
                ))  
                : <></>}
            </StyledTaskList> 
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background: ${COLOR.LIGHT_BLACK};
    
`;

const StyledTaskList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
`;


