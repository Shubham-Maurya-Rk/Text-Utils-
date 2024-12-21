import React from 'react'

export const Header = ({ title , setfiltertext}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        {/* eslint-disable-next-line */}
        <a className="navbar-brand" href="#">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* eslint-disable-next-line */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" onChange={(e) => setfiltertext(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
  )
}
