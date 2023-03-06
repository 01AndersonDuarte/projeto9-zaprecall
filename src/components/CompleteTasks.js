import styled from "styled-components";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function CompleteTasks({countTasks, lastAnswers, error}){
    return(
        <Footer data-test="footer">
            <FinalMessages countTasks={countTasks} data="finish-text">
                <div>
                    <img src={error ? sad : party} alt=""/>
                    <h1>{error ? `Putz...` : `Parabéns!`}</h1>
                </div>
                <p>{error ? `Ainda faltam alguns...Mas não desanime!` : `Você não esqueceu de nenhum flashcard!`}</p>
            </FinalMessages>
            <p>{countTasks.completeTasks}/{countTasks.totalTasks} CONCLUÍDOS</p>
            <div>{lastAnswers.map((a)=><img data-test={a.dataTest} src={a.image} alt=""/>)}</div>
        </Footer>
    );
}
const FinalMessages = styled.div`
    display: ${({countTasks})=>countTasks.completeTasks===countTasks.totalTasks ? '' : `none`};
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
            font-family: 'Recursive';
            font-weight: 700;
            font-size: 30px;
            color: #333333;
            line-height: 22px;
        }
        img{
            width: 55px;
        }
    }
`;
const Footer = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 26px;
        font-family: 'Recursive';
        font-weight: 400;
        color: #333333;
        line-height: 19px;
        margin-top: 15px;
        margin-bottom: 5px;
    }
    img{
        margin-right: 5px;
    }
`;