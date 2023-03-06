import logo from "../assets/logo.png";
import styled from "styled-components";
export default function Welcome({setStateWelcome, stateWelcome}){
    return(
        <Enter stateWelcome={stateWelcome}>
            <div>
                <img src={logo} alt=""/>
                <p>ZapRecall</p>
                <button data-test="start-btn" onClick={()=>setStateWelcome(true)}>Iniciar Recall</button>
            </div>
        </Enter>
    );
}
const Enter = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FB6B6B;
    display: ${({stateWelcome})=>stateWelcome ? `none` : ''};
    img{
        width: 136px;
        height: 161px;
    }
    p{
        font-size: 56px;
        font-family: 'Righteous';
        color: #FFFFFF;
        font-weight: 400;
        line-height: 45px;
    }
    button, button:hover{
        border: none;
        border-radius: 10px;
        width: 270px;
        height: 60px;
        font-size: 20px;
        font-family: 'Recursive';
        color: #D70900;
        cursor: pointer;
    }
    div{
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`;