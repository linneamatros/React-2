import React from 'react'

const User = ({user}) => {
  return (
    <div className="border rounded p-3 shadow mb-4">
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default User