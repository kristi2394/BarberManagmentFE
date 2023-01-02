import React, { createContext, useContext } from "react";
import LogInContext, {
  logInActions,
  logInReducerState,
} from "./reducers/LogInContext";

interface globalContext {
  useLogInContext: {
    logInState: logInReducerState;
    LogInActions: logInActions;
  };
}

const GlobalContextHook = createContext<globalContext>(null!);

const useGlobalContext = () => {
  const contextData = useContext(GlobalContextHook);
  return contextData;
};

export const GlobalContextProvider = ({ children }: {children: React.ReactNode}) => {
  const useLogInContext = LogInContext();
  return (
    <GlobalContextHook.Provider
      value={{
        useLogInContext,
      }}
    >
      {children}
    </GlobalContextHook.Provider>
  );
};

export default useGlobalContext;
