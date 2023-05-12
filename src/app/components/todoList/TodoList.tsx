import { TodoItem } from '../todoItem/todoItem';

export const TodoList = ({ taskList }: any) => {
  return (
    <div className="min-h-max bg-slate-400 rounded flex flex-col">
      <TodoItem task={taskList} />
    </div>
  );
};

export default TodoList;