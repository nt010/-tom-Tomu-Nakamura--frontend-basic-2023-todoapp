import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";



export const Alert = ({isActive}) => {
    return (
        <StyledWrapper isActive={isActive}>
            <StyledAlert>text</StyledAlert>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    position: absolute;
    top: 80px;
    left: 50%;
    width: 100%;
    max-width: 400px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 4px;
    transform: translate(-50%, 50%);
    background: ${COLOR.RED};
    opacity: ${({isActive}) => isActive ? `1` : `0`};
    
    @media(max-width: ${BREAKPOINT.MEDIUM}){
        top: 40px;
    }
`;

const StyledAlert = styled.div`
    ${TEXT.S};
    font-family: ${FONTFAMILY.NOTO_SANS};
    color: ${COLOR.WHITE};
    padding: 10px 20px;
`;



