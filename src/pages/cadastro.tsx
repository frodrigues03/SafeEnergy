import React from 'react';
import Link from 'next/link';
import styles from '../styles/cadastro.module.css';

const Cadastro: React.FC = () => {
  return (
    <div>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <form className="form">
        <h1>Cadastro</h1>
        
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" required />
        </div>

        <div className="form-group">
          <label htmlFor="sobrenome">Sobrenome</label>
          <input type="text" id="sobrenome" name="sobrenome" required />
        </div>

        <div className="form-group">
          <label htmlFor="nomeEmpresa">Nome da Empresa</label>
          <input type="text" id="nomeEmpresa" name="nomeEmpresa" required />
        </div>

        <div className="form-group">
          <label htmlFor="cpfCnpj">CPF ou CNPJ</label>
          <input type="text" id="cpfCnpj" name="cpfCnpj" required />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" id="telefone" name="telefone" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" required />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <Link href="/login">Já tem uma conta? Faça login</Link>
    </div>
  );
};

export default Cadastro;
