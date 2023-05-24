import { useState } from "react";

export const TodoInput = ({ addNewItem }: any) => {
  const [tarea, setTarea] = useState('');

  const handleChange = (e: any) => {
    setTarea(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (tarea.trim() !== '') {
      addNewItem(tarea);
      setTarea('');
    }
  };

  return (
    <div className="w-full flex justify-between lg:max-w-xl">
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <input
          type="text"
          placeholder="Agregar una tarea..."
          //className="border-solid border-black border-2 p-4 rounded-md mr-2 mb-2 w-full"
          className="w-full text-gray-700 input border-none p-4 rounded-lg bg-gray-200 shadow-md transition duration-300 focus:outline-gray-200 focus:bg-gray-200 focus:shadow-inner"
          onChange={handleChange}
          value={tarea}
          autoFocus
        />
        <button
          type="submit"
          className="m-2 h-10 w-10 flex items-center font-medium text-base px-2 py-2 text-white bg-gradient-to-r from-green-600 to-green-400 focus:outline-none hover:shadow-md active:shadow-sm rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
          </svg>
        </button>
      </form>
    </div>
  )
};

export default TodoInput;