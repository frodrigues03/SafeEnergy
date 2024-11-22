// pages/InserirConsumo.tsx

import React, { useState } from 'react';
import Link from 'next/link';

const InserirConsumo: React.FC = () => {
  const [dataConsumo, setDataConsumo] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('');
  const [quantidadeConsumida, setQuantidadeConsumida] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para processar os dados
    if (dataConsumo && tipoEntrega && quantidadeConsumida) {
      setMensagem('Consumo registrado com sucesso!');
    } else {
      setMensagem('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <h1>Registrar Consumo</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dataConsumo">Data do Consumo (DD/MM/AAAA)</label>
          <input
            type="text"
            id="dataConsumo"
            name="dataConsumo"
            value={dataConsumo}
            onChange={(e) => setDataConsumo(e.target.value)}
            placeholder="DD/MM/AAAA"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipoEntrega">Tipo da Entrega</label>
          <input
            type="text"
            id="tipoEntrega"
            name="tipoEntrega"
            value={tipoEntrega}
            onChange={(e) => setTipoEntrega(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantidadeConsumida">Quantidade Consumida</label>
          <input
            type="number"
            id="quantidadeConsumida"
            name="quantidadeConsumida"
            value={quantidadeConsumida}
            onChange={(e) => setQuantidadeConsumida(e.target.value)}
            required
          />
        </div>

        <button type="submit">Registrar Consumo</button>
      </form>

      {mensagem && <p>{mensagem}</p>}

      <Link href="/login">Voltar para Login</Link>
    </div>
  );
};

export default InserirConsumo;
