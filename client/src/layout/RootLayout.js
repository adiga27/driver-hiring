import { NavLink, Outlet } from 'react-router-dom';
import './rootLayout.css';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header className="header">
        <NavLink to="/">
          <img src="../img/logo.png" alt="Logo" className="logo" />
        </NavLink>
        <nav>
          <NavLink to="login" className="navlink login">
            Login
          </NavLink>
          <NavLink to="signup" className="navlink signup">
            Sign Up
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
