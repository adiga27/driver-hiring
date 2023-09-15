import React from 'react';

export default function Signup() {
  return (
    <div>
      <main class="main">
        <div class="login-form">
          <h2 class="heading-secondary ma-bt-lg">Create an account</h2>
          <form class="form form--login">
            <div class="form__group">
              <label class="form__label" for="fullname">
                Full Name
              </label>
              <input
                id="fullname"
                class="form__input"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
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
            <div class="form__group">
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
              <label class="form__label">Role</label>
              <div class="form__group">
                <input
                  id="user"
                  class="form__radio-input"
                  type="radio"
                  name="role"
                  value="user"
                  required
                />
                <label class="form__radio-label" for="user">
                  User
                </label>
                <input
                  id="driver"
                  class="form__radio-input"
                  type="radio"
                  name="role"
                  value="driver"
                  required
                />
                <label class="form__radio-label" for="driver">
                  Driver
                </label>
              </div>
            </div>
            <div class="form__group">
              <label class="form__label" for="contact">
                Contact Number
              </label>
              <input
                id="contact"
                class="form__input"
                type="tel"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div class="form__group">
              <button class="btn btn--green">Sign Up</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
