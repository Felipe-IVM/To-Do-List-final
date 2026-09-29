import { useState, useEffect } from 'react';
import Header from './Components/Header';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  // localStorage
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks-todo-list');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Guardar tareas
  useEffect(() => {
    localStorage.setItem('tasks-todo-list', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start', 
      padding: '40px 20px 20px 20px',
      fontFamily: 'sans-serif',
      boxSizing: 'border-box'
    }}>
      <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Componente Header */}
        <Header />

        {/* Componente TaskList */}
        <TaskList 
          tasks={tasks} 
          onToggleTask={handleToggleTask} 
          onDeleteTask={handleDeleteTask} 
        />

        {/* Componente TaskInput */}
        <TaskInput onAddTask={handleAddTask} />

      </div>
    </div>
  );
}
