import React from 'react'
import bg from '../assets/bg.jpg'
import Products from './Products';

export default function Home() {
  return (
      <div className="hero">
          <div className="card bg-dark text-black border-0">
              <img src={bg} className="card-img" alt="Background" style={{ height: '550px'}} />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="container">
                      <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASOMARRIVALS</h5>
                      <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                  </div>
                  
              </div>
          </div>
          <Products/>
     </div>
  )
}
