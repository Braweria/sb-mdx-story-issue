import { createContext, useState, useContext } from "react";

export const DialogContext = createContext();

export const DialogStore = ({ children, initialValue = false }) => {
  const [state, setState] = useState(initialValue);

  return (
    <DialogContext.Provider value={{ state, setState }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialogContext must be used within a DialogStore");
  }
  return context;
};
