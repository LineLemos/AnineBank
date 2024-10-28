import React, { createContext, useContext, useState } from "react";

const SaldoContext = createContext();

export const useSaldo = () => {
  const context = useContext(SaldoContext);
  if (!context) {
    throw new Error("useSaldo deve ser usado dentro de um SaldoProvider");
  }
  return context;
};

export const SaldoProvider = ({ children }) => {
  const [saldo, setSaldo] = useState(100); 

  return (
    <SaldoContext.Provider value={{ saldo, setSaldo }}>
      {children}
    </SaldoContext.Provider>
  );
};