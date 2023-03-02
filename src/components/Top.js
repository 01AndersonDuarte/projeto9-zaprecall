import logo from "../assets/logo.png";
import styled from "styled-components";
export default function Top(){
    return(
    <StyleTop>
        <img src={logo} alt=""/>
        <p>ZapRecall</p>
    </StyleTop>
    );
}

const StyleTop = styled.div`
    width: 50%;
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 82px;
        height: 90px;
        margin-right: 5%;
    }
    p{
        font-size: 56px;
        font-family: 'Righteous';
        color: #FFFFFF;
        font-weight: 400;
        line-height: 45px;
    }
    @media(max-width: 650px){
        img{
            width: 62px;
            height: 70px;
        }
        p{
            font-size: 46px;
        }
    }
    @media(max-width: 500px){
        width: 60%;
        img{
            width: 52px;
            height: 60px;
        }
        p{
            font-size: 36px;
        }
    }


`;
