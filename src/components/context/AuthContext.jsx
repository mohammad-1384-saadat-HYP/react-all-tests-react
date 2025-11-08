import React, {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentToken = localStorage.getItem("admin-token");
        const currentUser = localStorage.getItem("user");

        currentToken && setToken(currentToken);
        currentUser && setUser(JSON.parse(currentUser));
    }, []);

    return (
        <AuthContext.Provider value={{token, user}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);