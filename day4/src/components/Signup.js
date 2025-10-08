import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Signup() {
    const[form, setForm] = useState({name: "", email: "",number: "",password:"",gender:"",address:""});
    const nav = useNavigate();

     const signup = () => {
    if (!form.name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/.test( form.password)) {
      alert(
        "Password must have at least 8 characters, with uppercase, lowercase, a number, and a special character"
      );
      return;
    }
    if (!/^\d{10}$/.test(form.number)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (!form.address.trim()) {
      alert("Please enter your address");
      return;
    }

    if (!form.gender) {
      alert("Please select your gender");
      return;
    }


    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === form.email)) {
      return alert("User ALreday Exists");
    }  else {
      const temp = FormData;
      delete temp.password;
    }
    

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("signup Sucessful!")
    nav("/");
    };

    return (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div
      className="card shadow p-4"
      style={{ maxWidth: 400, width: "100%", borderRadius: "12px" }}
    >
      <h3 className="text-center mb-4 fw-bold">Signup</h3>
      {["name", "email", "password", "number"].map((key, i) => (
        <input
          key={i}
          type={key === "password" ? "password" : "text"}
          className="form-control mb-3"
          placeholder={ key === "number"? "Phone Number": key.charAt(0).toUpperCase() + key.slice(1)
          }
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

        <div className="form-label fw-semibold d-block mb-2"> 
        <textarea
          className="form-control"
          placeholder="Enter your address"
          rows="3"
          style={{ resize: "none" }}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
      </div>


      <div className="mb-3">
        <label className="form-label fw-semibold d-block mb-2">Gender:</label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "-5px",
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
            />
            Female
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
            />
            Male
          </label>
        </div>
      </div>

      <small className="text-muted mb-2 d-block text-center">
        Password must include Uppercase, Lowercase and Special Character.
      </small>

      <button className="btn btn-success w-100 mb-3" onClick={signup}>
        Signup
      </button>

      <p className="text-center">Already have an account? <Link to="/">Login</Link></p>
    </div>
  </div>
);

}