import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useHistory } from 'react-router';

const Login = props => {
    const{store,actions}= useContext(Context);
    const history =useHistory()
    return(
        <>
         <h1>login</h1>
         {
            !!store.error &&(
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> {store.error}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )
         }
         
         <form className="container" onSubmit={e=> actions.handleLogin(e,history)}>
            <div className="form-group"> 
                <label htmlFor="Email" className="form-label">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email"
                className="form-control"
                placeholder="ingrese email"
                defaultValue={store.email}
                onChange={actions.handleChange}
                required
                />
            </div>

       

        
            <div className="form-group"> 
                <label htmlFor="Password" className="form-label">Password</label>
                <input 
                type="password" 
                id="password" 
                name="password"
                className="form-control"
                placeholder="ingrese password"
                defaultValue={store.password}
                onChange={actions.handleChange}
                required
                />
            </div>
         <button className="btn btn-primary btn-block">Login</button>
        </form>

        </>
    )
}
export default Login;
