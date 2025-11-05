import React, {useState} from 'react';
import useHandleForm from "./useHandleForm.jsx";

const Form = () => {

    // مورد ابتدایی
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // یکم بهینه تر
    // const [data, setData] = useState({
    //     email:"",
    //     password:""
    // });
    // const handleChange = e => {
    //     const {target} = e;
    //     setData({
    //         ...data,
    //         [target.id]: target.value
    //     });
    // }

    // با hook custom
    const {data, handleChange} = useHandleForm({email: "", password: ""});

    return (
        <form>
            <div>
                <label htmlFor="email">Email address</label>
                {/*مورد ابتدایی*/}
                {/*<input value={data.email} onChange={e=>setEmail(e.target.value)} type="email" id="email" autoComplete="autocomplete"/>*/}

                {/*یکم بهینه تر*/}
                {/*<input value={data.email} onChange={handleChange} type="email" id="email" autoComplete="autocomplete"/>*/}

                {/*با hook custom*/}
                <input value={data.email} onChange={handleChange} type="email" id="email" autoComplete="autocomplete"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                {/*مورد ابتدایی*/}
                {/*<input value={data.password} onChange={e=>setPassword(e.target.value)} type="password" id="password"*/}
                {/*       autoComplete="autocomplete"/>*/}

                {/*یکم بهینه تر*/}
                {/*<input value={data.password} onChange={handleChange} type="password" id="password"*/}
                {/*       autoComplete="autocomplete"/>*/}

                {/*با hook custom*/}
                <input value={data.password} onChange={handleChange} type="password" id="password"
                       autoComplete="autocomplete"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form