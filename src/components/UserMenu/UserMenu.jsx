import s from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { BiLogOut } from 'react-icons/bi';

export default function UserMenu() {
  const dispatch = useDispatch();
  return (
    <button
      className={s.btn_logout}
      onClick={() => {
        dispatch(logout());
      }}>
      <BiLogOut size={24} />
    </button>
  );
}
