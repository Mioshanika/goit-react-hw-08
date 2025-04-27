import s from './contactlist.module.css';
import Contact from '../contact/contact.jsx';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsslice.js';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contact_list}>
      {filteredContacts.map(item => (
        <li key={item.id}>
          <Contact name={item.name} phone={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
}
