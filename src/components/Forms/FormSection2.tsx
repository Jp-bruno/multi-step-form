import styled from "styled-components";
import PlanCard from "../PlanCard";
import FormSectionTemplate from "./FormSectionTemplate";
import BillingModeSelector from "../BillingModeSelector";
import PlansContextProvider from "../../context/plansContext";

const PlansDiv = styled.div`
  display: flex;
  column-gap: 20px;
`;

export default function FormSection2() {
  return (
    <FormSectionTemplate
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
      id="2"
    >
      <PlansContextProvider>
        <PlansDiv>
          <PlanCard
            img="./images/icon-arcade.svg"
            title="Arcade"
            value={9}
          />

          <PlanCard
            img="./images/icon-advanced.svg"
            title="Advanced"
            value={12}
          />

          <PlanCard
            img="./images/icon-pro.svg"
            title="Pro"
            value={15}
          />
        </PlansDiv>

        <BillingModeSelector />
      </PlansContextProvider>
    </FormSectionTemplate>
  );
}
