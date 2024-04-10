import "./_App.scss"
import styled from "styled-components";
import { HomePage } from "./app/containers/HomePage";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  )
}

export default App
