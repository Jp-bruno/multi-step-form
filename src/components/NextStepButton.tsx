import styled from "styled-components";
import { useContext } from "react";
import { FormContext } from "../context/formContext";

const StyledButton = styled.button`
  color: white;
  background-color: var(--next-step-button-background-color);
  padding: 13px 20px;
  border-radius: 6px;
  border: 0;
`;

export default function NextStepButton() {
  const { changeFormSection } = useContext(FormContext);
  return (
    <StyledButton
      onClick={(event) => {
        event.preventDefault();
        changeFormSection("forward")
      }}
    >
      Next Step
    </StyledButton>
  );
}
