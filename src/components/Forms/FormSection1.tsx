import styled from "styled-components";
import TextInput from "../TextInput";
import FormSectionTemplate from "./FormSectionTemplate";

const StyledDiv = styled.div``;

export default function FormSection1() {
  return (
    <StyledDiv>
      <FormSectionTemplate
        title="Personal info"
        description="Please provide your name, email address, and phone number."
        id="1"
      >
        <TextInput title='Name'/>
      </FormSectionTemplate>
    </StyledDiv>
  );
}
