import React, {useContext} from 'react';
import {useAuthState} from "./AuthContext.js";

const TargetComponent = () => {
    const userData = useContext(useAuthState);

    return (
        <div>
            <div>User Name : {userData.userName}</div>
            <div>User Number : {userData.number}</div>
        </div>
    );
};

export default TargetComponent