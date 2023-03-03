import { useState } from "react";
import styled from "styled-components";

import certo from "../assets/icone_certo.png";
import erro from "../assets/icone_erro.png";
import quase from "../assets/icone_quase.png";

export default function Answers({question, stateAnswer, irFinal}){
    const [stateCheck, setStateCheck] = useState(false);
    return(
        <>
            <Answer stateAnswer={stateAnswer} stateCheck={stateCheck}>
                <h1 data-test="flashcard-text">{question.answer}</h1>
                <Buttons stateAnswer={stateAnswer} stateCheck={stateCheck}>
                    <button data-test="no-btn" onClick={()=>{
                        irFinal(erro, "#FF3030", "no-icon");
                        setStateCheck(true);
                    }}>Não lembrei</button>
                    <button data-test="partial-btn" onClick={()=>{
                        irFinal(quase, "#FF922E", "partial-icon");
                        setStateCheck(true);
                    }}>Quase não lembrei</button>
                    <button data-test="zap-btn" onClick={()=>{
                        irFinal(certo, "#2FBE34", "zap-icon");
                        setStateCheck(true);
                    }}>Zap!</button>
                </Buttons>
            </Answer>
        </>
    );
}
const Answer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    display: ${({stateAnswer, stateCheck})=>stateAnswer ? (stateCheck ? `none`: ''): `none`};    
    h1{
        color: #333333;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 30px;
    }
    @media(max-width: 500px){
        h1{
            font-size: 18px;
        }
    }

`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    display: ${({stateAnswer, stateCheck})=>stateAnswer ? (stateCheck ? `none`: ''): `none`};
    button{
        width: 120px;
        height: 60px;
        border-radius: 8px;
        border: none;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        background-color: red;
    }
    button:hover{
        cursor: pointer;
    }
    button:nth-child(1){
        background-color: #FF3030;
    }
    button:nth-child(2){
        background-color: #FF922E;
    }
    button:nth-child(3){
        background-color: #2FBE34;
    }
    @media(max-width: 500px){
        button{
            width: 100px;
            height: 40px;
            font-size: 12px;
            line-height: 14px;
        }
    }
`;