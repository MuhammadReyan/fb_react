import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDesc">Facebook helps you connect and share with the people in your life.</span>
                </div>
                <div className="loginRight">


                    <div className="loginBox">
                        <input placeholder="User Nmae" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log Into Account </button>
                    </div>

                </div>

            </div>

        </div>
    )
}
