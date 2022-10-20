import React from "react";
import Button from "../Button/Button";

import Input from "../Input/Input";

export default function Register() {
    return (
        <div className="login-container section">
            <div>
                <h1>Register</h1>
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
                    <div className="d-flex mt-3 register-button">
                        <div>
                            <Button
                                value="Register"
                                colour="primary"
                                rounded={true}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
