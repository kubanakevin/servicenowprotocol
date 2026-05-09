import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:7000/login",
                { email, password }
            );

            if (res.data.token) {
                // ✅ SAVE TOKEN
                localStorage.setItem("token", res.data.token);

                alert("Login successful");
                window.location.href = "/records";
            } else {
                alert(res.data.message);
            }

        } catch (err) {
            console.error(err);
            alert("Login failed");
        }
    };

    return (
        <div className="container">
            <h3>Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;