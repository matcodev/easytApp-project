import React from 'react'

export default function Perfiles(props) {
    return (


        <div className='container-fluid'>
            <div class="tarjet-info card " >
            <img src={props.imagen} class="card-img-top img-ts"/>
                <div class="card-body">
                    <h5 class="card-title text-center">{props.nombre}</h5>
                </div>

                <div className='icon-info'>
                    <i class="fab fa-whatsapp"></i>
                    <i class="far fa-envelope"></i>
                    <i class="fas fa-mobile-alt"></i>
                </div>
            </div>


            <div className="perfil-list card " >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Telefono <br /> +599982254 </li>
                    <li className="list-group-item">Correo Electronico <br /> jmtm89@gmail.com</li>
                    <li className="list-group-item">Rut <br /> 25.658.458</li>
                    <li className="list-group-item">Numero de cliente <br /> 155</li>
                </ul>
            </div>
        </div>
    )
}
