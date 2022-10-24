import { createContext, ReactNode, useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface AppContextInterface {
  setSelectedCrypto: Dispatch<SetStateAction<string>>;
  selectedCrypto: string;
  transactionType: "buy" | "sell";
  setTransactionType: Dispatch<SetStateAction<"buy" | "sell">>;
  formShown: boolean;
  setFormShown: Dispatch<SetStateAction<boolean>>;
}

const FormContext = createContext<AppContextInterface | null>(null);

export const FormContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [formShown, setFormShown] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState<string>("");
  const [transactionType, setTransactionType] = useState<"buy" | "sell">("buy");

  return (
    <FormContext.Provider
      value={{
        selectedCrypto,
        setSelectedCrypto,
        transactionType,
        setTransactionType,
        setFormShown,
        formShown,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContext;
