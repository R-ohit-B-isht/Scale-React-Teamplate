
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = () => {
  return Promise.resolve([
    { id: 1, title: 'Learn React', completed: true },
    { id: 2, title: 'Build a project', completed: false },
  ]);
};

export const addTodo = (title: string) => {
  return Promise.resolve({
    id: Math.floor(Math.random() * 1000),
    title,
    completed: false,
  });
};

export const updateTodo = (id: number, updates: Partial<Todo>) => {
  return Promise.resolve({ id, ...updates });
};

export const deleteTodo = (id: number) => {
  console.log(`Deleting todo with id: ${id}`);
  return Promise.resolve({ success: true });
};
