import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 38px;
  height: 20px;
  background-color: var(--next-step-button-background-color);
  position: relative;
  display: flex;
  align-items: center;
  padding: 1px 4px;
  border-radius: 50px;

  button {
    height: 13px;
    width: 13px;
    position: relative;
    border-radius: 50px;
    border: 0;
    transition: left 0.1s ease;

    &.left {
      left: 0%;
    }

    &.right {
      left: 55%;
    }
  }
`;

type BillingModeSelectorToggleType = {
  billingMode: "monthly" | "yearly";
  toggleBillingMode: () => void;
};

export default function Toggle({
  toggleBillingMode,
  billingMode,
}: BillingModeSelectorToggleType) {
  return (
    <StyledDiv>
      <button
        className={`${billingMode === "monthly" ? "left" : "right"}`}
        onClick={(event) => {
          event.preventDefault();
          toggleBillingMode();
        }}
      ></button>
    </StyledDiv>
  );
}
