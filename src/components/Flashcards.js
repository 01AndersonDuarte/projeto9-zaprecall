import { useState } from "react";
import styled from "styled-components";
import play from "../assets/seta_play.png";
import Questions from "./Questions";

export default function Flashcards({questionsCards, CheckTasks}){
    return(
        <StyleFlashcards>
            {questionsCards.map((q, i)=>
            <Flashcard
                key={q.question}
                number={i+1}
                question={q}
                CheckTasks={CheckTasks}
            />)}
        </StyleFlashcards>
    );
}

function Flashcard({number, question, CheckTasks}){
    const [stateQuestion, setstateQuestion] = useState(false);
    const [finalState, setFinalState] = useState({situacion: false, image: play, color: "#333333"});
    function irFinal(finalImage, finalColor){
        setFinalState({situacion: true, image: finalImage, color: finalColor});
        CheckTasks();
    }
    return(
        <StyleBoxQuestion stateQuestion={stateQuestion} finalState={finalState}>
            <div>
                <p>Pergunta {number}</p>
                <img onClick={()=>setstateQuestion(true)} src={finalState.image} alt=""/>
            </div>
            <Questions stateQuestion={stateQuestion} question={question} irFinal={irFinal}/>
        </StyleBoxQuestion>
    );
}

const StyleBoxQuestion = styled.div`
    width: 100%;
    padding: 5%;
    height: ${({stateQuestion, finalState})=>stateQuestion ? (finalState.situacion ? `100px` : `300px`) : `100px`};
    background-color: #FFFFFF;
    margin-bottom: 5%;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    div:first-child{
        display: flex;
        justify-content: space-between;
        display: ${({stateQuestion, finalState})=>stateQuestion ? (finalState.situacion ? '' : `none`) : ''};
        p{
            font-size: 26px;
            font-family: 'Recursive';
            font-weight: 700;
            color: ${({finalState})=>finalState.color};
            line-height: 19px;
            text-decoration: line-through;
            text-decoration-color: ${({finalState})=>finalState.color};
        }
        
    }
    img:hover{
        cursor: pointer;
    }
    @media(max-width: 500px){
        height: ${({stateQuestion})=>stateQuestion ? `200px` : `65px`};
        div:first-child{
            p{
                font-size: 16px;
            }
        }
    }
`;
const StyleFlashcards = styled.div`
    width: 55%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media(max-width: 1000px){
        width: 65%;
    }
    @media(max-width: 650px){
        width: 80%;
    }
`;