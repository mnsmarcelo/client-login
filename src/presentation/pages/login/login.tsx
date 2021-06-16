import React from 'react';
import Input from 'src/presentation/components/input';

import Styles from './login-styles.scss';

const Login = () => (
  <div className={Styles.wrap}>
    <div className={Styles.container}>
      <div className={Styles.wrapLogin}>
        <form className={Styles.loginForm}>
          <h3 className={Styles.loginTitle}>Welcome</h3>
          <Input
            placeholder="E-mail"
            type="email"
            name="email"
          />
          <Input
            placeholder="Senha"
            type="password"
            name="password"
          />
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
