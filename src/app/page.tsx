'use client';
import { useState } from 'react';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { TodoInput } from './components/todoInput/todoInput';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/todoItem';

export default function Home() {

  const [taskList, setTaskList] = useState([
    {
      id: 1,
      name: "pasear al perro",
      completed: false,
    },
    {
      id: 2,
      name: "Leer un libro",
      completed: false,
    },
    {
      id: 3,
      name: "Estudiar React",
      completed: true,
    },
    {
      id: 4,
      name: "ir al super",
      completed: true,
    },
    {
      id: 5,
      name: "hacer un asado",
      completed: false
    },
    {
      id: 6,
      name: "festejar el nuevo puesto con un gran asado",
      completed: false
    },
  ])
  return (
    <main className='h-screen w-full flex flex-col'>
      <Navbar />
      <div className='flex flex-col justify-center items-center h-full'>
        <TodoInput />
          <TodoList taskList={taskList}>
        </TodoList>
      </div>
      <Footer />
    </main>
  );
};
