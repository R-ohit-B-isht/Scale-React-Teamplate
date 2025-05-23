/**
 * Authentication API services
 */

import { axios } from '@utils/axios';
import { API_ENDPOINTS } from '@constants/api';
import { User, AuthResponse } from '@/types/auth';

export const authService = {
  login: (email: string, password: string) => 
    axios.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, { email, password }),
    
  register: (email: string, password: string, name: string) => 
    axios.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, { email, password, name }),
    
  logout: () => 
    axios.post<{ success: boolean }>(API_ENDPOINTS.AUTH.LOGOUT, {}),
    
  getCurrentUser: () => 
    axios.get<User>(API_ENDPOINTS.AUTH.ME),
};
