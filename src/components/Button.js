import React from 'react';

const Button = () => {
    return (
        <>
            <button type="button" className="btn btn-darck" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agendar cita
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agregar cita</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Nombre</label>
                                    <input type="email" className="form-control" id="" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Apellido</label>
                                    <input type="password" className="form-control" id="" />
                                </div>
                                <div className="col-6">
                                    <label for="inputAddress2" className="form-label">Rut</label>
                                    <input type="text" className="form-control" id="" placeholder="" />
                                </div>
                                <div className="col-6">
                                    <label for="inputAddress2" className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" id="" placeholder="" />
                                </div>

                                <div className="col-12">
                                    <label for="inputAddress" className="form-label">Correo</label>
                                    <input type="text" className="form-control" id="" placeholder="" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputCity" className="form-label">Fecha</label>
                                    <input type="date" className="form-control" id="date" />
                                </div>
                                <div className="col-md-6">
                                    <label for="" className="form-label">Hora</label>
                                    <input type="time" className="form-control" id="time" />
                                </div>
                                <div className="col-md-6">
                                    <label for="inputState" className="form-label">Servicio</label>
                                    <select id="inputState" className="form-select">
                                        <option selected></option>
                                        <option>Servicio1</option>
                                        <option>Servicio2</option>
                                        <option>Servicio3</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label for="inputAddress2" className="form-label">Codigo de amigo</label>
                                    <input type="text" className="form-control" id="" placeholder="" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="">Comentarios</label>
                                    <textarea className="form-control" id="" cols="30" rows="3"></textarea>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Reservar</button>
                                </div>
                            </form>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Aceptar</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Button;