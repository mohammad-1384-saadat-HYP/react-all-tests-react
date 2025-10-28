import {useReducer} from "react";
import {reducer} from "../../utils/utils.jsx";
import {initialState} from "../../contants/contants.js";
import {AuthContextDispatch, AuthContextState} from "./AuthContexts.jsx";

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContextState.Provider value={state}>
            <AuthContextDispatch.Provider value={dispatch}>
                {children}
            </AuthContextDispatch.Provider>
        </AuthContextState.Provider>
    )
}