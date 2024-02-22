'use client'

import React from 'react';
import { DeleteTodo } from '../api/todos/deleteTodo/route'; 

interface DeleteButtonProps {
  todoId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ todoId }) => {
  const handleDelete = async () => {
    try {
      await DeleteTodo(todoId);
      window.location.reload(); // You may want to update state instead
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteButton;
