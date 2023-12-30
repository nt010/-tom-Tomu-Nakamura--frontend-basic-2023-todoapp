import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";



export const Alert = ({isActive,alertText}) => {
    return (
        <StyledWrapper isActive={isActive}>
            <StyledAlert>{alertText}</StyledAlert>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    position: absolute;
    top: ${({ isActive }) => (isActive ? `80px` : `0px`)};
    left: 50%;
    width: 100%;
    max-width: 400px;
    border-radius: 4px;
    transform: translate(-50%, 0);
    background: ${COLOR.RED};
    opacity: ${({isActive}) => isActive ? `1` : `0`};
    transition: 0.5s linear;
    
    @media(max-width: ${BREAKPOINT.MEDIUM}){
        top: ${({ isActive }) => (isActive ? `40px` : `0px`)}; 
        transform: translate(-50%, 95%);
    }
`;

const StyledAlert = styled.div`
    ${TEXT.S};
    font-family: ${FONTFAMILY.NOTO_SANS};
    color: ${COLOR.WHITE};
    padding: 10px 20px;
`;



