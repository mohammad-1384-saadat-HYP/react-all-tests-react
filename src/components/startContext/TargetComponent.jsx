import React, {useContext} from 'react';
import AuthContext from "./AuthContext.js";

const TargetComponent = () => {
    const userData = useContext(AuthContext);

    return (
        <div>
            <div>User Name : {userData.userName}</div>
            <div>User Number : {userData.number}</div>
        </div>
    );
};

export default TargetComponent