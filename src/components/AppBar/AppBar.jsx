import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
  const currentUser = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s.appbar}>
      <div className={s.container}>
        <Navigation />
        <div className={s.navbar}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
      </div>
    </header>
  );
}
