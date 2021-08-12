import logo from './logo.svg';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
import TestItems from './components/Users/TestItems';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React hi hi 
        </a>
      </header> */}
      <AddUsers></AddUsers>
      <UsersList users={[]}></UsersList>
      {/* <TestItems></TestItems> */}
    </div>
  );
}

export default App;
