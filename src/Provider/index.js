import React from 'react';
import { createContext, useContext, useReducer } from 'react';

const StateContext = createContext();

const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>
);

const useStateValue = () => useContext(StateContext);

export { StateContext, StateProvider, useStateValue };