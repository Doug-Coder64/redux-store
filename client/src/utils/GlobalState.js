import React, { createContext, useContext } from "react";
import { Provider } from "react-redux";
import store from "./store";

const StoreContext = createContext();

const StoreProvider = (props) => {
  return <Provider store={store} />;
};

export { StoreProvider };
