export const TodoItem = ({ id, name, completed, removeItem, completeTask }: any) => {

  const handleRemove = (id:any) => {
    //console.log('clickeaste la tarea con id:', id);
    removeItem(id);
  };

  const handleComplete = (id: any) => {
    completeTask(id)
  }

  return (
     <>
        <div className='flex justify-between' key={id}>
          <input type='checkbox' checked={completed} onChange={() => handleComplete(id)}/>
          <span className={completed ? 'bg-red-500' : 'bg-green-500'}>{name}</span>
          <button onClick={() => handleRemove(id)}>X</button>
        </div>
     </>
   );
};

export default TodoItem;