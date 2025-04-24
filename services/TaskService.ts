export type Task = {
    id: string;
    title: string;
    description: string;
    time: string;
  };
  
  let MOCK_TASKS: Task[] = [
    {
      id: '1',
      title: 'Help move house',
      description: 'Need help moving this weekend.',
      time: '2 hours ago',
    },
    {
      id: '2',
      title: 'Review Resume',
      description: 'Looking for someone to review my CV.',
      time: '1 day ago',
    },
  ];
  
  export const fetchTasks = async (): Promise<Task[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return MOCK_TASKS;
  };
  
  export const addTask = async (title: string, description: string): Promise<void> => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      time: 'just now',
    };
    MOCK_TASKS.unshift(newTask);
  };