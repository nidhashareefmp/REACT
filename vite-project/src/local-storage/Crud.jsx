import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {

    const [formData, setformData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser)
            } catch (error) {
                console.log('Error parsing data', error);
                localStorage.removeItem("users"); //clear corrupted date

            }
        }
        setIsLoaded(true);
    }, []);

    //save users to localstorage (whenever user changes. only after initial load)
    useEffect(() => {
        if (isLoaded) { //only save after initial load is completed
            localStorage.setItem("users", JSON.stringify(users))

        }
    }, [users, isLoaded])

    const handleChange = (e) => {
        const { name, value } = e.target;  //called every time a user types or changes a form field.

        setformData(prev => ({
            ...prev, //uses the spread operator to keep other values unchanged.
            [name]: value // update formData using the input's name as key & the values as the new value.
        }))
    }

    const validate = () => {
        const newErrors = {};

        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = "Name is required!";
        else if (!/^[A-Za-z\s]*$/.test(name)) newErrors.name = "Name should only contain alphabets";

        if (!email) newErrors.email = "Email is required!";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email is invalid";

        if (!age) newErrors.age = "Age is required!";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ?
                formData : user));
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString() }
            setUsers([...users, newUser])
        }

        setformData({
            id: '',
            name: '',
            email: '',
            age: ''
        });
        setErrors({});
    }

    const handleEdit = (user) => {
        setformData(user);
        setEditMode(true);
    }

    const handleCancel = () => {
        setformData({ id: '', name: '', email: '', age: "" });
        setErrors({})
        setEditMode(false);
    }

    const handleClearAll = () => {
        if (window.confirm('Are you sure you want to clear all data? This action can not be undeon ')) {
            setUsers([]);
            localStorage.removeItem("users");
            // also clear the form if in edit mode 
            if (editMode) {
                setformData({ id: '', name: '', email: '', age: "" });
                setErrors({})
                setEditMode(false);
            }
        }
    }

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
    return (
        <div className='formnew'>
            <h1>React-crud</h1>
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
                    {errors.age && <p style={{ color: 'red' }}>{errors.age}
                    </p>}

                </div>


                <button type='submit'>{editMode ? 'Update User' : 'Add User'}
                </button>

                {editMode && (
                    <button type='button' style={{ marginLeft: '10px' }}
                        onClick={handleCancel}
                    >
                        Cancel</button>
                )}
            </form>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
            }}>
                <h2>User List</h2>
                {users.length > 0 && (
                    <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', marginLeft: '30px' }}
                    onClick={handleClearAll}
                    >
                        Clear All Data
                    </button>

                )}

            </div>

            {/* ------ table design ----- */}
            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button
                                        onClick={() => handleEdit(user)}>Edit</button>

                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={()=>handleDelete(user.id)}
                                    >Delete

                                    </button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>

            ) : (
                <p> No user added yet </p>

            )}
        </div>
    )
}



export default Crud
