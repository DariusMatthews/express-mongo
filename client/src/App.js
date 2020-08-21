import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);

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
    </div>
  );
}

export default App;
