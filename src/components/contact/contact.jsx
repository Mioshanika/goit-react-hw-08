import s from './contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { FaMobileScreenButton } from 'react-icons/fa6';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

export default function Contact({ name, phone, id }) {
  const dispatch = useDispatch();
  return (
    <div className={s.contact_card}>
      <p>
        <FaRegFaceSmile size={'12px'} />
        &nbsp;{name}
      </p>
      <p>
        <FaMobileScreenButton size={'12px'} />
        &nbsp;{phone}
      </p>
      <button onClick={() => dispatch(deleteContact({ id: id }))}>Delete</button>
    </div>
  );
}
