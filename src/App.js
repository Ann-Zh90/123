import CreateTask from "./CreateTask";
import TaskItem from "./TaskItem";
import s from "./App.module.css"
import {useState} from "react";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [editMode, setEditMode] = useState({isEditModeState: false, id: ''});
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }

    const addTask = (userInput) => {
        let newTask = {
            id: Math.random().toString(36).substr(2, 9),
            whatToDo: userInput,
            time: new Date().toLocaleString("ru", options),
            updateTime: ""
            /*year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC'*/
        }
        setTasks([...tasks, newTask])
        setEditMode({isEditModeState: false, id: ''})
    }

    const editTask = (newWhatToDo, taskId) => {
        if (newWhatToDo) {
            setTasks(tasks.map(task => {
                        if (task.id === taskId && newWhatToDo !== task.whatToDo) {
                            task.whatToDo = newWhatToDo
                            task.updateTime = new Date().toLocaleString("ru", options)
                        }
                        return task
                    }
                )
            )
        }
        setEditMode({isEditModeState: false, id: ''})

    }
    const removeTask = (taskId) => {
        setTasks(tasks.filter(taskItem => taskItem.id !== taskId));
        console.log(editMode)
        console.log(tasks)
    }

    const activateEditMode = (id) => {
        setEditMode({isEditModeState: true, id: id})
    }

    return (
        <div className={s.app}>
            <header>
                <h1>Список задач: {tasks.length}</h1>
            </header>
            <main>
                <CreateTask addTask={addTask} editMode={editMode.isEditModeState}/>
                {tasks.map((task, index) => {
                        // if (editMode.editModeState && tasks.whatToDo === editMode.id) {
                        //    return  <CreateTask addTask={editTask} value={tasks.value} editMode={editMode.editModeState}/>
                        // } else {
                        return <TaskItem whatToDo={task.whatToDo} id={task.id} index={index + 1}
                                         key={task.id} time={task.time} isEditTask={editMode.id === task.id}
                                         removeTask={removeTask} activateEditMode={activateEditMode}
                                         editTask={editTask} update={task.updateTime}/>
                        // }

                    }
                )
                }

            </main>
        </div>
    )
}
export default App