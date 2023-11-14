import React from "react";
import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import FONT from "../../../variables/font_family";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const TaskButton = (props) =>{
    return (
        <StyledTaskButton onClick={props.onClick}>
            <img src={plus} className="img-plus"/>
            <p className="taskLabel">タスクを追加</p>
        </StyledTaskButton>
    );
};

const StyledTaskButton = styled.button`
    display: flex;
    padding: 2px 6px;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    border-radius: 12px;
    transition: 0.3s;

    .img-plus{
        width: 20px;
        height: 20px;
    }

    .taskLabel{
        color: ${COLOR.GREEN};
        font-family: ${FONT.NOTO_SANS};
        ${TEXT.S};
        margin: 0;
    }

    :hover{
        cursor: pointer;
        background-color: ${COLOR.GREEN_TRANSLUCENT}
    }
`;