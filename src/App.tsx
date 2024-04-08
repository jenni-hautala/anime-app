import "./_App.scss"
import styled from "styled-components";

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
      <h1>Hello World!</h1>
    </AppContainer>
  )
}

export default App
