import React, { useState } from 'react'
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        age:'',
        password:'',
        confirmPassword:'',
        gender:''

    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;  //called every time a user types or changes a form field.

        setFormData(prev => ({
            ...prev, //uses the spread operator to keep other values unchanged.
            [name]:value // update formData using the input's name as key & the values as the new value.
        }))
    }

  return (
    <form>
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

        {/* confirmPassword  */}
         <div>
            <input
            type='password'
            name='confirmpassword'
            value={formData.confirmPassword}
            placeholder='confirm password'
            onChange={handleChange}
            />
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
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
