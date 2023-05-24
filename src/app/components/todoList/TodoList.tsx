import Filter from '../filters/filters';
import { TodoItem } from '../todoItem/todoItem';
import { TaskProp } from '../../utils/type';

export const TodoList = ({ taskList, removeItem, completeTask, showAll, showActive, showCompleted, handleClearComplete, activeFilter }: any) => {

  return (
    <div className="mt-4 w-full rounded flex flex-col lg:max-w-xl">
      <Filter
        activeFilter={activeFilter}
        total={taskList.length}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
        handleClearComplete={handleClearComplete}
      />
      <div className='mt-4'>
        {
          taskList.map((task: TaskProp) => {
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
      </div>
    </div>
  );
};

export default TodoList;