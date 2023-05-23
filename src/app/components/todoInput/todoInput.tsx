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
    <div className="w-full flex justify-between">
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <input
          type="text"
          placeholder="Agregar una tarea..."
          className="border-solid border-black border-2 p-4 rounded-md mr-2 mb-2 w-full"
          onChange={handleChange}
          value={tarea}
        />
        <button type="submit" >
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex items-center justify-center mb-2">
            <g id="Edit / Add_Plus_Circle">
              <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
      </form>
    </div>
  )
};

export default TodoInput;