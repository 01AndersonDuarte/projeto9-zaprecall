import turn from "../assets/seta_virar.png";
import styled from "styled-components";
import { useState } from "react";
import Answers from "./Answers";

export default function Questions({stateQuestion, question, irFinal}){
    const [stateAnswer, setStateAnswer] = useState(false);
    return(
        <>
            <Question stateQuestion={stateQuestion} stateAnswer={stateAnswer}>
                <h1 data-test="flashcard-text">{question.question}</h1>
                <img data-test="turn-btn" onClick={()=>setStateAnswer(true)} src={turn} alt=""/>
            </Question>
            <Answers question={question} stateAnswer={stateAnswer} irFinal={irFinal}/> 
        </>
    );
}
const Question = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* backface-visibility: hidden; */
    /* transform: ${({stateQuestion})=>stateQuestion ? `rotateY(0deg)` : `rotateY(180deg)`}; */

    display: ${({stateQuestion, stateAnswer})=>stateQuestion ? (stateAnswer ? `none` : ''): `none`};
    h1{
        color: #333333;
        font-size: 28px;
        font-family: 'Recursive';
        font-weight: 400;
        line-height: 22px;
    }
    img{
        width: 60px;
        align-self: flex-end;
    }
    @media(max-width: 500px){
        h1{
            font-size: 18px;
        }
        img{
            width: 40px;
        }
    }
`;