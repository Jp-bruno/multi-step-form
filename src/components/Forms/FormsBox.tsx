import styled from "styled-components";
import GoBack from "../GoBackButton";
import NextStepButton from "../NextStepButton";
import FormSection1 from "./FormSection1";
import FormSection2 from "./FormSection2";

const StyledBox = styled.div`
  padding: 0px 81px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  .steps_navigation_buttons {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 12px;
  }
`;

const Carrossel = styled.form`
  display: flex;
  overflow: hidden;

  #scroll_div {
    display: grid;
    grid-template-columns: repeat(4, 100%);
    width: 100%;
    column-gap: 150px;
  }
`;

export default function Forms() {
  return (
    <StyledBox>
      <Carrossel>
        <div id='scroll_div'>
          <FormSection1 />
          <FormSection2 />
          {/* <FormSection3 />
          <FormSection4 /> */}
        </div>
      </Carrossel>
      <div className="steps_navigation_buttons">
        <GoBack />
        <NextStepButton />
      </div>
    </StyledBox>
  );
}
