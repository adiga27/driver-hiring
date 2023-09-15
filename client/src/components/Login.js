import React from 'react';

export default function Login() {
  const loginForm = document.querySelector('.form--login');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        let res;
        fetch('http://localhost:3000/api/v1/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.parse({
            email,
            password,
          }),
        })
          .then((response) => {
            response.json();
            console.log(response.json());
          })
          .then((data) => {
            res = data;
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });

        if (res.data.status === 'success') {
          console.log('Success');
        }
      } catch (err) {
        console.log(err.response.data.message);
        // showAlert('error', err.response.data.message);
      }
    });
  }

  return (
    <div>
      <main class="main">
        <div class="login-form">
          <h2 class="heading-secondary ma-bt-lg">Log into your account</h2>
          <form class="form form--login">
            <div class="form__group">
              <label class="form__label" for="email">
                Email address
              </label>
              <input
                id="email"
                class="form__input"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div class="form__group ma-bt-md">
              <label class="form__label" for="password">
                Password
              </label>
              <input
                id="password"
                class="form__input"
                type="password"
                placeholder="••••••••"
                required
                minlength="8"
              />
            </div>
            <div class="form__group">
              <button class="btn btn--green">Login</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
