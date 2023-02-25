import { Link } from "react-router-dom";
import { useState } from "react";

import IMG from "../../assets/Logo.jpg";
import { LayoutComponents } from "../../components/Layout";
import css from "../../assets/global.css";

 const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LayoutComponents>
      <form className="login-form">
        
        <span className="login-form-title">
          <img src={IMG} alt="Logo" />
        </span>
        <span className="login-form-title"> Faça login na sua conta </span>
     
        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Cadastre-se.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};

export default Login;
