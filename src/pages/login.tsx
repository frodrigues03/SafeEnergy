import React, { useState } from 'react';
import Link from 'next/link';
import styles from './login.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && senha) {
      setMensagem('Login efetuado com sucesso!');
    } else {
      setMensagem('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <h1>Bem-vindo!</h1>
      <form className="form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      {mensagem && <p>{mensagem}</p>}

      <Link href="/InserirConsumo">Ir para Inserir Consumo</Link><br />


      <Link href="/cadastro">Não tem uma conta? Cadastre-se</Link>
    </div>
  );
};

export default Login;