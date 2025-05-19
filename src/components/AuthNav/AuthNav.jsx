import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && 'active_nav');
};

export default function AuthNav() {
  return (
    <nav>
      <NavLink className={setActiveClass} to="/login">
        Login
      </NavLink>
      <NavLink className={setActiveClass} to="/register">
        Register
      </NavLink>
    </nav>
  );
}
