'use client';
import { useEffect, useState } from 'react';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { TodoInput } from './components/todoInput/todoInput';
import { TodoList } from './components/todoList/TodoList';
import { initial } from './utils/seed';
import { TaskProp } from './utils/type';

export default function Home(): JSX.Element {

  const [taskList, setTaskList] = useState<TaskProp[]>([]);

  const [activeFilter, setActiveFilter] = useState('todas');

  const [filterBy, setFilterBy] = useState<TaskProp[]>(taskList);



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
    setActiveFilter('todas')
  };

  const showActive = () => {
    setActiveFilter('activas')
  };

  const showCompleted = () => {
    setActiveFilter('completas')
  };

  const handleClearComplete = () => {
    const updateListTask = taskList.filter((task: any) => !task.completed)
    setTaskList(updateListTask)
  };

  useEffect(() => {
    const taskListLS = localStorage.getItem('tareas');
    if (taskListLS) {
      setTaskList(JSON.parse(taskListLS));
    } else {
      setTaskList(initial);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(taskList))
  }, [taskList])

  useEffect(() => {
    if (activeFilter === 'todas') {
      setFilterBy(taskList)
    } else if (activeFilter === 'activas') {
      const activeTask = taskList.filter((task) => task.completed === false)
      setFilterBy(activeTask)
    } else if (activeFilter === 'completas') {
      const completedTask = taskList.filter((task) => task.completed === true)
      setFilterBy(completedTask)
    }
  }, [activeFilter, taskList]);

  return (
    <main className='h-full w-full flex flex-col bg-gradient-to-r from-neutral-200 via-sky-200 to-blue-200'>
      <Navbar />
      <div className='flex flex-col justify-start p-4 items-center h-full min-h-screen'>
        <TodoInput addNewItem={addNewItem} />
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
