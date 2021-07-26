import React, { useRef } from 'react'
import './styles.css'

import { useForm } from "react-hook-form";
export const Registration = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef();
    password.current = watch("password");
    console.log(watch('email'))

    const onSubmit = (data) => {
        console.log('data', data)
        alert('Form Submitted succesfully')
    };

    return (
        <div>
            <h1>Welcome to Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)} >

                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                />

                {errors.email && <p>This email field is required</p>}

                <label>Name</label>
                <input
                    name="name"
                    {...register('name', { required: true, maxLength: 10 })}
                />
                {errors.name && errors.name.type === "required"
                    && <p> This name field is required</p>}

                {errors.name && errors.name.type === "maxLength"
                    && <p> Your input exceed maximum length</p>}

                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    {...register('password', { required: true, minLength: 6 })}
                />
                {errors.password && errors.password.type === "required"
                    && <p> This name field is required</p>}
                {errors.password && errors.password.type === "minLength"
                    && <p> Password must have at least 6 characters</p>}

                <label>Password Confirm</label>
                <input
                    type="password"
                    name="password_confirm"
                    {...register('password_confirm', {
                        required: true,
                        validate: (value) =>
                        value === password.current
                    })}
                />

                {errors.password_confirm && errors.password_confirm.type === "required"
                    && <p> This password confirm field is required</p>}
                {errors.password_confirm && errors.password_confirm.type === "validate"
                    && <p>The passwords do not match</p>}

                <input type="submit" style={{ marginTop: '40px' }} />


            </form>
        </div>
    )
}
