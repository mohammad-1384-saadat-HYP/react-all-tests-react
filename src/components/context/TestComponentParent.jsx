import React from 'react';
import TestComponentChild from "./TestComponentChild.jsx";

const TestComponentParent = () => {
    return (
        <div>
            <TestComponentChild/>
        </div>
    );
};

export default TestComponentParent