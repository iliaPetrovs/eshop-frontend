import React from "react";

export default function Login() {
    return (
        <div className="login-container">
            <div>
                <h1>Login</h1>{" "}
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
    );
}
