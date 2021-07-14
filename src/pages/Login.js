import "../css/login.css"

const Login = () => {
    return (
        <>
            <div className="login">
                <div className="login-screen">
                    <div className="app-title">
                        <h1>Easyt-App</h1>
                    </div>

                    <div className="login-form">
                        <div className="control-group">
                            <input type="text" className="login-field" value="" placeholder="username" id="login-name" />
                            <label className="login-field-icon fui-user" for="login-name"></label>
                        </div>

                        <div className="control-group">
                            <input type="password" className="login-field" value="" placeholder="password" id="login-pass" />
                            <label className="login-field-icon fui-lock" for="login-pass"></label>
                        </div>

                        <a className="btn btn-primary btn-large btn-block" href="">login</a>
                        <a className="login-link" href="">Sign Up</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;