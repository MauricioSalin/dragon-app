import "./styles.css"

import { useForm } from 'react-hook-form';

type Props = {
  onSubmit: () => void;
};

type LoginForm = {
  username: string;
  password: string;
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-item'>
        <label>Usuário:</label>
        <input type="text" {...register('username')} />
      </div>
      <div className='form-item'>
        <label>Senha:</label>
        <input type="password" {...register('password')} />
      </div>
      <button type="submit" >Entrar</button>
    </form>
  );
};

export default LoginForm;
