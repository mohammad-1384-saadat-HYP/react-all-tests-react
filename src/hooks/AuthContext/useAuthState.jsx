import {useContext} from "react";
import {AuthContextState} from "../../contexts/contextRelated/AuthContexts.jsx";

export const useAuthState = () => {
    const context = useContext(AuthContextState);

    if (!context) {
        throw Error("useAuthState must be used with a AuthProvider");
    }

    return context;
}