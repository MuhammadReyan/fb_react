import Home from "../home/home"
import "./login.css"

export default function Login() {



    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDesc">Facebook helps you connect and share with the people in your life.</span>
                </div>
                <div className="loginRight">


                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForget">Forget Password ?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
