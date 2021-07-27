import React from 'react';
import '../css/signup.css';


const SignUp = () => {
    return (
            <div className="box">
                <div className="logo">
                    <h1>Easyt-app</h1>
                </div>

                <div className="container">
                    <form className="row g-3">
                        <div className="col-6">
                            <label for="inputEmail4" className="form-label">Nombre</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Segundo nombre</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-6">
                            <label for="inputAddress" className="form-label">Apellido paterno</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-6">
                            <label for="inputAddress2" className="form-label">Apellido materno</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-7"> 
                        <label for="inputAddress2" className="form-label">Correo</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label for="inputCity" className="form-label">Contraseña</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label for="inputZip" className="form-label">Teléfono</label>
                            <input type="phone" className="form-control"/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary boton mt-5">Registrarse</button>
                        </div>
                    </form>
                </div>
                
            </div>
    )
}

export default SignUp;