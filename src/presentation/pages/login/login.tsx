import React from 'react';
import Styles from './login-styles.scss';

const Login = () => (
  <div className={Styles.wrap}>
    <div className={Styles.container}>
      <div className={Styles.wrapLogin}>
        <form className={Styles.loginForm}>
          <h3 className={Styles.loginTitle}>Welcome</h3>
          <div className={Styles.inputWrap}>
            <input type="text" id="name" placeholder=" " />
            <label htmlFor="name">
              E-mail
            </label>
          </div>
          <div className={Styles.inputWrap}>
            <input type="password" id="password" placeholder=" " />
            <label htmlFor="password">
              Password
            </label>
          </div>
          <div>
            <button type="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
