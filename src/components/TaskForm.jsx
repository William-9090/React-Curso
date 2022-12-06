import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle(""), setDescripcion("");
  };

  return (
  
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-700 p-10 mb-4 mx-auto rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3">Crea Tu Tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className=" bg-slate-300 p-3 w-full mb-2"
        ></input>
        <br />
        <textarea
          placeholder="Escribe la descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className=" bg-slate-300 p-3 w-full mb-2 "
        ></textarea>
        <br />
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-300">Guardar</button>
      </form>
      </div>
  
  );
}

export default TaskForm;
