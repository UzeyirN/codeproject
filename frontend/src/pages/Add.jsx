import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import '../styles/Add.css'
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import schema from '../Schema/FormValidation';
import axios from 'axios'

const Add = () => {

    const [state, setState] = useState({
        image: "",
        brand: "",
    })

    const addData = () => {
        axios.post("http://localhost:3070/latest", state);

        setState({
            image: "",
            brand: "",
        })

    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema),
    // });
    // const onSubmit = (data) => {
    //     console.log({ data });
    //     addData()
    // };
    return (
        <>
            <Helmet>
                <title>
                    Add
                </title>
            </Helmet>
            <div className="add-wrapper">
                <form onSubmit={addData} className='add-form'>
                    <input name='image' value={state.image} className='add-input' type="text" placeholder='image' onChange={handleChange} />
                    {/* <p className='error-message'>{errors.companyName?.message}</p> */}

                    <input name='brand' value={state.brand} className='add-input' type="text" placeholder='brand' onChange={handleChange} />
                    {/* <p className='error-message'>{errors.contactName?.message}</p> */}

                    <button className='add-btn'>Add</button>

                </form>
            </div>
        </>
    )
}

export default Add