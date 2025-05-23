/**
 * User API services
 */

import { axios } from '@utils/axios';
import { User } from '@/types/auth';

export const userService = {
  getProfile: () => 
    axios.get<User>('/users/profile').then(response => response.data),
    
  updateProfile: (updates: Partial<User>) => 
    axios.put<User>('/users/profile', updates).then(response => response.data),
};
