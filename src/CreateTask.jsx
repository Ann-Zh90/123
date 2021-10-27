import s from "./App.module.css";
import {useState} from "react";

const CreateTask = ({addTask, editMode}) => {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput) {
        addTask(userInput);
        }
        if (editMode === false)
        setUserInput('')
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}
                   className={s.createTask}
                   type="text"
                   placeholder={"Введите задачу..."}
                   value={userInput}
            />
            <button className={s.saveBtn}>Add To The List</button>
        </form>
    )
}

export default CreateTask