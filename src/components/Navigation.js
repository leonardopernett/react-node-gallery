import React from 'react'
import {Link} from 'react-router-dom'
export default function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/images">React Gallery</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/images/new">Upload a Image</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/images">Images</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}
