import React from "react";
import check from "../../../assets/svg/check.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

//引数propsを分割代入する
export const Checkbox = ({onClick}) =>{
    return (
        <StyledCheckbox onClick={onClick}>
            <img src={check} className="img-check"/>
        </StyledCheckbox>
    );
};

const StyledCheckbox = styled.button`
    border: 2px solid ${COLOR.LIGHT_GRAY};
    border-radius: 2px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    width: 20px;
    height: 20px;

    .img-check{
        display: none;
        width: 16px;
        height: 16px;
        flex: 1 0 0;
    }

    :hover .img-check{
        display: block;
    }
    
    :hover{
        cursor: pointer;
    }
`;