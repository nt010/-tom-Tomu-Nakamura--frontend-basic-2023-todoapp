import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const EditButton = (props) => {
    return (
    <StyledButton onClick={props.onClick}>
        <img src={pencil}/>
    </StyledButton>
    );
};

export default EditButton;

const StyledButton = styled.button`
    display: flex;
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    img{
        display: flex;
        width: 20px;
        height: 20px;
        
    }
    :hover{
        cursor: pointer;
        background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    }
`;