import React from 'react'

function UserProfile() {
  return (
    <div className='user-profile' >
      <form action="">
        
        <h1>Edit User Profile</h1>
        <div className="profile-container">
        <input type="email" name='email' id='email' />
        <label htmlFor="email">Reset Email</label>
        </div>

        <div className="profile-container">
        <input type="text" name='password' id='password' />
        <label htmlFor="password">Reset Email</label>
        </div>

        <button type='submit' >Update user Profile</button>
        

      </form>
    </div>
  )
}

export default UserProfile