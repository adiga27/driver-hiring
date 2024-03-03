import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navi, setNavi] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://driver-hiring.onrender.com/api/v1/user/login',
        data: {
          email,
          password,
        },
      });
      console.log(res);
      if (res.status === 200) {
        setEmail('');
        setPassword('');
        setNavi(true);
        setRole(res.data.data.user.role.type);
      }
    } catch (e) {
      console.error(e);
    }
  };
  console.log(role);
  useEffect(() => {
    if (navi) {
      if (role === 'user') navigate('/drivers');
      if (role === 'driver') navigate('/dashboard');
      setNavi(false);
    }
  }, [navi, navigate, role]);

  return (
    <div className="login-form">
      <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
      <form className="form form--login" onSubmit={loginSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            className="form__input"
            type="email"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="form__input"
            type="password"
            placeholder="••••••••"
            required
            minLength="8"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form__group">
          <button className="btn btn--green">Login</button>
        </div>
      </form>
    </div>
  );
}
