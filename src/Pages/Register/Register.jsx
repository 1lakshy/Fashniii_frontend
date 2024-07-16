import React from 'react'
import './login.css';
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
import { MdOutlineMarkEmailRead, MdLockOutline, MdOutlinePerson } from "react-icons/md";
import Btn from '../../Components/layout/Btn';
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux";
import {register as registerUser} from "../../Actions/userAction"



const Register = () => {
    const form = useForm();
    const dispatch = useDispatch();
    const { register, control, setValue, handleSubmit, formState: { errors } } = form;

    const handleImageChange = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const base64Image = await convertToBase64(file);

            // Use setValue instead of field.setValue
            setValue('avatar', base64Image);
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

    const formSubmit = (data) => {
        console.log(data);
    }
    const RegisterFormSubmit = (data) => {
        // dispatch(login(data))
        dispatch(registerUser(data.email,data.name,data.password,data.avatar))
        console.log(data)
    }
    return (
        <>
            <div className="" style={{ width: "100%", position: "absolute", display: 'flex' ,overflow:"hidden"}}>
                <div className="loginUi" style={{ width: "50%", height: "100vh", padding: "4rem" }}>
                    <div>
                        <h2 className="heading" style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Dress yourself in confidence ,</h2>
                        <h1 className="maxHeading text-slate-800">
                            "for style is the silent expression of individuality, <br /> and each garment tells a story of self-discovery."
                        </h1>
                    </div>
                </div>
                <div className="loginCont" style={{ flex: 1 }}>

                    <div className="loginDiv" style={{}}>
                        <h1 className='heading' style={{ fontSize: "4rem" }}>
                            Register
                        </h1>

                        <form onSubmit={handleSubmit(RegisterFormSubmit)} action='#' noValidate className='form' encType='multipart/form-data'>
                            <div className="input">
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
                                <MdOutlinePerson />
                                <input type="text" id="name" {...register('name', {
                                    required: {
                                        value: true,
                                        message: "Please provide Full Name "
                                    },

                                })} name="name"
                                    placeholder='Full Name' />

                            </div>
                            <p className='tiny'>{errors.name?.message}</p>
                            <div className="input">
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
                            <div className="">

                                <Controller
                                    name="avatar"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Image is required' }}
                                    render={({ field }) => (

                                        <div>
                                            {console.log("hello",field.value)}
                                            {(
                                                <div className='previewWrapper'>
                                                    <p>Image Preview:</p>
                                                    <img
                                                        src={field.value ? field.value : "/preview.png" }
                                                        alt="Image Preview"
                                                        style={{ maxWidth: '350px', maxHeight: '350px', 
                                                        height:"350px",width:"350px",borderRadius:'50%' }}
                                                    />
                                                </div>
                                            )}
                                            <input
                                                type="file"
                                                onChange={(e) => {
                                                    field.onChange(e); // This is necessary for react-hook-form to update its internal state
                                                    handleImageChange(e); // Handle custom logic for updating the form state
                                                }}
                                            />
                                            {errors.avatar && <p>{errors.avatar.message}</p>}
                                        </div>
                                    )}
                                />

                            </div>


                            <Link to={"/login"}>
                            <p>Have a account ? <button style={{ color: '#fdca00' }}>Login</button></p>
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

export default Register