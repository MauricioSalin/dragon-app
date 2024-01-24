import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/authContext';

type Props = {
  title: string;
  children: React.ReactNode;
};

const PrivateLayout: React.FC<Props> = ({ children, title }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }

  }, []);

  return (
    <main title={title}>{children}</main>
  );
};

export default PrivateLayout;
