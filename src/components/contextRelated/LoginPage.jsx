import React, {useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import {useAuthDispatch} from "../../hooks/AuthContext/useAuthDispatch.jsx";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);

    const dispatch = useAuthDispatch();

    const fetchToken = async (username, password) => {
        try {
            const result = await axios.post("http://localhost:8001/login", {
                username,
                password,
            });
            if (!result) {
                console.error("something went wrong");
            } else {
                const response = result.data;
                console.log(response);
                if (response.success) {
                    setToken(response.data);
                }
            }
        } catch (e) {
            console.error("error: ", e);
        }
    };

    const fetchUserData = async (token) => {
        try {
            const result = await axios.get("http://localhost:8001/users/me", {
                headers: {
                    Authorization: token,
                },
            });
            if (!result) {
                console.error("something went wrong");
            } else {
                const response = result.data;
                console.log(response);
                if (response.success) {
                    localStorage.setItem("token", token);
                    dispatch({
                        type: "LOGIN_SUCCESS",
                        payload: {
                            user: response.data,
                            token: token,
                        },
                    });
                }
            }
        } catch (e) {
            console.error("error: ", e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        void fetchToken(username, password);
    };

    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setToken(token);
    }, []);

    useEffect(() => {
        if (token) {
            void fetchUserData(token);
        }
    }, [token]);

    return (
        <div>
            <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="username"
                    required="required"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    required="required"
                />
                <button type="submit">let me in</button>
            </form>
        </div>
    );
};

export default LoginPage;
