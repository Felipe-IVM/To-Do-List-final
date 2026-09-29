import { useState } from 'react';

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

function TaskItem({ id, title, completed, onToggleTask, onDeleteTask }: TaskItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  let backgroundColor = '#f9fafb'; 
  if (completed) {
    backgroundColor = isHovered ? '#ecfdf5' : '#d1fae5'; 
  } else {
    backgroundColor = isHovered ? '#ffffff' : '#f9fafb'; 
  }

  const borderStyle = isFocused ? '3px solid #2563eb' : '3px solid #000000';

  const shadowStyle = isFocused 
    ? '0 0 0 4px rgba(37, 99, 235, 0.25)' 
    : isHovered 
      ? '0 10px 15px -3px rgba(0, 0, 0, 0.08)' 
      : '0 4px 6px rgba(0, 0, 0, 0.05)';

  return (
    <div 
      onDoubleClick={() => onToggleTask(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}   
      onBlur={() => setIsFocused(false)}   
      tabIndex={0}                       
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: completed ? '1fr auto' : '1fr',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        border: borderStyle,
        borderRadius: '12px',
        boxShadow: shadowStyle,
        backgroundColor: backgroundColor,
        opacity: completed ? 0.8 : 1,
        cursor: 'pointer',
        userSelect: 'none',
        boxSizing: 'border-box',
        outline: 'none',          
        transition: 'all 0.15s ease-in-out'
      }}
      title="Un clic para enfocar • Doble clic para tachar"
    >
      {/* Texto de la Tarea */}
      <div style={{ textAlign: 'left', minWidth: '0' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '700',
          color: '#111827',
          margin: '0',
          wordBreak: 'break-word',
          textDecoration: completed ? 'line-through' : 'none'
        }}>
          {title}
        </h3>
      </div>

      {/* Botón Eliminar */}
      {completed && (
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            onDeleteTask(id);
          }}
          style={{
            fontSize: '11px',
            fontWeight: '700',
            color: '#ffffff',
            backgroundColor: '#ef4444',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Eliminar
        </button>
      )}
    </div>
  );
}

export default TaskItem;
