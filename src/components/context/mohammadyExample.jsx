import {settings_main} from "@/services/authServices";
import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isSecretary, setIsSecretary] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isHydrated, setIsHydrated] = useState(false);
    const [isNotAllowed, setIsNotAllowed] = useState(false);

    // Load user data from localStorage only after component mounts
    useEffect(() => {
        const savedUser = localStorage.getItem("admin-user");
        const savedToken = localStorage.getItem("admin-token");

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        if (savedToken) {
            setToken(savedToken);
        }

        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem("admin-token", token);
            checkIsSecretary();
        }
    }, [token]);

    const checkIsSecretary = async () => {
        try {
            const {data: response} = await settings_main(token);
            setIsSecretary(response?.is_monshi == 1 ? true : false);
        } catch (error) {
            console.error("خطایی در دریافت اطلاعات رخ داده است:", error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                isSecretary,
                setIsSecretary,
                isHydrated,
                isNotAllowed,
                setIsNotAllowed,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);