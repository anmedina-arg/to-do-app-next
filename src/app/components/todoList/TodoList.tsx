import Filter from '../filters/filters';
import { TodoItem } from '../todoItem/todoItem';

export const TodoList = ({ taskList, removeItem, completeTask, showAll, showActive, showCompleted, handleClearComplete, activeFilter }: any) => {

  return (
    <div className="min-h-max bg-slate-400 rounded flex flex-col">
      {
        taskList.map((task: any) => {
          const { id, name, completed } = task;
          return (
            <TodoItem
              id={id}
              name={name}
              completed={completed}
              key={id}
              removeItem={removeItem}
              completeTask={completeTask} />
          )
        })
      }
      <Filter
        activeFilter={activeFilter}
        total = {taskList.length}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export default TodoList;