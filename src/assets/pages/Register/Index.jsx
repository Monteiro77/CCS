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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    const { fullName, email, region, password, confirmPassword } = formData;

    if (!fullName || !email || !region || !password || !confirmPassword) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { fullName, email, region, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    localStorage.setItem('username', newUser.fullName);

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
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e9f5e1, #f1f7ef)',
        padding: '20px',
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          maxWidth: '450px',
          width: '100%',
          borderRadius: '15px',
          backgroundColor: '#fff',
        }}
      >
        <h1
          className="text-center mb-4"
          style={{
            color: '#436405',
            fontWeight: 'bold',
          }}
        >
          🌍 Registrar
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Nome completo */}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Nome Completo
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              placeholder="Digite seu nome completo"
              value={formData.fullName}
              onChange={handleChange}
              style={{
                borderRadius: '10px',
                border: '1px solid #ccc',
                padding: '10px',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#436405')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>

          {/* E-mail */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Digite seu E-mail"
              value={formData.email}
              onChange={handleChange}
              style={{
                borderRadius: '10px',
                border: '1px solid #ccc',
                padding: '10px',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#436405')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>

          {/* Região */}
          <div className="mb-3">
            <label htmlFor="region" className="form-label">
              Região
            </label>
            <select
              className="form-control"
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              style={{
                borderRadius: '10px',
                border: '1px solid #ccc',
                padding: '10px',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#436405')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
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
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
                style={{
                  borderRadius: '10px 0 0 10px',
                  border: '1px solid #ccc',
                  padding: '10px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#436405')}
                onBlur={(e) => (e.target.style.borderColor = '#ccc')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '0 10px 10px 0',
                  padding: '0 10px',
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? '👁️' : '🔒'}
              </button>
            </div>
          </div>

          {/* Confirmar Senha */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Senha
            </label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{
                  borderRadius: '10px 0 0 10px',
                  border: '1px solid #ccc',
                  padding: '10px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#436405')}
                onBlur={(e) => (e.target.style.borderColor = '#ccc')}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '0 10px 10px 0',
                  padding: '0 10px',
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                }}
              >
                {showConfirmPassword ? '👁️' : '🔒'}
              </button>
            </div>
          </div>

          {/* Mensagens de erro/sucesso */}
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          {/* Botão de registro */}
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: '#436405',
              color: '#fff',
              borderRadius: '10px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: 'bold',
              transition: 'transform 0.4s ease, background-color 0.4s ease',
              display: 'block',
              margin: '10px auto',
            }}
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
