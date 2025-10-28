import {useContext} from "react";
import {AuthContextDispatch} from "../../contexts/contextRelated/AuthContexts.jsx";

export const useAuthDispatch = () => {
    const context = useContext(AuthContextDispatch);

    if (!context) {
        throw Error("useAuthDispatch must be used with a AuthProvider");
    }

    return context;
}