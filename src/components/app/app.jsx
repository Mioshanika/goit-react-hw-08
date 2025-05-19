import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import ContactsPage from '../../pages/ContactsPage/ContactsPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute.jsx';

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
