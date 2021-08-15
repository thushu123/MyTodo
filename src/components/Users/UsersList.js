import React from 'react'
import { Table } from "reactstrap";

function UsersList(props) {
    console.log('users', props.users);
    props.users.map((user) => (
        { user }
    ));

    return (


        <div>
            {props.users.length ? (
                <Table>
                    <thead>
                        <tr>

                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Age</th>

                        </tr>
                    </thead>
                    <tbody>

                        {props.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>

                        ))}

                    </tbody>
                </Table>) : (
                <h3>No Users</h3>
            )}

        </div>
    )
}

export default UsersList
