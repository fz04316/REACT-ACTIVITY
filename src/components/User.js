import React from 'react';


const User = ({ user, classLevel }) => {
  const { username, firstName, lastName, school, email, profilePicture } = user;

  const textColor = classLevel === 'Freshmen' ? 'green' : 'black';

  return (
    <div className="user">
      <img src={profilePicture} alt="Profile" />
      <div className="info">
        <p style={{ color: textColor }}>{'Full Name: '}{firstName} {lastName}</p>
        <p style={{ color: textColor }}>{'Username: '}@{username}</p>
        <p style={{ color: textColor }}>{'School: '}{school}</p>
        <p style={{ color: textColor }}>{'Email: '}{email}</p>
        <p style={{ color: textColor }}>{'Class Level: '}{classLevel}</p>
      </div>
    </div>
  );
};

export default User;
