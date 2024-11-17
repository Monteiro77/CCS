import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    region: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos obrigatórios
    const { fullName, email, region, password, confirmPassword } = formData;
    if (!fullName || !email || !region || !password || !confirmPassword) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    // Validar se as senhas coincidem
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Salvar no Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { fullName, email, region, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    setSuccess('Registro realizado com sucesso!');
    setFormData({
      fullName: '',
      email: '',
      region: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Registrar</h1>
      <form className="mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
        {/* Nome completo */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nome Completo</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        {/* E-mail */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Região */}
        <div className="mb-3">
          <label htmlFor="region" className="form-label">Região</label>
          <select
            className="form-control"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
          >
            <option value="">Selecione sua região</option>
            <option value="América do Norte">América do Norte</option>
            <option value="América do Sul">América do Sul</option>
            <option value="Europa">Europa</option>
            <option value="África">África</option>
            <option value="Ásia">Ásia</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        {/* Senha */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Confirmação da Senha */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirmar Senha</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {/* Mensagens de erro/sucesso */}
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        {/* Botão de registro */}
        <button type="submit" className="btn btn-primary w-100">Registrar</button>
      </form>
    </div>
  );
}
