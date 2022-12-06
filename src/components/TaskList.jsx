import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
// {tasks, deleteTask}


function TaskList() {
  const {tasks, deleteTask} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h2 className='text-white text-4xl font-bold text-center'>No hay Tareas aun</h2>;
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) => (
       <TaskCard key={task.id} task={task} /> 
      ))}
    </div>
  );
}

export default TaskList;
