import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";



export const Alert = ({isActive}) => {
    return (
        <StyledWrapper>
            <StyledAlert isActive={isActive}>タスクの名前が設定されていません。</StyledAlert>
        </StyledWrapper>
        
    );
};

const StyledWrapper = styled.div`
    display: flex;
    width: 100%;
    top: 80px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 4px;
    background: ${COLOR.RED};

    opacity: ${({isActive}) => isActive ? `1` : `0`};
    
    @media(max-width: ${BREAKPOINT.MEDIUM}){
        top: 40px;
    }
`;

const StyledAlert = styled.div`
    color: ${COLOR.WHITE};
    font-family: ${FONTFAMILY.NOTO_SANS};
    ${TEXT.S};
`;



