import MainBox from "./components/MainBox";
import styled from "styled-components";
import "./styles/normalize.css";
import "./styles/reset.css";
import "./styles/variables.css";
import FormContextProvider from "./context/formContext";

const StyledApp = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--app-background-color);
  font-family: var(--font-ubuntu);
`;

function App() {
  return (
    <FormContextProvider>
      <StyledApp>
        <MainBox />
      </StyledApp>
    </FormContextProvider>
  );
}

export default App;
