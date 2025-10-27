import {createContext, useContext, useReducer} from "react";

const AuthContextState = createContext();
const AuthContextDispatch = createContext();

export const useAuthState = () => {
    const context = useContext(AuthContextState);

    if (!context) {
        throw Error("useAuthState must be used with a AuthProvider");
    }

    return context;
}

export const useAuthDispatch = () => {
    const context = useContext(AuthContextDispatch);

    if (!context) {
        throw Error("useAuthDispatch must be used with a AuthProvider");
    }

    return context;
}

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