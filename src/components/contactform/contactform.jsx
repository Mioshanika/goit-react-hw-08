import s from './contactform.module.css';
import { addContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name is too short').max(50, 'Name is too long').required('Required'),
    number: Yup.string()
      .matches(/^[0-9]{3}[-][0-9]{2}[-][0-9]{2}$/, {
        message: 'Phone number must match the following pattern "xxx-xx-xx", where "x" is number',
      })
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={s.contact_form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberFieldId}>Phone number</label>
        <Field type="text" name="number" id={numberFieldId} placeholder="xxx-xx-xx" />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
