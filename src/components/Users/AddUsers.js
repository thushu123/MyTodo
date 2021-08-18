import React, { useState } from 'react'
import { Row, Col, Container, Form, Button, FormGroup, Label, Alert } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
const schema = Yup.object({
    firstName: Yup.string().required('FirstName is Required').min(2),
    lastName: Yup.string().required('LastName is Required').min(1),
    email: Yup.string().email().required(),
    age: Yup.number().positive().integer().
    required("Please enter age.").typeError('Age must be a number'),
    
}).defined();
function AddUsers(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    const [enteredFirstName, setFirstName] = useState('');
    const [enteredLastName, setLastName] = useState('')
    const [enteredEmail, setEmail] = useState('')
    const [enteredAge, setAge] = useState('');
    const [submited, setSubmited] = useState(false);
    const [valid, setValid] = useState(false)
    const addUserHandler = (event) => {
        event.preventDefault();
        props.onAddUser(enteredFirstName, enteredLastName, enteredEmail, enteredAge);
        setFirstName('');
        setLastName('');
        setEmail('');
        setAge('');
    }
    // const firstNameNameHandler = (event) => {
    //     setFirstName(event.target.value);
    // }
    // const lastNameHandler = (event) => {
    //     setLastName(event.target.value);
    // }
    // const emailHandler = (event) => {
    //     setEmail(event.target.value); 
    // }
    // const ageHandler = (event) => {
    //     setAge(event.target.value);
    // }

    return (
        <div>
            <Container>

                <Form onSubmit={handleSubmit(addUserHandler)} inline>

                    {submited && valid ? <Alert color="success">
                        Success
                    </Alert> : ""}
                    <Row form>
                        <Col md={6}>
                            <h2>Register</h2>
                            <FormGroup>
                                <Label for="firstName" className="col-sm-2">FirstName</Label>
          
                                <input type="text" className="form-control"  onChange={(e) => setFirstName(e.target.value)}  id="firstName" value={enteredFirstName} placeholder="FirstName"  {...register('firstName')} />
                                <p  style={{color:'red'}} > {errors.firstName?.message} </p>

                            </FormGroup>

                            <FormGroup>
                                <Label for="lastName" >Lastname</Label>
                                <input type="text" className="form-control" id="lastname" value={enteredLastName} onChange={(e) => setLastName(e.target.value)}  placeholder="Lastname" {...register('lastName')} />
                                <p  style={{color:'red'}}> {errors.lastName?.message} </p>

                            </FormGroup>

                            <FormGroup>
                                <Label for="email"  >Email</Label>

                                <input type="email" name="email" className="form-control" id="email"  onChange={(e) => setEmail(e.target.value)}  value={enteredEmail} placeholder="email"  {...register('email')} />
                                <p  style={{color:'red'}}> {errors.email?.message} </p>

                            </FormGroup>


                            <FormGroup>
                                <Label for="age" >Age</Label>
                                <input type="number" name="age" className="form-control" id="age"  ononChange={(e) => setAge(e.target.value)}   value={enteredAge} placeholder="Age" {...register('age')} />
                                <p  style={{color:'red'}}> {errors.age?.message} </p>

                            </FormGroup>
                            <Button type="submit">Register</Button>
                        </Col>
                    </Row>


                </Form>
            </Container>
        </div>



    )
}

export default AddUsers
