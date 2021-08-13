import React, { useState } from 'react'

function UsersList(props) {
    //   const [users , getUsers] = useState([]);
    console.log('users', props.users);
    console.log('mapping', props.users.map((user)=>(
    {user}
    )));
    return (
        
            
   
     <ul>
         {props.users.map((user) => (
                <li>
                    {user.name} {user.age}
                </li> 
            ))} 
            
           
        </ul>
      
        

    
    )
}

export default UsersList
