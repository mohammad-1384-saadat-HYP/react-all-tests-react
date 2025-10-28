import React, {useState} from 'react';

const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit}>
                <input value={userName} onChange={e => setUserName(e.target.value)}
                       type="text" placeholder="userName" required="required"/>
                <input value={password} onChange={e => setPassword(e.target.value)}
                       type="password" placeholder="password" required="required"/>
                <button type="submit">let me in</button>
            </form>
        </div>
    );
};

export default LoginPage