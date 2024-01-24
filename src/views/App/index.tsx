import './global.css';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../contexts/authContext';

import AppRouter from '../../routes/AppRouter';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </BrowserRouter>
);

export default App;
