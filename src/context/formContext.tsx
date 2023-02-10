import { createContext, PropsWithChildren, useState } from "react";

type FormContextType = {
    formSection: number
};

export const FormContext = createContext({} as FormContextType);

export default function FormContextProvider({ children }: PropsWithChildren) {
    const [formSection, setFormSection] = useState(1)
  return <FormContext.Provider value={{formSection}}>{children}</FormContext.Provider>;
}
