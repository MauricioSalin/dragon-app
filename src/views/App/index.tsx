import { BrowserRouter } from 'react-router-dom';

import AppRouter from '../../routes/AppRouter';
import { AuthProvider } from '../../contexts/authContext';

import "./global.css"

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </BrowserRouter>
);

export default App;
