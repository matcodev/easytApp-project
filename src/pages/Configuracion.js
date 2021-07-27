import "../css/configuracion.css"

const Configuracion = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="box">
                    <form className="row g-3 my-5 mx-2">
                        <div className="col-6">
                            <label for="inputEmail4" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="inputName" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-6">
                            <label for="inputAddress" className="form-label">Nombre de Usuario (seudonimo)</label>
                            <input type="email" className="form-control" id="inputAddress"/>
                        </div>
                        <div className="col-6">
                            <label for="inputAddress2" className="form-label">Correo</label>
                            <input type="password" className="form-control" id="inputAddress2" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputCity" className="form-label">Contraseña</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Servicio</label>
                            <select id="inputState" className="form-select">
                                <option selected>Seleccionar</option>
                                <option>Peluquería</option>
                                <option>Barbería</option>
                                <option>manicure</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label for="inputZip" className="form-label">Teléfono</label>
                            <input type="phone" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                        
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                        </div>
                    </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Configuracion;