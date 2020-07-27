import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { TOGGLE_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //toggle Alert
  const toggleAlert = (msg, type) => {
    dispatch({
      type: TOGGLE_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 4000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        toggleAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
