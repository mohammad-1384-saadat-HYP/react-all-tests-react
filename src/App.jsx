import React, {useState} from 'react';
import Counter from "./components/useMemo&usecallback/Counter.jsx";
import Form from "./components/customHooks/Form.jsx";
import MainUseLayout from "./components/useLayoutEffect/MainUseLayout.jsx";
import MainUniqueKey from "./components/createUniqueKey/MainUniqueKey.jsx";
import LoginPage from "./components/contextRelated/LoginPage.jsx";
import DashboardPage from "./components/contextRelated/DashboardPage.jsx";
import {useAuthState} from "./hooks/AuthContext/useAuthState.jsx";

const App = () => {
    const state = useAuthState();

    return (
        <>
            {/*<Counter/>*/}
            {/*<Form/>*/}
            {/*<MainUseLayout/>*/}
            {/*<MainUniqueKey/>*/}
            {state.token ? <DashboardPage/> : <LoginPage/>}
        </>
    );
};

export default App