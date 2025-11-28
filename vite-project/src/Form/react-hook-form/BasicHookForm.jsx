import React from 'react'
import './rhf.css'
import { useForm } from 'react-hook-form'

const BasicHookForm = () => {
    //initialising the form hook(for managing form)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        reset();

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                {/* name */}
                <label>Name:</label>
                <input
                    {...register("name", { required: 'Name is required' })} />
                {errors.name && <p style={{ color: 'red' }} >{errors.name.message}</p>}


                {/* email */}
                <label>Email</label>
                <input
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'invalid email'
                        }
                    })} />
                {errors.email && <p style={{ color: 'red' }}>
                    {errors.email.message}</p>}

                    <button type='submit'>Submit</button>

                <button type='reset' onClick={() => reset()}>Reset</button>

            </form>
        </div>
    )
}

export default BasicHookForm