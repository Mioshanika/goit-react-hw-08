import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && 'active_nav');
};

export default function Navigation() {
  return (
    <nav>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      <NavLink className={setActiveClass} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
