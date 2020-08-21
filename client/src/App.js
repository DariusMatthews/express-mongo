import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {users === null
        ? <p>Loading Users...</p>
        : users.length
          ? users.map(user => (
            <ul>
              <li key={user.id}>{user.name}</li>
            </ul>))
          : <h1>No Users Found</h1>
      }

      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <input type="text" name="name" value={name} placeholder="Enter name.." onChange={e => setName(e.target.value)} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
