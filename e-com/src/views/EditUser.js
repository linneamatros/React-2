import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteUser, getUser, updateUser } from '../store/actions/userActions';

const EditUser = () => {

  const id = useParams().id
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser(id))
  }, [dispatch, id])

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const user = useSelector(state => state.userReducer.user);

  useEffect(() => {
    if(user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, [user])

  const handleSub = (e) => {
    e.preventDefault()

    dispatch(updateUser(id, {
      firstName,
      lastName,
      email,
    }))

    history.push('/admin')

  }

  const delUser = () => {
    dispatch(deleteUser(id))
    history.push('/admin')
  }

  return (
    <div className="d-flex justify-content-center mt-5">
        <div className="card w-25">
          <div className="card-header text-center">
            <h1>EDIT USER</h1>
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
              <button className="btn greenish-color btn-block mt-4">Save</button>
              <button className="btn btn-danger btn-block mt-3" type="button" onClick={delUser}>Delete User</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default EditUser