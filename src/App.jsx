import React, {useEffect, useState} from 'react';
import Counter from "./components/useMemo&usecallback/Counter.jsx";
import Form from "./components/customHooks/Form.jsx";
import MainUseLayout from "./components/useLayoutEffect/MainUseLayout.jsx";
import MainUniqueKey from "./components/createUniqueKey/MainUniqueKey.jsx";
import {jsonPlaceHolder} from "./services/axiosService/api.js";

const App = () => {
    // const state = useAuthState();
    // const env = import.meta.env.VITE_MY_API_KEY;
    // console.log(env);
    // const fetchData = async (url, config) => {
    //     try {
    //         const result = await jsonPlaceHolder.get(url, config);
    //         console.log(result.data)
    //     } catch (e) {
    //         console.error("error: ", e);
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchData(url, config);
    // }, []);

    return (
        <>
            {/*<Counter/>*/}
            {/*<Form/>*/}
            {/*<MainUseLayout/>*/}
            {/*<MainUniqueKey/>*/}
            {/*{state.token ? <DashboardPage/> : <LoginPage/>}*/}
        </>
    );
};

export default App