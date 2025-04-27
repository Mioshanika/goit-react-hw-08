import s from './app.module.css';
import ContactList from '../contactlist/contactlist.jsx';
import ContactForm from '../contactform/contactform.jsx';
import SearchBox from '../searchbox/searchbox.jsx';
import Loader from '../loader/loader.jsx';
import { fetchContacts } from '../../redux/contactsOps.js';
import { selectError, selectLoading } from '../../redux/contactsslice.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const errorMsg = useSelector(selectError);

  useEffect(() => {
    const cancelQuery = new AbortController();
    dispatch(fetchContacts({ signal: cancelQuery.signal }));
    return () => {
      cancelQuery.abort();
    };
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
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
