import {useContext} from "react";

export const useAuthDispatch = (AuthContextDispatch) => {
    const context = useContext(AuthContextDispatch);

    if (!context) {
        throw Error("useAuthDispatch must be used with a AuthProvider");
    }

    return context;
}