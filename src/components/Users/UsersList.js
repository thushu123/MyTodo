import React, { useState } from 'react'

function UsersList(props) {
    //   const [users , getUsers] = useState([]);
    console.log('users', props.users);
    console.log('mapping', props.users.map((user)=>(
    {user}
    )));

    // if(props.users){
    //   const  usersList = props.users.map(user => (
    //         <h2>{user.name} {user.age}</h2>
    //     ))
    // }
    return (
        <div>
           
        {/* {usersList } */}
        <ul>
         {props.users.map((user) => (
                <li>
                    {user.name} {user.age}
                </li> 
            ))} 
            
           
        </ul>
        

        </div>
    )
}

export default UsersList
