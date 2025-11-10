
import { useContext } from "react";
import { FaHouseUser } from "react-icons/fa";
import { UserApiContext } from "./UserApiContext";


const UserList = () => {
    const { users, loading } = useContext(UserApiContext);

    if (loading) return <p>Loading....</p>

    console.log(users, 'koijhugtfd');



    return (
        <div>
            <h2> <FaHouseUser /> Users</h2>


            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} — {user.email}
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default UserList
