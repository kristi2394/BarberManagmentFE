import React, { useReducer } from "react";
import { roles } from "../../types/rols";

export interface logInReducerState {
  token: string;
  userId: string;
  roles: roles;
  isLoggedIn: boolean;
}

const nullState: logInReducerState = {
  token: "",
  userId: "",
  roles: roles.empty,
  isLoggedIn: false,
};

enum actions {
  addToken = "addToken",
  addUserId = "addUserId",
  addRoles = "addRoles",
  clear = "clear",
}

const reducer = (
  state: logInReducerState,
  action: { type: actions; payload: any }
) => {
  switch (action.type) {
    case actions.addToken:
      return { ...state, token: action.payload, isLoggedIn: true };

    case actions.addUserId:
      return { ...state, userId: action.payload };

    case actions.addRoles:
      return { ...state, roles: action.payload };
    case actions.clear:
      return nullState;
    default:
      return state;
  }
};
export interface logInActions {
  addToken: (action: string) => void;
  addUserId: (action: string) => void;
  addRoles: (action: roles) => void;
  clear: () => void;
}
const LogInContext = () => {
  const [logInState, dispatch] = useReducer(reducer, nullState);
  const LogInActions = {
    addToken: (token: string) =>
      dispatch({ type: actions.addToken, payload: token }),
    addUserId: (userId: string) =>
      dispatch({ type: actions.addUserId, payload: userId }),
    addRoles: (roles: roles) =>
      dispatch({ type: actions.addRoles, payload: roles }),
    clear: () => dispatch({ type: actions.clear, payload: roles.empty }),
  };
  return { LogInActions, logInState };
};

export default LogInContext;
