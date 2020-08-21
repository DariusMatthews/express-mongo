import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // POST new user on submit
    fetch('/api/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
      .then(res => res.json())
      .catch(err => { throw err });

    setName('');
  }

  useEffect(() => {
    // GET users when mounted and when users updates
    fetch('/api/users')
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(err => console.log(err))
  }, [users])

  return (
    <div className="App">
      {users === null
        ? <p>Loading Users...</p>
        : users.length
          ? users.map((user, i) => (
            <ul>
              <li key={i}>{user.name}</li>
            </ul>))
          : <h1>No Users Found</h1>
      }

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} placeholder="Enter name.." onChange={e => setName(e.target.value)} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
