import React ,{useState} from 'react'

function UsersList(props) {
  const [users , getUsers] = useState([]);
    return (
        <div>
            <ul>
                {props.users.map((user) => 
                <li>
                    {user.name} {user.age} years old
                </li>) }
            </ul>
        </div>
    )
}

export default UsersList
