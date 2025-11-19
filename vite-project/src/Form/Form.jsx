import React, { useState } from 'react'
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        gender: ''

    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;  //called every time a user types or changes a form field.

        setFormData(prev => ({
            ...prev, //uses the spread operator to keep other values unchanged.
            [name]: value // update formData using the input's name as key & the values as the new value.
        }))
    }



    //-------------- VALIDATION ------------
    const validation = () => {
        const newErrors = {};

        const { name, email, age, password, confirmPassword, gender } = formData;

        if (name.trim()) newErrors.name = "Name is required";
        else if (!/^[A-Za-z\s]*$/.test(name)) newErrors.name = "name should only contain alphabet";

        if (!email) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email is Invalid"

        if (!age) newErrors.age = "age is required!";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "age must be between 1 and 120";

        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Password must be atleast 6 charachters";

        if (!confirmPassword) newErrors.confirmPassword = "please confirm your password";
        else if (password !== confirmPassword) newErrors.confirmPassword = "Password do not match.";

        if (!gender) newErrors.gender = "gender is required";

        return newErrors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("form submitted successfully");
            console.log('form data', formData);

            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmPassword: '',
                gender: ''
            })

        }


    }

    return (
        <form onSubmit={handleSubmit}>
            {/* name  */}
            <div>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    placeholder='Name'
                    onChange={handleChange}
                />
            </div>
            {errors.name && <p style={{ color: 'red' }}>{errors.name}
            </p>}

            {/* email  */}
            <div>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    placeholder='your email'
                    onChange={handleChange}
                />
            </div>
            {errors.email && <p style={{ color: 'red' }}>{errors.email}
            </p>}

            {/* age  */}
            <div>
                <input
                    type='text'
                    name='age'
                    value={formData.age}
                    placeholder='your age'
                    onChange={handleChange}
                />
            </div>
            {errors.age && <p style={{ color: 'red' }}>{errors.age}
            </p>}

            {/* password  */}
            <div>
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    placeholder='your password'
                    onChange={handleChange}
                />
            </div>
            {errors.password && <p style={{ color: 'red' }}>{errors.password}
            </p>}

            {/* confirmPassword  */}
            <div>
                <input
                    type='password'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    placeholder='confirm password'
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}
                </p>}
            </div>


            {/* gender  */}
            <div>
                <label>
                    {/* male  */}
                    <input
                        type='radio'
                        name='gender'
                        value={'Male'}
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                    />Male
                </label>
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender}
                </p>}

                {/* female  */}
                <label>
                    <input
                        type='radio'
                        name='gender'
                        value={'Female'}
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                    />Female
                </label>
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender}
                </p>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
