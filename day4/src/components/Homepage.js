import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
    const nav = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) nav("/");
  }, [nav]);

  const user = JSON.parse(localStorage.getItem("user"));
    return (
        <h3 style={{textAlign: "center"}}>Hello Welcome, {user?.name || "User"} 👋🏻</h3>
    );
}