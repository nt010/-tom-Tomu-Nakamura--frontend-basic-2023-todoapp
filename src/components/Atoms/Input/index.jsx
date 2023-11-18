import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const Input = ({onEditComplete},{defaultValue}) =>{
    const inputRef = useRef(null);

    //useStateの第二引数に空配列 => 初期化時のみ実行
    useEffect(() => {
        //inputRefを介してinput要素の値にpropsのdefaultValueを設定
        inputRef.current.value = defaultValue;
        //inputRefを介してinput要素にフォーカスを当てる
        inputRef.current.focus();

        //以降はinput要素で使うイベントハンドラ
        //onblur:input要素からフォーカスを外したときに実行される関数
        inputRef.current.onblur = (e) => {
            onEditComplete(e.target.value);
        };
        //onkeydown:キーを押したときに実行される関数
        inputRef.current.onkeydown = (e) => {
            if(e.key === "Enter"){
                onEditComplete(e.target.value);
            }
        };
    }, []);

    return (
        <StyledInput type="text" ref={inputRef} />
    );
};

const StyledInput = styled.input`
    width: 100%;
    height: 20px;
    padding: 0px 4px;
    border-radius: 2px;
    background: ${COLOR.BLACK};
    color: ${COLOR.LIGHT_GRAY};
    font-family: ${FONTFAMILY.NOTO_SANS};
    ${TEXT.S};
    font-weight: 500;
    border: none;
    outline: none;
`;