import styled from "styled-components";

export default function Answers({answer, stateAnswer}){
    return(
        <>
            <Answer stateAnswer={stateAnswer}>
                <h1>{answer}</h1>
            </Answer>
            <Buttons>
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </Buttons>
        </>
    );
}
const Answer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* position: absolute;
    padding: 5%;
    left: 0;
    width: 100%; */
    /* height: 100%; */

    backface-visibility: hidden;
    transform: ${({stateAnswer})=>stateAnswer ? `rotateY(0deg)` : 'rotateY(180deg)'};

    

    /* backface-visibility: hidden;
    transition: all 0.5s;
    transform-style: preserve-3d;
    transform: ${({stateAnswer})=>stateAnswer ? `rotateY(0deg)` : 'rotateY(180deg)'}; */
        
    h1{
        color: #333333;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 22px;
    }

`;
const Buttons = styled.div`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: ${({stateAnswer})=>stateAnswer ? `rotateY(0deg)` : 'rotateY(180deg)'};
    button{
        width: 20%;
        height: 10%;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 24px;
        line-height: 14px;
    }
`;