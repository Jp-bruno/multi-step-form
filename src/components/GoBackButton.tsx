import styled from "styled-components";
import { useContext } from "react";
import { FormContext } from "../context/formContext";

const StyledButton = styled.button`
  padding: 13px 20px;
  background-color: transparent;
  border: 0;
  color: var(--next-step-button-background-color);
  font-weight: 500;
`;

export default function GoBack() {
  const { formSection, changeFormSection } = useContext(FormContext);

  if (formSection === 1) {
    return <div></div>;
  }

  return (
    <StyledButton
      onClick={(event) => {
        event.preventDefault();
        changeFormSection("back");
      }}
    >
      Go Back
    </StyledButton>
  );
}
