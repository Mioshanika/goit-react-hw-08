import s from './LoginForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export default function LoginForm() {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={s.login_form}>
        {/* Email field */}
        <label htmlFor={emailFieldId}>E-mail</label>
        <Field type="email" name="email" id={emailFieldId} />
        <ErrorMessage name="email" component="span" />
        {/* Password field */}
        <label htmlFor={passwordFieldId}>Password</label>
        <Field type="password" name="password" id={passwordFieldId} />
        <ErrorMessage name="password" component="span" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
