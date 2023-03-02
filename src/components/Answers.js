import styled from "styled-components";

export default function Answers({answer, stateAnswer}){
    return(
        <>
            <Answer stateAnswer={stateAnswer}>
                <h1>{answer}</h1>
                <Buttons stateAnswer={stateAnswer}>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
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

    /* backface-visibility: hidden;
    transition: all 0.5s;
    transform-style: preserve-3d;
    transform: ${({stateAnswer})=>stateAnswer ? `rotateY(0deg)` : 'rotateY(180deg)'}; */

    display: ${({stateAnswer})=>stateAnswer ? '' : `none`};
        
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
    display: ${({stateAnswer})=>stateAnswer ? '' : `none`};
    button{
        width: 120px;
        height: 60px;
        border-radius: 8px;
        border: none;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
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