import {useState} from 'react';

const useHandleForm = (initial) => {
    const [data, setData] = useState(initial);

    const handleChange = e => {
        const {target} = e;
        setData({
            ...data,
            [target.id]: target.value
        });
    }

    return {data, handleChange};
}

export default useHandleForm