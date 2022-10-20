import React from "react";
import Button from "../Button/Button";

import Input from "../Input/Input";

export default function Login() {
    return (
        <div className="login-container section">
            <div>
                <h1>Login</h1>
                <form>
                    <Input
                        value=""
                        name="Email"
                        placeholder="email@gmail.com"
                        disabled={true}
                        type="email"
                    />
                    <Input
                        value=""
                        name="Password"
                        placeholder="* * * * * * * *"
                        disabled={true}
                        type="password"
                    />
                    <div className="d-flex mt-3 justify-content-between">
                        <div>
                            <a href="/register">
                                <div className="login-box mt-0">
                                    Register
                                </div>
                            </a>
                        </div>
                        <div>
                            <Button value="Login" colour="primary" rounded={true}/>
                        </div>
                    </div>
                </form>
                <div>
                    <a
                        href={`http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect`}
                    >
                        <div className="login-box">
                            <i class="fa-brands fa-google google-icon"></i>
                            Login with Google
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
