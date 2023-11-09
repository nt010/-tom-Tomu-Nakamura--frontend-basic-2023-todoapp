import React from "react";
import styled from "styled-components";
import TEXT from "../../../variables/texts"; // text.jsのTEXT定数をインポート
import COLOR from "../../../variables/color"; // color.jsのCOLOR定数をインポート
import FONTFAMILY from "../../../variables/font_family"; // font_family.jsのFONTFAMILY定数をインポート
import BREAKPOINT from "../../../variables/breakpoint"; // breakpoint.jsのFONTFAMILY定数をインポート

export const Title = () => {
    return <StyledText>SIMPLE TODO APP</StyledText>;
}

const StyledText = styled.div`
    ${TEXT.L};
    color: ${COLOR.WHITE};
    font-family: ${FONTFAMILY.ROBOTO};
    @media(max-width:${BREAKPOINT.MEDIUM}){
        ${TEXT.M};
    }
`;