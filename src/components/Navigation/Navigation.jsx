import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && 'active_nav');
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
