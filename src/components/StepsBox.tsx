import styled from "styled-components";
import Step from "./Step";


const StyledBox = styled.div`
  background-image: url("/public/images/bg-sidebar-desktop.svg");
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 34px 0px 0px 24px;

  .steps_list {
    display: flex;
    flex-direction: column;
    row-gap: 23px;
  }
`;

export default function StepsBox() {
  return (
    <StyledBox>
      <ul className="steps_list">
        <Step step={1} text="YOUR INFO" />
        <Step step={2} text="SELECT PLAN" />
        <Step step={3} text="ADD-ONS" />
        <Step step={4} text="SUMMARY" />
      </ul>
    </StyledBox>
  );
}
