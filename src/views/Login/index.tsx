import './styles.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

import LoginForm from '../../components/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const onSubmit = () => {
    const mockToken = 'teste123456';

    login(mockToken);
  };

  return (
    <div className="login-container">
      <h2>Bem-vindo a lista de Dragões!</h2>
      <div className="login-card">
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
