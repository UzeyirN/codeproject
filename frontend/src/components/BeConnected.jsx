import React, { useState } from 'react'
import '../styles/HomeSections/BeConnected.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios'
import beConnected_schema from '../Schema/BeConnected';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BeConnected = () => {
    const [state, setState] = useState({
        email: ""
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(beConnected_schema) });

    const URL = axios.create({
        baseURL: "http://localhost:3070",
    });

    const addData = async () => {
        await URL.post("/beconnected", state);
        setState({
            email: "",
        });
        toast.success('Successfully subscribe !');

    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = (data) => {
        console.log(data);
        addData();
    };

    return (
        <>
            <ToastContainer />
            <div className="be-connected__wrapper">
                <div className="be-connected__content">
                    <p className='lato-font beconnect-p'>BE CONNECTED</p>
                    <h2 className='playfair-font beconnect-h2'>Join Our Newsletter</h2>
                    <form onSubmit={handleSubmit(onSubmitHandler)} className="input-group mb-3 beconnect-input__group" style={{ marginTop: "80px" }}>
                        <input name="email" value={state.email} {...register("email")} type="email" className=" beconnect-input" placeholder="YOUR EMAIL ADDRESS" onChange={handleChange} />
                        <button className="btn beconnect-btn">SUBSCRIBE</button>
                        <p className='lato-font' style={{ color: "red" }}>{errors.email?.message}</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BeConnected



