import React, { useState } from 'react'
import { NavItem } from 'react-bootstrap';
import { Table } from "reactstrap";

function UsersList(props) {
    console.log('users', props.users);
    props.users.map((user) => (
        { user }
    ));

    return (
      
        <Table bordered>
            
             <thead>
             <tr>
                 <th>#</th>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Email</th>
                 <th>Age</th>

             </tr>
         </thead>
         {props.users ? 
         <tbody>
             {props.users.map((user, index) => (
                 <tr key={user.id}>
                     <th scope="row">{index + 1}</th>
                     <td>{user.firstname}</td>
                     <td>{user.lastname}</td>
                     <td>{user.email}</td>
                     <td>{user.age}</td>
                 </tr>

             ))}

         </tbody> :" No users" }
           
        </Table>
    )
}

export default UsersList
