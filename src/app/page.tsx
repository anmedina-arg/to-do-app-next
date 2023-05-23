'use client';
import { useEffect, useState } from 'react';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { TodoInput } from './components/todoInput/todoInput';
import { TodoList } from './components/todoList/TodoList';
import { initial } from './utils/seed';

export default function Home() {

  const [taskList, setTaskList] = useState(initial);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filterBy, setFilterBy] = useState(taskList);

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

  const completeTask = (id: any) => {
    let taskListCompleted = taskList.map((task) => {
      if (task.id === id) {
        let taskCompleted = {
          ...task,
          completed: !task.completed
        }
        return taskCompleted;
      } else {
        return task
      }
    })
    setTaskList(taskListCompleted)
  };

  const showAll = () => {
    setActiveFilter('all')
  };

  const showActive = () => {
    setActiveFilter('active')
  }

  const showCompleted = () => {
    setActiveFilter('completed')
  }

  const handleClearComplete = () => {
    const updateListTask = taskList.filter((task: any) => !task.completed)
    setTaskList(updateListTask)
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilterBy(taskList)
    } else if (activeFilter === 'active') {
      const activeTask = taskList.filter((task) => task.completed === false)
      setFilterBy(activeTask)
    } else if (activeFilter === 'completed') {
      const completedTask = taskList.filter((task) => task.completed === true)
      setFilterBy(completedTask)
    }
  },[activeFilter, taskList])

  return (
    <main className='h-screen w-full flex flex-col'>
      <Navbar />
      <div className='flex flex-col justify-start p-4 items-center h-full'>
        <TodoInput addNewItem={addNewItem}/>
        <TodoList
          taskList={filterBy}
          activeFilter={activeFilter}
          removeItem={removeItem}
          completeTask={completeTask}
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
          handleClearComplete={handleClearComplete}
        />
      </div>
      <Footer />
    </main>
  );
};
