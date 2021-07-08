import { useSelector } from 'react-redux'
import User from '../components/login-user/User'

const UserList = () => {

  const users = useSelector(state => state.users.list)

  return (
    <div className="container mt-5">
      {
        users.map(user => (
          <User key={user.id} user={user} />
        ))
      }
    </div>
  )
}

export default UserList