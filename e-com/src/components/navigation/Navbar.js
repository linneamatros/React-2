import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from '../cart/shoppingCart';
import { useSelector } from 'react-redux';



const Navbar = () => {

  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity)




  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">BIRDIE</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" aria-current="page" to="/products">Products</NavLink>
          </li>
        </ul>

          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link " aria-current="page" to="/login">Log in</NavLink>

          </li>

          <li className="nav-item me-3 me-lg-3 dropdown">
            <span
              className="nav-link dropdown-toggle hidden-arrow"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
           <span className="badge badge-pill bg-danger me-1">{totalCartQuantity}</span>
          <i className="fas fa-shopping-cart"></i>
        </span>

        <ul className="dropdown-menu dropdown-menu-lg-end p-2" aria-labelledby="navbarDropdown">
           <ShoppingCart />
        </ul>

        </li>
      </ul>
     </div>
    </div>
  </nav>

  )
}

export default Navbar
