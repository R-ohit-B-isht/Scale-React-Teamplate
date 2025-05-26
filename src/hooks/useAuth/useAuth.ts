import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { loginSuccess, logout as logoutAction } from '@store/slices/authSlice';
import { authService } from '@services/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      
      localStorage.setItem('authToken', response.data.token);
      
      dispatch(loginSuccess({ 
        user: response.data.user, 
        token: response.data.token 
      }));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      
      localStorage.removeItem('authToken');
      
      dispatch(logoutAction());
    } catch (error) {
      console.error('Logout failed:', error);
      localStorage.removeItem('authToken');
      dispatch(logoutAction());
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await authService.register(email, password, name);
      
      localStorage.setItem('authToken', response.data.token);
      
      dispatch(loginSuccess({ 
        user: response.data.user, 
        token: response.data.token 
      }));
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    register
  };
};
