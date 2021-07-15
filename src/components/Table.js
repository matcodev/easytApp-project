import React from 'react'

export default function Table(props) {
    return (

        <>
            <table className="table table-secondary table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo@</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                         <td>{props.nombre}</td>
                        <td>{props.apellido}</td>
                        <td>{props.correo}</td>
                        <td><button type="button" class="btn btn-success btn-sm">Perfil</button></td>
                        <td><button type="button" class="btn btn-danger btn-sm">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}