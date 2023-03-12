import React from 'react';
import User from './User';
import users from '../data/users';




const UserList = () => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <User key={user.username} user={user} classLevel={user.classLevel} />
      ))}
    </div>
  );
};

export default UserList;
