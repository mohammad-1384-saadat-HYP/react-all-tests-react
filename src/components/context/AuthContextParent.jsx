import React from 'react';
import AuthContextChild from "./AuthContextChild.jsx";

const AuthContextParent = () => {
    return (
        <div>
            <AuthContextChild/>
        </div>
    );
};

export default AuthContextParent