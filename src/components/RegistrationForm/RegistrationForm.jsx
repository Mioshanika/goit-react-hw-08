import s from './RegistrationForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations.js';

export default function RegistrationForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name is too short').max(50, 'Name is too long').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={s.registration_form}>
        {/* Name field */}
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" />
        {/* Email field */}
        <label htmlFor={emailFieldId}>E-mail</label>
        <Field type="email" name="email" id={emailFieldId} />
        <ErrorMessage name="email" component="span" />
        {/* Password field */}
        <label htmlFor={passwordFieldId}>Password</label>
        <Field type="password" name="password" id={passwordFieldId} />
        <ErrorMessage name="password" component="span" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
