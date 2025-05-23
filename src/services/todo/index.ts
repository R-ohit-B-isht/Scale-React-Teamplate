/**
 * Todo API services
 */

import { axios } from '@utils/axios';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todoService = {
  getAll: () => 
    axios.get<Todo[]>('/todos').then(response => response.data),
    
  getById: (id: number) => 
    axios.get<Todo>(`/todos/${id}`).then(response => response.data),
    
  create: (title: string) => 
    axios.post<Todo>('/todos', { title, completed: false }).then(response => response.data),
    
  update: (id: number, updates: Partial<Todo>) => 
    axios.put<Todo>(`/todos/${id}`, updates).then(response => response.data),
    
  delete: (id: number) => 
    axios.delete<{ success: boolean }>(`/todos/${id}`).then(response => response.data),
};
