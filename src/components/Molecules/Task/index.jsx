import React, {useState} from "react";
import {Checkbox} from "../../Atoms/Checkbox";
import {Input} from "../../Atoms/Input";
import {EditButton} from "../../Atoms/EditButton";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const Task = ({onTaskNameChange, onTaskComplete, taskName="", defaultIsEditing=false}) => {

    const [isEditing,setIsEditing] = useState(defaultIsEditing);

    const onEditComplete = (value) => {
        setIsEditing(false);
        onTaskNameChange(value);
    }

    const onEditButtonClick = () => {
        setIsEditing(true);
    }

    return (
        <StyledDiv>
            <Checkbox onClick={onTaskComplete}/>
            <Input onEditComplete={onEditComplete} defaultValue={taskName}/>
            <EditButton onClick={onEditButtonClick}/>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 2px 6px;
    align-items: center;
    gap: 10px;
`;