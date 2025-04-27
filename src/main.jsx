import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import 'modern-normalize';
import './main.css';
import { store } from './redux/store';
import App from './components/app/app.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
      <Toaster />
    </StrictMode>
  </Provider>
);
