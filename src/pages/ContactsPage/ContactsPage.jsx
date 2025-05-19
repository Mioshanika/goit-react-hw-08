import s from './ContactsPage.module.css';
import ContactForm from '../../components/contactform/contactform.jsx';
import SearchBox from '../../components/searchbox/searchbox.jsx';
import ContactList from '../../components/contactlist/contactlist.jsx';
import Loader from '../../components/loader/loader.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import { selectError, selectLoading } from '../../redux/contacts/selectors.js';
import { useSelector } from 'react-redux';

export default function ContactsPage() {
  const isLoading = useSelector(selectLoading);
  const errorMsg = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    const cancelQuery = new AbortController();
    dispatch(fetchContacts(cancelQuery.signal));
    return () => {
      cancelQuery.abort();
    };
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.main_grid}>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {Boolean(errorMsg) && <p>{errorMsg}</p>}
        {!isLoading && !Boolean(errorMsg) && <ContactList />}
      </div>
    </div>
  );
}
