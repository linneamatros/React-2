import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../store/actions/authActions';

const AddUser = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSub = (e) => {
    e.preventDefault()

    dispatch(addUser({
      firstName,
      lastName,
      email,
      password
    }))

    history.push('/admin')
  }

  return (
    <div className="d-flex justify-content-center mt-5">
        <div className="card w-25">
          <div className="card-header text-center">
            <h1>ADD USER</h1>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSub}>
              <div className="mb-3">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <button className="btn btn-primary btn-block">Save</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default AddUser