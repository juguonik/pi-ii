import { useState } from "react";
import "./styles.css";

function Login({ onLogin, onSwitchToRegister }) {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="container">
      <h2 className="modal-title">Login</h2>
      <input
        type="text"
        placeholder="Nome de Usuário"
        value={nomeUsuario}
        onChange={(e) => setNomeUsuario(e.target.value)}
        className="modal-input"
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="modal-input"
      />
      <button onClick={handleLogin} className="modal-button">
        Entrar
      </button>
      <p>
        Não tem uma conta?{" "}
        <span className="modal-link" onClick={onSwitchToRegister}>
          Registre-se
        </span>
      </p>
    </div>
  );
}

export default Login;
