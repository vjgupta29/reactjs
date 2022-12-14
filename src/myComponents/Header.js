import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">{props.title}</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                  Trade Injection Tool
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-items" href="#">UAT</a></li>
                                  <li><a className="dropdown-item" href="#">QA</a></li>
                                  <li><a className="dropdown-item" href="#">DEV</a></li>
                              </ul>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                  Trade Injection Tool
                              </a>
                              {props.searchbar?<ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="#">UAT1</a></li>
                                  <li><a className="dropdown-item" href="#">QA2</a></li>
                                  <li><a className="dropdown-item" href="#">DEV3</a></li>
                              </ul>:""}
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Features</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Pricing</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown link
                              </a>
                              <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
  )
}

Header.defaultProps = {
    title: "Neuron Dashboard"
}

Header.propTypes = {
    title: PropTypes.string
}