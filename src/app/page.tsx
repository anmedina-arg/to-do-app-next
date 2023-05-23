'use client';
import { useState } from 'react';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { TodoInput } from './components/todoInput/todoInput';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/todoItem';

const initial = [
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
  ];

export default function Home() {

  const [taskList, setTaskList] = useState(initial);

  const removeItem = (id: any) => {
    const newTaskList = taskList.filter(task => task.id !== id);
    setTaskList(newTaskList);
  };

  const addNewItem = (tarea: any) => {
    //verifico que haya tareas, sino creo la primer tarea con un id = 1
    if (taskList.length === 0) {
      let newTask = {
        id: 1,
        name: tarea,
        completed: false,
      }
      let newTaskList = [...taskList, newTask]
      setTaskList(newTaskList)
    } else {
      let newTask = {
        id: taskList[taskList.length - 1].id + 1,
        name: tarea,
        completed: false
      }
      let newTaskList = [...taskList, newTask]
      setTaskList(newTaskList)
    }
    return taskList
  };

  console.log(taskList)

  const completeTask = (id: any) => {
    let taskListCompleted = ([...taskList].map((task) => {
      if (task.id === id) {
        let taskCompleted = {
          ...task,
          completed: !task.completed
        }
        return taskCompleted;
      } else {
        return task
      }
    }))
    setTaskList(taskListCompleted)
    }

  return (
    <main className='h-screen w-full flex flex-col'>
      <Navbar />
      <div className='flex flex-col justify-center items-center h-full'>
        <TodoInput addNewItem={addNewItem}/>
        <TodoList taskList={taskList} removeItem={removeItem} completeTask={completeTask} />
      </div>
      <Footer />
    </main>
  );
};
