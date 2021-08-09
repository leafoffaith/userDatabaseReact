import React, { useState } from 'react';

// import Card from './Components/Card';
import UserForm from './Components/User Form/UserForm';
import List from './Components/List'

import './index.css';

function App() {

  // let users = [
    // {
    //   id: 'e1',
    //   name: 'John',
    //   age: 31
    // },
  //   {
  //     id: 'e2',
  //     name: 'Doe',
  //     age: 19
  //   },
  // ]

  let [allUsers, setAllUsers] = useState([
    {
      id: 'e1',
      name: 'John',
      age: 31
    },
  ]);

  const onReceiveHandler = (x) => {
    console.log(x)
    setAllUsers([...allUsers, x])
  }


  return (
    <div>
      {/*Form Div */}
      <UserForm props onReceive={onReceiveHandler} />
      <List users={allUsers} />
    </div>
  );
}

export default App;
