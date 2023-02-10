import { ReactNode } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  .section_text {
    .section_title {
      margin-top: 41px;
      margin-bottom: 10px;
    }

    .section_description {
      color: var(--step-letter-color);
      font-weight: 400;
    }
  }

  .form {
    margin-top: 37px;

  }
`;

type FormSectionTemplatePropsType = {
  title: string;
  description: string;
  id: string;
  children: ReactNode;
};

export default function FormSectionTemplate({
  title,
  description,
  id,
  children,
}: FormSectionTemplatePropsType) {
  return (
    <StyledSection id={`formSection${id}`}>
      <div className="section_text">
        <h1 className="section_title">{title}</h1>
        <p className="section_description">{description}</p>
      </div>
      <form className={`form ${'active'}`} id={`form${id}`}>{children}</form>
    </StyledSection>
  );
}
