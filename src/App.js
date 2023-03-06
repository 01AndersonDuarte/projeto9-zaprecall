import Top from "./components/Top";
import Flashcards from "./components/Flashcards";
import CompleteTasks from "./components/CompleteTasks";

import questionsCards from "./components/questionsCards";

import styled from "styled-components";
import { useState } from "react";
import Welcome from "./components/Welcome";

// import play from "./assets/seta_play.png";
// import certo from "./assets/icone_certo.png";
import erro from "./assets/icone_erro.png";
// import quase from "./assets/icone_quase.png";

// const questionsCardComplete = questionsCards.map((q)=>{
//   return {question: q.question, answer: q.answer, answered: false, image: play, color: "#333333"};
// });

function App() {
  const [stateWelcome, setStateWelcome] = useState(false);
  const [countTasks, setCountTasks] = useState({completeTasks: 0, totalTasks: questionsCards.length});
  const [lastAnswers, setLastAnswers] = useState([]);
  const [error, setError] = useState(false);
  function CheckTasks(finalImage, finalDataTest){
    if(finalImage===erro){
      setError(true);
    }
    setCountTasks({completeTasks: countTasks.completeTasks+1, totalTasks: questionsCards.length});
    setLastAnswers([...lastAnswers, {image: finalImage, dataTest: finalDataTest}]);
  //   questionsCardComplete = questionsCardComplete.map(()=>{
  //     return {};
  //   });
  }

  return (
    <>
      <Welcome setStateWelcome={setStateWelcome} stateWelcome={stateWelcome}/>
      <Container stateWelcome={stateWelcome}>
        <Top/>
        <Flashcards questionsCards={questionsCards} CheckTasks={CheckTasks}/>
        <CompleteTasks countTasks={countTasks} lastAnswers={lastAnswers} error={error}/>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #FB6B6B;
  display: ${({stateWelcome})=>stateWelcome ? '' : `none`};
`;
