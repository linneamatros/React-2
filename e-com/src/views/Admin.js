import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import User from '../components/login-user/User'


const Admin = () => {

  const users = useSelector(state => state.users.list)

  return (
    <div className="container mt-5">
      <h1 className="text-center">ADMIN</h1>
      <Link className="btn btn-primary mb-5" to="/add-user">Add User</Link>
      {
        users.map(user => (
          <Link to={`/admin/manage/${user.id}`} className="text-dark" key={user.id}>
            <User user={user} />
          </Link>
        ))
      }
    </div>
  )
}

export default Admin