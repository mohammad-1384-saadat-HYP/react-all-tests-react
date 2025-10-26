import React, {useState} from 'react';
import shortid from 'shortid';

const MainUniqueKey = () => {
    const [uniqueKey, setUniqueKey] = useState(0);

    const shortidValue = () => shortid.generate();

    return <input type="button" value={uniqueKey} onClick={() => setUniqueKey(shortidValue)}/>
};

export default MainUniqueKey