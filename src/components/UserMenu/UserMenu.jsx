import s from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { BiLogOut } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  return (
    <div className={s.user_menu}>
      <span className={s.user_name}>Welcome, {currentUser.name.toUpperCase()}</span>
      <button
        className={s.btn_logout}
        onClick={() => {
          dispatch(logout());
        }}>
        <BiLogOut size={24} />
      </button>
    </div>
  );
}
