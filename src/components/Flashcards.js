import { useState } from "react";
import styled from "styled-components";
import play from "../assets/seta_play.png";
import q from "./q";
import Questions from "./Questions";
export default function Flashcards(){
    return(
        <StyleFlashcards>
            {q.map((q, i)=><Flashcard key={q.question} number={i+1} question={q.question} answer={q.answer}/>)}
        </StyleFlashcards>
    );
}

function Flashcard({number, question, answer}){
    const [stateQuestion, setstateQuestion] = useState(false);
    return(
        <StyleBoxQuestion stateQuestion={stateQuestion}>
            <div>
                <p>Pergunta {number}</p>
                <img onClick={()=>setstateQuestion(true)} src={play} alt=""/>
            </div>
            <Questions stateQuestion={stateQuestion} question={question} answer={answer}/>
        </StyleBoxQuestion>
    );
}

const StyleBoxQuestion = styled.div`
    width: 100%;
    padding: 5%;
    height: ${({stateQuestion})=>stateQuestion ? `300px` : `100px`};
    background-color: #FFFFFF;
    margin-bottom: 5%;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    div:first-child{
        background-color: black;
        display: flex;
        justify-content: space-between;
        display: ${({stateQuestion})=>stateQuestion ? `none` : ''};
        p{
            font-size: 26px;
            font-family: 'Recursive';
            font-weight: 700;
            color: #333333;
            line-height: 19px;
        }
        
    }
    img:hover{
        cursor: pointer;
    }
    h2{
        display: none;
    }
    @media(max-width: 500px){
        height: ${({stateQuestion})=>stateQuestion ? `250px` : `65px`};
        div:first-child{
            p{
                font-size: 16px;
            }
        }
    }
`;
const StyleFlashcards = styled.div`
    width: 55%;
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