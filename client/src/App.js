import React, { useState, useEffect } from 'react';
import Card from './Card';
import logo from './logo.svg';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  const userList = users.map(user => <Card key={user.id} user={user}/>)
  return (
    <div className="App">
      {userList}
    </div>
  );
}

export default App;
