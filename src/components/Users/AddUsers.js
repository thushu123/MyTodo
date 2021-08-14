import React, { useState } from 'react'
import { Bootstrap, Grid, Row, Col, Container, Form, Button } from 'reactstrap';

function AddUsers(props) {
    const [enteredFirstName, setFirstName] = useState('');
    const [enteredLastName, setLastName] = useState('')
    const [enteredEmail, setEmail] = useState('')
    const [enteredAge, setAge] = useState('');
    const [submited, setSubmited] = useState(false);
    const [valid , setValid] = useState(false)
    const[errors,setErrors]  =useState({
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
        if(!enteredFirstName){
            setValid(false);
            setErrors({...errors, "firstName" : "cannot be empty"});
        }
        if(typeof enteredFirstName !== "undefined"){
            if(!enteredFirstName.match(/^[a-zA-Z]+$/)){
                setValid(false);
                setErrors({...errors,"firstName" : "only letters"});
            }        
         }
         //lastname
         if(!enteredLastName){
            setValid(false);
            setErrors({...errors,"lastName" : "cannot be empty"});
        }
        if(typeof enteredLastlastName !== "undefined"){
            if(!enteredLastName.match(/^[a-zA-Z]+$/)){
                setValid(false);
                setErrors({...errors,"lastName" : "only letters"});
            }        
         }
    
         //Email
         if(!enteredEmail){
            setValid(false);
            setErrors({...errors,"email" : "cannot be empty"});
        }
         //Age
    
         if(!enteredAge){
            setValid(false);
            setErrors({...errors,"age" : "cannot be empty"});
         }
        setSubmited(true);
        if(!errors){
            props.onAddUser(enteredFirstName ,enteredLastName,enteredEmail, enteredAge);

        }
        console.log('errors',errors);

        setFirstName('');
        setLastName('');
        setEmail('');
        setAge('');
    }
    const firstNameNameHandler = (event) => {
        setFirstName(event.target.value );
    }
    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }
    const emailHandler = (event) => {
        setEmail( event.target.value );
    }
    const ageHandler = (event) => {
        setAge( event.target.value );
    }

    return (
        <div>
            {/* <ErrorModal title="An error occured!" message="Something went wrong!" /> */}
            <div className="form-container">
                {/* <div className="row">
                    <div className="col-md-6"> */}
                <h2>Add User</h2>

                <Form className="register-form" onSubmit={addUserHandler}>
                   {submited && valid ?<div className="success-message ">success !!!</div> :""} 
                    <div className="form-group row">
                        <label htmlFor="firstname" className="col-sm-2 col-form-label">FirstName</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username" value={enteredFirstName} placeholder="FirstName" onChange={firstNameNameHandler} />
                        </div>
                        {/* {submited && ! enteredFirstName ? <span>FirstName is required</span>:""} */}
                        {/* <span style={{color: "red"}}>{errors.firstName}</span> */}

                    </div>

                    <div className="form-group row ">
                        <label htmlFor="lastname" className="col-sm-2 col-form-label">Lastname</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="lastname" value={enteredLastName} placeholder="lastname" onChange={lastNameHandler} />
                            {/* <span style={{color: "red"}}>{errors.lastName}</span>
                           <br/> */}
                        </div>
                        {/* {submited && ! enteredLastName ? <span>LastName is required</span>:""} */}
                    </div>
                    <div className="form-group row ">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" value={enteredEmail} placeholder="email" onChange={emailHandler} />
                        
                            {/* <span style={{color: "red"}}>{errors.email}</span>
                            <br/> */}
</div>
                        {/* {submited && ! enteredEmail ? <span>Email is required</span>:""} */}

                    </div>

                    <div className="form-group row">
                        <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="age" value={enteredAge} placeholder="Age" onChange={ageHandler} />
                            {/* <span style={{color: "red"}}>{errors.age}</span>
                            <br/> */}

                        </div>
                        {/* {submited && ! enteredAge? <span>Age is required</span>:""} */}


                    </div>
                    <Button type="submit">Add User</Button>
                </Form>
            </div>
        </div>
       
    )
}

export default AddUsers
