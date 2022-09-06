import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";

function UserProfile({myEmail, setMyEmail, myPassword, setMyPassword}) {
  const [email, setEmail] = useState(myEmail);
  const [password, setPassword] = useState(myPassword);

  

  const handleUpdate = (e) =>{

    e.preventDefault();

    setMyEmail(email);
    setMyPassword(password);
  }



  return (
    <div className="user-profile">
      <form onSubmit={handleUpdate}>
        <Logo />
        <h1>Login</h1>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="reset email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="reset password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UserProfile;
