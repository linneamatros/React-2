import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Login from './views/Login';
import Admin from './views/Admin';
import AddUser from './views/AddUser';
import EditUser from './views/EditUser';
import UserList from './views/UserList';
// import { ProtectedRoute } from './routes/ProtectedRoute';
import { AdminRoute } from './routes/AdminRoute';
import { getUsers } from './store/actions/usersActions';
import { checkUser } from './store/actions/authActions';




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser())
    dispatch(getUsers())
  }, [dispatch])




  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users" component={UserList} />
          <AdminRoute exact path="/admin" component={Admin} />
          <AdminRoute exact path="/add-user" component={AddUser} />
          <AdminRoute exact path="/admin/manage/:id" component={EditUser} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;