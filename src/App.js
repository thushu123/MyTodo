import logo from './logo.svg';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uFname,uLname,uEmail, uAge) => {

    setUsersList((prevUsersList) => {
      return [...prevUsersList, { firstname: uFname,lastname:uLname,email:uEmail, age: uAge, id: Math.random().toString() }]
    })
     
  };
  return (
    <div className="App">

      <AddUsers onAddUser={addUserHandler}></AddUsers>
      
      <UsersList users={usersList} ></UsersList> 
     
    </div>
  );
}

export default App;
