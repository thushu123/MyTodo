import React, { useState } from 'react'
import { Bootstrap, Grid, Row, Col, Container, Form, Button, FormGroup, Label, Alert } from 'reactstrap';
import { useForm } from 'react-hook-form';
function AddUsers(props) {
    const [enteredFirstName, setFirstName] = useState('');
    const [enteredLastName, setLastName] = useState('')
    const [enteredEmail, setEmail] = useState('')
    const [enteredAge, setAge] = useState('');
    const [submited, setSubmited] = useState(false);
    // const[register,addUserHandler]= useForm();
    const [valid, setValid] = useState(false)
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: ""
    })


    // const [users, setUsers] = useState([{
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     age: ""
    // }]);
    const addUserHandler = (event) => {
        event.preventDefault();
        // if(enteredFirstName && enteredLastName && enteredEmail && enteredAge){
        //     setValid(true);
        // }
        //firstname
        props.onAddUser(enteredFirstName, enteredLastName, enteredEmail, enteredAge);

        if (!enteredFirstName) {
            setValid(false);
            setErrors({ ...errors, "firstName": "cannot be empty" });
        }
        if (typeof enteredFirstName !== "undefined") {
            if (!enteredFirstName.match(/^[a-zA-Z]+$/)) {
                setValid(false);
                setErrors({ ...errors, "firstName": "only letters" });
            }
        }
        //lastname
        if (!enteredLastName) {
            setValid(false);
            setErrors({ ...errors, "lastName": "cannot be empty" });
        }
        if (typeof enteredLastlastName !== "undefined") {
            if (!enteredLastName.match(/^[a-zA-Z]+$/)) {
                setValid(false);
                setErrors({ ...errors, "lastName": "only letters" });
            }
        }

        //Email
        if (!enteredEmail) {
            setValid(false);
            setErrors({ ...errors, "email": "cannot be empty" });
        }
        //Age

        if (!enteredAge) {
            setValid(false);
            setErrors({ ...errors, "age": "cannot be empty" });
        }
        setSubmited(true);
        // if(!errors){
        //     props.onAddUser(enteredFirstName ,enteredLastName,enteredEmail, enteredAge);

        // }
        console.log('errors', errors);

        setFirstName('');
        setLastName('');
        setEmail('');
        setAge('');
    }
    const firstNameNameHandler = (event) => {
        setFirstName(event.target.value);
    }
    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const ageHandler = (event) => {
        setAge(event.target.value);
    }

    return (
        <div>
            <Container>


                <Form onSubmit={addUserHandler} inline>

                    {submited && valid ? <Alert color="success">
                        Success
                    </Alert> : ""}
                    <Row form>
                        <Col md={6}>
                            <h2>Add User</h2>


                            <FormGroup>
                                <Label for="firstname" className="col-sm-2">FirstName</Label>

                                <input type="text" className="form-control" id="username" value={enteredFirstName} placeholder="FirstName" onChange={firstNameNameHandler} required />

                            </FormGroup>

                            <FormGroup>
                                <Label for="lastname" >Lastname</Label>
                                <input type="text" className="form-control" id="lastname" value={enteredLastName} placeholder="Lastname" onChange={lastNameHandler} required />
                            </FormGroup>

                            <FormGroup>
                                <Label for="email"  >Email</Label>

                                <input type="email" className="form-control" id="email" value={enteredEmail} placeholder="email" onChange={emailHandler} required />
                            </FormGroup>


                            <FormGroup>
                                <Label for="age" >Age</Label>
                                <input type="number" className="form-control" id="age" value={enteredAge} placeholder="Age" onChange={ageHandler} required />
                            </FormGroup>
                            <Button type="submit">Add User</Button>
                        </Col>
                    </Row>


                </Form>
            </Container>
        </div>



    )
}

export default AddUsers
