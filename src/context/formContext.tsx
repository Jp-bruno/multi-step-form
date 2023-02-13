import { createContext, PropsWithChildren, useState } from "react";

type FormContextType = {
  formSection: number;
  changeFormSection: (direction: "back" | "forward") => void
};

export const FormContext = createContext({} as FormContextType);

export default function FormContextProvider({ children }: PropsWithChildren) {
  const [formSection, setFormSection] = useState(1);

  function changeFormSection(direction: "back" | "forward") {
    
    if (direction === 'forward' && formSection < 4) {
      document.getElementById(`formSection${formSection + 1}`)?.scrollIntoView({behavior: "smooth"})
      setFormSection(currentSection => currentSection + 1)
    }

    if (direction === 'back' && formSection > 1) {
      document.getElementById(`formSection${formSection - 1}`)?.scrollIntoView({behavior: "smooth"})
      setFormSection(currentSection => currentSection - 1)
    }
  }
  return <FormContext.Provider value={{ formSection, changeFormSection }}>{children}</FormContext.Provider>;
}
