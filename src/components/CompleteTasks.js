import styled from "styled-components";

export default function CompleteTasks({countTasks}){
    return(
        <Footer data-test="footer">
            <p>{countTasks.completeTasks}/{countTasks.totalTasks} CONCLUÍDOS</p>
        </Footer>
    );
}

const Footer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
    p{
        font-size: 26px;
        font-family: 'Recursive';
        font-weight: 400;
        color: #333333;
        line-height: 19px;
    }
`;