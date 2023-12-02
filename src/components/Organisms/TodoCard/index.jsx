import React, {useState} from "react";
import {AddTaskButton} from "../../Atoms/AddTaskButton";
import {Task} from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const TodoCard = () => {

    const [taskList,setTaskList] = useState([]);


    const onAddTaskButtonClick = () => {
        setTaskList(Object.assign(taskList, {name:"", initializing: true} ));
    }

    const onTaskComplete = (index) => {
        taskList.filter((item) => (item.index != index))
    }

    const onTaskNameChange = (value, index) => {
        if(value === ""){
            onTaskComplete(index);
        }else{
            setTaskList(taskList[index].name = value);
        }
    }

    return (
        <StyledWrapper>
            <AddTaskButton onClick={onAddTaskButtonClick}/>
            <StyledTaskList>
                {taskList ? taskList.map((task, index) => (
                <Task
                    onTaskComplete={onTaskComplete(index)} 
                    onTaskNameChange={onTaskNameChange(value, index)}
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
    
`;

const StyledTaskList = styled.div`
    
`;


