import s from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage() {
  return (
    <div className={s.container}>
      <p>Do not have an account? You can register one right here.</p>
      <RegistrationForm />
    </div>
  );
}
