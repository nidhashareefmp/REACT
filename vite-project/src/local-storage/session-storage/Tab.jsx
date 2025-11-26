import React, { useEffect, useState } from 'react'
import './tab.css'

const Tab = () => {

    const [formData, setformData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    });

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const stored = sessionStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);
            } catch (error) {
                console.log('Error parsing session data', error);
                sessionStorage.removeItem("users");
            }
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            sessionStorage.setItem("users", JSON.stringify(users));
        }
    }, [users, isLoaded]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setformData(prev => ({
            ...prev,
            [name]: value
        }));
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
            setUsers(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString() };
            setUsers([...users, newUser]);
        }

        setformData({ id: '', name: '', email: '', age: '' });
        setErrors({});
    };

    const handleEdit = (user) => {
        setformData(user);
        setEditMode(true);
    };

    const handleCancel = () => {
        setformData({ id: '', name: '', email: '', age: "" })
        setErrors({});
        setEditMode(false);
    };

    const handleClearAll = () => {
        if (window.confirm('Are you sure to clear all data? This cannot be undone!')) {
            setUsers([]);
            sessionStorage.removeItem("users");

            if (editMode) {
                handleCancel();
            }
        }
    }

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className='formnew'>
            <h1> Session Storage</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        placeholder='Name'
                        onChange={handleChange}
                    />
                </div>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                <div>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        placeholder='Email'
                        onChange={handleChange}
                    />
                </div>
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                <div>
                    <input
                        type='text'
                        name='age'
                        value={formData.age}
                        placeholder='Age'
                        onChange={handleChange}
                    />
                </div>
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}

                <button type='submit'>{editMode ? 'Update' : 'Add User'}</button>

                {editMode && (
                    <button
                        type='button'
                        style={{ marginLeft: '10px' }}
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
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
                                    <button onClick={() => handleEdit(user)}>Edit</button>
                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => handleDelete(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <p>No users added yet...</p>}
        </div>
    );
};

export default Tab;
