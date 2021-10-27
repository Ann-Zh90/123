import s from "./App.module.css";
import EditTask from "./EditTask";


const TaskItem = ({whatToDo, id, index, time, isEditTask, removeTask, activateEditMode, editTask, update}) => {
  return (
      <div>
          {isEditTask
              ? <EditTask whatToDo={whatToDo} editTask={editTask} id={id}/> /*<div>Edit</div>*/
              : (
                  <>
                      <div className={s.taskWrapper}>
                          <div className={s.task}>{index}. {whatToDo}</div>
                          <div className={s.time}>
                              <div >Created: {time}</div>
                              {update && <div className={s.update}>Updated: {update}</div>}
                          </div>
                      </div>
                      <button className={s.removeBtn} onClick={()=>removeTask(id)}>Remove</button>
                      <button onClick={()=> {activateEditMode(id)}}>Edit</button>
                  </>
              )
          }
      </div>
  )
}
export default TaskItem