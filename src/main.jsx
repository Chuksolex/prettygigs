import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
