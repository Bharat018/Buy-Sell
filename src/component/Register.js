import React from 'react'

function Register() {
    return (
            <div className=" d-flex align-items-center h-100 gradient-custom-3 py-5">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card">
                                <div className="card-body bg-dark text-white p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" >Your Name</label>
                                            <input type="text" id="name" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" >Your Email</label>
                                            <input type="email" id="email" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label">Password</label>
                                            <input type="password" id="psw" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label">Repeat your password</label>
                                            <input type="password" id="repsw" className="form-control form-control-lg" />    
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3cg"
                                            />
                                            <label className="form-check-label" htmlFor="form2Example3g">
                                                I agree all statements in <a href="/" className="text-white-50"><u>Terms of service</u></a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/Login" className="fw-bold text-white"><u>Login here</u></a></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Register
