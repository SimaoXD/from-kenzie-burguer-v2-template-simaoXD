import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserContext, IDefaultProviderProps, IUser, IRegisterFormValues, ILoginFormValues } from './@types';
import { api } from '../../services/api';


export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userLoad = async () => {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      try {
        const response = await api.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        navigate('/dashboard');
      } catch (error) {
        console.log(error);
        localStorage.removeItem('@TOKEN');
      }
    }
  };

  useEffect(() => {
    userLoad();
  }, []);

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const responde = api.post('/users', formData);
      setUser(responde.data.user);
      localStorage.setItem('@TOKEN', responde.data.token);
      console.log('Cadastro com sucesso');
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const responde = api.post('/users/login', formData);
      setUser(responde.data.user);
      localStorage.setItem('@TOKEN', responde.data.token);
      console.log('Login com sucesso');
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{ loading, setLoading, user, userRegister, userLogin, userLogout }}
    >
      {' '}
      {children}
    </UserContext.Provider>
  );
};
