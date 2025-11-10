import {  createContext, useEffect, useState } from "react";

export const UserApiContext = createContext();

export const UserApiProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json();
                console.log(data);
                setUsers(data);
            } catch (error) {
                console.log('Error Fetching', error);

            } finally {
                setLoading(false);
            }

        }

        fetchUser();
    }, [])
    
    return (
        <UserApiContext.Provider value={{ users, loading }}>
            {children}
        </UserApiContext.Provider>
    )
}