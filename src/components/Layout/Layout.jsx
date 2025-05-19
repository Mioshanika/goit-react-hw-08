import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar.jsx';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}
