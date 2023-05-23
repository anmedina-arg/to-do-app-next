
import { useState } from "react";

export const TodoInput = ({ addNewItem }: any) => {
  const [tarea, setTarea] = useState('');

  const handleChange = (e: any) => {
    setTarea(e.currentTarget.value);
  };

  const handleSubmit = ( e : any) => {
    e.preventDefault();
    if (tarea.trim() !== '') {
      addNewItem(tarea);
      setTarea('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Agregar una tarea..."
          className="border-solid border-black border-2 p-4"
          onChange={handleChange}
          value={tarea}
        />
        <button type="submit">Cargar</button>
      </form>
    </div>
  )
};

export default TodoInput;