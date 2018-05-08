import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  state = {
    isActive: false
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <NavLink className="navbar-item" to="/" className="logo">
            Company name
          </NavLink>
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark">Features</a>
          <a className="p-2 text-dark">Enterprise</a>
          <a className="p-2 text-dark">Support</a>
          <a className="p-2 text-dark">Pricing</a>
        </nav>
        <a className="btn btn-outline-primary">Sign up</a>
      </div>
    )
  }
}

export default Header
