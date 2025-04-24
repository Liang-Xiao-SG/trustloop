
// File: /hooks/useTasks.ts
import { useEffect, useState } from 'react';
import { Task, fetchTasks, addTask as addNewTask } from '../services/TaskService';

export default function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    setLoading(true);
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  };

  const addTask = async (title: string, description: string) => {
    await addNewTask(title, description);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return { tasks, loading, addTask };
}