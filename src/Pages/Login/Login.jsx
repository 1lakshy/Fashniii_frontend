import React, { useEffect } from 'react'
import './login.css';
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
import { MdOutlineMarkEmailRead, MdLockOutline, MdOutlinePerson } from "react-icons/md";
import Btn from '../../Components/layout/Btn';
import { Link, useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { clearErrors, login } from '../../Actions/userAction';



const Login = () => {
    const form = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error,loading,isAuthenticated} = useSelector((state)=> state.user);
    const { register, control, setValue, handleSubmit, formState: { errors } } = form;

    const handleImageChange = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const base64Image = await convertToBase64(file);

            // Use setValue instead of field.setValue
            setValue('image', base64Image);
        }
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    useEffect(()=>{
if(isAuthenticated){
    navigate("/account")
}
    },[isAuthenticated])

    const formSubmit = (data) => {
        console.log(data);
        dispatch(login(data.email,data.password))
    }
    return (
        <>
            <div className="" style={{ width: "100%", position: "absolute", display: 'flex' }}>
                <div className="loginUi" style={{ width: "50%", height: "100vh", padding: "4rem" }}>
                    <div>
                        <h2 className="heading" style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Dress yourself in confidence ,</h2>
                        <h1 className="maxHeading text-slate-800">
                            "for style is the silent expression of individuality, <br /> and each garment tells a story of self-discovery."
                        </h1>
                    </div>
                </div>
                <div className="loginCont" style={{ flex: 1 }}>

                    <div className="loginDiv">
                        <h1 className='heading' style={{ fontSize: "4rem" }}>
                            Login
                        </h1>

                        <form onSubmit={handleSubmit(formSubmit)} action='#' noValidate className='form'>
                            <div className="input">

                                {/* <label htmlFor="email">Email:</label> */}
                                <MdOutlineMarkEmailRead />
                                <input type="text" id="email" {...register('email', {
                                    required: {
                                        value: true,
                                        message: "Please provide email address "
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Invalid email address',
                                    },
                                })} name="email"
                                    placeholder='Email' />

                            </div>
                            <p className='tiny'>{errors.email?.message}</p>
                            <div className="input">
                                {/* <label htmlFor="password">Password:</label> */}
                                <MdLockOutline />
                                <input type="password" id="password" {...register('password', {
                                    required: {
                                        value: true,
                                        message: "Please provide password"
                                    }
                                })} name="password"
                                    placeholder='Password' />

                            </div>
                            <p className='tiny'>{errors.password?.message}</p>
                            <Link to={"/register"}>
                            <p>Don't have account ? <button style={{ color: '#fdca00' }}>Register</button></p>
                            </Link>
                           
                            <div className="">
                                <Btn type={'submit'} text={'Login'} />
                            </div>

                        </form>

                        <DevTool control={control} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login