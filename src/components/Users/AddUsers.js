import React, { useState } from 'react'
import { Bootstrap, Grid, Row, Col, Container, Form, Button } from 'react-bootstrap';

function AddUsers(props) {
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');
    const [users , setUsers] = useState([]);
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            alert('Username and Age cannot be empty');
        
        }
        if (+enteredAge <1 ){
           alert('Age cannot be less than one');
        }
        // console.log(enteredUsername, enteredAge);
        //  setUsers(prevUsers => [...prevUsers, {
        //           id: prevUsers.length,
        //           value: getRandomNumber()
        //         }]);
        // setUsers( users => [...users, `${users.length}`]);
        setUsers([...users, `${users.length}`]);
        

        console.log('users' , users);

        setUsername(''); 
        setAge('');
    }
    const userNameHandler = (event) => {
        setUsername(event.target.value);
    }
    const ageHandler = (event) => {
        setAge(event.target.value);
    }
    return (
        <div>

            {/* <Form  onSubmit={addUserHandler}>
                        <div classNameName="form-group ">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username"></input>
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="age">Age </label>
                            <input type="text" id="age"></input>
                        </div>
                        <Button type="submit">Add User</Button>
                    </Form> */}

            <div class="container">
                <div class="row">
                    <div className="col-md-6">
                        <h2>Add User</h2>

                        <form onSubmit={addUserHandler}>
                            <div className="form-group row ">
                                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="username" value={enteredUsername} placeholder="username" onChange={userNameHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="age" value={enteredAge} placeholder="Age" onChange={ageHandler} />
                                </div>
                            </div>
                            <Button type="submit">Add User</Button>
                        </form>
                    </div>
                </div>
            </div>

        </ div>



    )
}

export default AddUsers
