import 'modern-normalize';
import './main.css';
import { store, persistor } from './redux/store';
import App from './components/app/app.jsx';
import { Toaster } from 'react-hot-toast';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Toaster
            toastOptions={{
              style: {
                border: '1px solid var(--txt-color)',
                padding: '0 0 0 8px',
                color: 'var(--txt-color)',
                backgroundColor: 'var(--bg-color)',
              },
            }}
          />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
