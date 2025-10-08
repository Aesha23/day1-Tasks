import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState(""), [password, setPassword] = useState("");
  const nav = useNavigate();

  const handlelogin = () => {
    if(!email || !password) return alert("Both Fields are Required!");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user =  users.find (u => u.email === email && u.password === password);
    if(!user) return alert("Invalid Credatials");
    localStorage.setItem("user",JSON.stringify(user));
    nav("/Homepage");
  };

  return(
 <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <input className="form-control mb-3" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="form-control mb-3" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-success w-100 mb-2" onClick={handlelogin}>Login</button>
        <p className="text-center">Don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
  );
}
