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

const initialState = {
    user: null,
    token: null,
    loading: true,
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                user: null,
                token: null,
                loading: true,
                error: null
            };
        case "LOGIN_SUCCESS": {
            const {user, token} = action.payload;
            return {
                ...state,
                user: user,
                token: token,
                loading: false,
                error: null
            };
        }
        case "LOGIN_ERROR":
            return {
                ...state,
                user: null,
                token: null,
                loading: null,
                error: action.payload.error
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null,
                loading: false,
                error: null
            };
        default:
            throw Error(`action type not allowed: ${action.type}`);
    }
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