import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/signup.css';
import { Context } from '../store/appContext';


const SignUp = props => {

    const {store, actions } = useContext(Context)
    const history = useHistory()


    return (
            <div className="box">
                <div className="logo">
                    <h1>Easyt-app</h1>
                </div>

                <div className="container">
                    <form className="row g-3" onSubmit={e => actions.register(e, props,history)}>
                        <div className="col-6">
                            <label for="inputEmail4"  className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="primerNombre" name="primerNombre"
                            value={store.primerNombre}
                            onChange={actions.handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Segundo nombre</label>
                            <input type="text" className="form-control" id="segundoNombre" name="segundoNombre"
                            value={store.segundoNombre}
                            onChange={actions.handleChange}
                            />
                        </div>
                        <div className="col-6">
                            <label for="inputAddress" className="form-label">Apellido paterno</label>
                            <input type="text" className="form-control" id="apellidoPaterno" name="apellidoPaterno"
                            value={store.apellidoPaterno}
                            onChange={actions.handleChange}
                            />
                        </div>
                        <div className="col-6">
                            <label for="inputAddress2" className="form-label">Apellido materno</label>
                            <input type="text" className="form-control" id="apellidoMaterno" name="apellidoMaterno" 
                            value={store.apellidoMaterno}
                            onChange={actions.handleChange}
                            />
                        </div>
                        <div className="col-7"> 
                        <label for="inputAddress2" className="form-label">Correo</label>
                            <input type="text" className="form-control" id="email" name="email" 
                            value={store.email}
                            onChange={actions.handleChange}
                            />
                        </div>
                        <div className="col-md-5">
                            <label for="inputCity" className="form-label">Contraseña</label>
                            <input className="form-control" type="password" id="contrasena" name="contrasena" 
                            value={store.contrasena}
                            onChange={actions.handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <label for="inputZip" className="form-label">Teléfono</label>
                            <input type="phone" className="form-control" id="fono" name="fono"
                            value={store.fono}
                            onChange={actions.handleChange}
                            />
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