import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  // function mostrarAlerta() {
  //   alert('Eliminando registro id : '+ props.task.id);
  // }

  return (
    <div className="bg-gray-700 text-white p-3 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.descripcion}</p>
      <button
        className="bg-red-600 p-1 rounded-full mt-4 hover:bg-red-900"
        onClick={() => deleteTask(task.id)}
      >
        <TiDelete />
      </button>
    </div>
  );
}
// TiDelete
export default TaskCard;
