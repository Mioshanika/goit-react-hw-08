import s from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <h2>404</h2>
      <p>There is no such resource here.</p>
    </div>
  );
}
