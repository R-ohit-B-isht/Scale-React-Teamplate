import { store } from '@store/index';
import { authService } from '@services/auth';
import { loginSuccess } from '@store/slices/authSlice';


/**
 * Initialize authentication state from localStorage token
 * This function checks for a stored auth token and restores the user session if found
 */
export const initializeAuth = (): void => {
  const token = localStorage.getItem('authToken');

  if (!token) return;

  try {
    authService.getCurrentUser()
      .then(response => {
        store.dispatch(loginSuccess({
          user: response.data,
          token
        }));
        console.log('Auth state restored from localStorage');
      })
      .catch(error => {
        console.error('Failed to fetch user:', error);
        localStorage.removeItem('authToken');
      });
  } catch (error) {
    console.error('Error initializing auth state:', error);
    localStorage.removeItem('authToken');
  }
};
