import { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;

  input {
    margin-top: 8px;
    padding: 13px 0 13px 11px;
    border-radius: 6px;
    border: solid 1px var(--text-input-border);
    font-size: 16px;
    font-weight: 500;
  }
`;

type TextInputType = {
  title: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ title, ...rest }: TextInputType) {
  return (
    <StyledLabel className='text_input_label'>
      {title}
      <input {...rest} />
    </StyledLabel>
  );
}
