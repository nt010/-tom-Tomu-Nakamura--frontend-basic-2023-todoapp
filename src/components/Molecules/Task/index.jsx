import React, {useState} from "react";
import {Checkbox} from "../../Atoms/Checkbox";
import {Input} from "../../Atoms/Input";
import {EditButton} from "../../Atoms/EditButton";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const Task = ({onTaskNameChange, onTaskComplete, taskName="taskname", defaultIsEditing=false}) => {

    const [isEditing,setIsEditing] = useState(defaultIsEditing);

    const onEditComplete = (value) => {
        setIsEditing(false);
        onTaskNameChange(value);
    }

    const onEditButtonClick = () => {
        setIsEditing(true);
    }

    return (
        <StyledWrapper>
            <StyledCheckboxWrapper>
                <Checkbox onClick={onTaskComplete}/>
            </StyledCheckboxWrapper>
            
            {isEditing ? //三項演算子
            <Input onEditComplete={onEditComplete} defaultValue={taskName}/>
            :
            <StyledNameAndButtonWrapper>
                <StyledTaskName>{taskName}</StyledTaskName>
                <StyledEditButtonWrapper>
                    <EditButton onClick={onEditButtonClick}/>
                </StyledEditButtonWrapper>
            </StyledNameAndButtonWrapper>
            }

        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    padding: 2px 6px;
    gap: 10px;
`;

const StyledCheckboxWrapper = styled.div`
    display: flex;
`;

const StyledNameAndButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
`;

const StyledTaskName = styled.div`
    color: ${COLOR.LIGHT_GRAY};
    font-family: ${FONTFAMILY.NOTO_SANS};
    ${TEXT.S};
    font-weight: 500;
    line-height: 20px;
    width: 100%;
`;

const StyledEditButtonWrapper = styled.div`
    display: flex;
`;