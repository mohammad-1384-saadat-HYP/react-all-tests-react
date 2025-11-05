import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContext.jsx";

const TestComponentChild = () => {
    const themeContext = useContext(ThemeContext);
    const {toggleTheme} = themeContext;
    const theme = themeContext.theme.isLightTheme ? themeContext.theme.light : themeContext.theme.dark;
    const {bg, syntax} = theme;

    return (
        <div style={{backgroundColor: bg}}>
            <button onClick={toggleTheme}>toggle theme</button>
            <div style={{color: syntax}}>dependent element</div>
        </div>
    );
};

export default TestComponentChild