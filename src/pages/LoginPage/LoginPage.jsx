import s from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div className={s.container}>
      <p>Please login to access your phonebook.</p>
      <LoginForm />
    </div>
  );
}
