import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
              <div className="container">
                  <a className="navbar-brand fw-bold fs-4" href={{}}>LA COLLECTION</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link to='/products' className="nav-link" >Products</Link>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href={{}}>About</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href={{}}>Contact</a>
                          </li>
                      </ul>
                      <div className="buutons">
                          <a href={{}} className="btn btn-outline-dark">
                              <i className="fa fa-sign-in me-1"> Login</i>
                          </a>
                          <a href={{}} className="btn btn-outline-dark ms-2">
                              <i className="fa fa-user-plus me-2"> Register </i>
                          </a>
                          <a href={{}} className="btn btn-outline-dark ms-2">
                              <i className="fa fa-shopping-cart me-1"> Crat(0)</i>
                          </a>
                     </div>
                  </div>
              </div>
          </nav>
    </div>
  )
}
