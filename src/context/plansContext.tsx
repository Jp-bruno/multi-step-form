import { createContext, PropsWithChildren, useState } from "react";

type PlansContextType = {
    planData: {
      plan: "Arcade" | "Advanced" | "Pro";
      price: number;
    } | null;
    billingMode: "monthly" | "yearly";
    toggleBillingMode: () => void;
    setNewPlanData: (plan: "Arcade" | "Advanced" | "Pro", price: number) => void
  };

export const PlansContext = createContext({} as PlansContextType);

export default function PlansContextProvider({ children }: PropsWithChildren) {
  const [billingMode, setBillingMode] = useState<"monthly" | "yearly">("monthly");
  const [planData, setPlanData] = useState<PlansContextType["planData"] | null>(null);

  function toggleBillingMode() {
    setBillingMode(billingMode === "monthly" ? "yearly" : "monthly");
  }

  function setNewPlanData(plan: "Arcade" | "Advanced" | "Pro", price: number) {
    setPlanData({plan, price})
  }

  return (
    <PlansContext.Provider value={{ toggleBillingMode, planData, billingMode, setNewPlanData }}>
      {children}
    </PlansContext.Provider>
  );
}