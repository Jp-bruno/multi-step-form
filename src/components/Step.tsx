import styled from "styled-components";
import { useContext } from "react";
import { FormContext } from "../context/formContext";

const StyledLi = styled.li`
  color: var(--letter-color);
  display: flex;
  column-gap: 15px;

  .step_number {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 150px;
    font-size: 13px;
    font-weight: 500;
    border: solid 1px var(--letter-color);

    &.active {
      background-color: hsl(206, 94%, 87%);
      border-color: hsl(206, 94%, 87%);
      color: black;
    }
  }

  .step_text_div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;

    span:nth-of-type(1) {
      font-size: 12px;
      color: var(--step-letter-color);
    }

    span:nth-of-type(2) {
      font-size: 13px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
`;

export default function Step({ step, text }: any) {
  const { formSection } = useContext(FormContext);

  return (
    <StyledLi>
      <span className={`step_number ${formSection === step ? 'active' : ''}`}>{step}</span>
      <div className="step_text_div">
        <span>STEP {step}</span>
        <span>{text}</span>
      </div>
    </StyledLi>
  );
}
