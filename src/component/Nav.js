import React from 'react'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <h3 className="navbar-brand ">Buy & Sell</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/Bike">Bike</a></li>
                                <li><a className="dropdown-item" href="/Car">Car</a></li>
                                <li><a className="dropdown-item" href="/Mobile">Mobile</a></li>
                                <li><a className="dropdown-item" href="/Fruit">Fruit</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {/* <button className='btn btn-primary' href="/login">login</button> */}
                        <button className='btn btn-success mb-2'><a className='text-light' href="/login">Login</a></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
