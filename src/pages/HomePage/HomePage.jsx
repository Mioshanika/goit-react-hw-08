import s from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.container}>
      <h1>Welcome to the Phonebook</h1>
      <h4>by Mio</h4>
      {!isLoggedIn && <p>Please register or log in to manage your contacts.</p>}
      {isLoggedIn && <p>Please go to the "Contacts" to start working.</p>}
    </div>
  );
}
