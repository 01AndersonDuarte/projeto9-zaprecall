import Top from "./components/Top";
import Flashcards from "./components/Flashcards";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Top/>
      <Flashcards/>
    </Container>
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
`;
