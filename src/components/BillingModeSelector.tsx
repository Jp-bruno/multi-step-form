import styled from 'styled-components';
import Toggle from './Toggle';
import { useContext } from "react";
import { PlansContext } from '../context/plansContext';

const StyledDiv = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    column-gap: 25px;
    background-color: var(--letter-color);
    padding: 16px 0;
    border-radius: 8px;

    .active {
        font-weight: 500;
    }

    .disabled {
        color: var(--step-letter-color);
    }
`;

export default function BillingModeSelector() {
  const {billingMode, toggleBillingMode} = useContext(PlansContext)

    return (
        <StyledDiv >
            <span className={`${billingMode === 'monthly' ? 'active' : 'disabled'}`}>Monthly</span>
            <Toggle toggleBillingMode={toggleBillingMode} billingMode={billingMode}/>
            <span className={`${billingMode === 'yearly' ? 'active' : 'disabled'}`}>Yearly</span>
        </StyledDiv>
    )
}