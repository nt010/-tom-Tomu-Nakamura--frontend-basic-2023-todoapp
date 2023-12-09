import React from "react";
import {Title} from "../../Atoms/Title";
import {TodoCard} from "../../Organisms/TodoCard";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";

export const MainPage = () => {

    return (
        <StyledWrapper>
            <Title/>
            <StyledTodoCard>
                <TodoCard/>
            </StyledTodoCard> 
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    padding: 60px 20px 20px 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0;
    
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}){
        padding: 20px;
    }
`;
const StyledTodoCard = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    @media screen and (min-width: ${BREAKPOINT.MEDIUM}){
        width: 500px;
    }
`




