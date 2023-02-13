import styled from "styled-components";
import { useContext } from "react";
import { PlansContext } from "../context/plansContext";

const StyledButton = styled.button`
  border: solid 1px var(--text-input-border);
  flex: 1;
  display: grid;
  padding: 15px;
  border-radius: 10px;
  row-gap: 50px;
  text-align: left;
  background-color: white;

  &.selected {
    background-color: var(--letter-color);
    border-color: var(--plan-border);
  }

  :hover {
    border-color: var(--plan-border);
  }
`;

type PlanCardType = {
  img: string;
  title: string;
  value: number;
};

export default function PlanCard({ img, title, value }: PlanCardType) {
  const { billingMode, planData, setNewPlanData } = useContext(PlansContext);
  return (
    <StyledButton
      className={`${planData?.plan === title ? "selected" : ""}`}
      onClick={(event) => {
        event.preventDefault();
        setNewPlanData(title as "Arcade" | "Advanced" | "Pro", value)
      }}
    >
      <img
        src={img}
        alt={title}
      />
      <div>
        <h4>{title}</h4>
        <span>${billingMode === "yearly" ? value * 12 + "/yr" : value + "/mo"}</span>
      </div>
    </StyledButton>
  );
}
