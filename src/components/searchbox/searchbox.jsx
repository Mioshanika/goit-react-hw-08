import s from './searchbox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import { useSelector, useDispatch } from 'react-redux';

export default function SearchBox() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.search_box}>
      <label htmlFor="searchBox">Find contacts</label>
      <input
        type="text"
        name="searchBox"
        id="searchBox"
        value={filter}
        placeholder="Name or number"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
