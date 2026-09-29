import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title.trim());
    setTitle('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px',
        backgroundColor: '#ffffff',        
        border: '3px solid #000000',        
        borderRadius: '12px',               
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        boxSizing: 'border-box'
      }}
    >
      <input
        type="text"
        placeholder="Añadir una nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          flex: '1',
          minWidth: '0',
          padding: '8px 12px',
          fontSize: '14px',
          fontWeight: '600',
          color: '#111827',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none'
        }}
      />
      <button
        type="submit"
        disabled={!title.trim()}
        style={{
          padding: '10px 20px',
          fontWeight: '700',
          fontSize: '14px',
          borderRadius: '8px',
          border: '2px solid #000000',       
          backgroundColor: title.trim() ? '#2563eb' : '#e5e7eb', 
          color: title.trim() ? '#ffffff' : '#9ca3af',
          cursor: title.trim() ? 'pointer' : 'not-allowed',
          transition: 'all 0.2s'
        }}
      >
        Añadir
      </button>
    </form>
  );
}

export default TaskInput;
