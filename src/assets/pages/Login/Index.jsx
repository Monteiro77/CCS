import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, rememberMe } = formData;

    if (!email || !password) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!userExists) {
      setError('E-mail ou senha inválidos.');
      return;
    }

    if (rememberMe) {
      localStorage.setItem('rememberMe', JSON.stringify({ email }));
    } else {
      localStorage.removeItem('rememberMe');
    }

    setSuccess('Login realizado com sucesso!');
    setFormData({
      email: '',
      password: '',
      rememberMe: false,
    });

    window.location.href = "dashboard"
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
          🌍 Login
        </h1>
        <form onSubmit={handleSubmit}>
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

          {/* Manter-me conectado */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Manter-me conectado
            </label>
          </div>

          {/* Mensagens de erro/sucesso */}
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          {/* Botão de login */}
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
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
