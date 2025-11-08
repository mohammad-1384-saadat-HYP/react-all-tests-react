import React from 'react';
import {useAuth} from "./AuthContext.jsx";

const AuthContextChild = () => {
    const {token} = useAuth();

    return (
        <div>
            <span>sss</span>
            <span>{JSON.parse(token)}</span>
        </div>
    );
};

export default AuthContextChild