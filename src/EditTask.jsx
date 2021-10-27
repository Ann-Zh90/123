import s from "./App.module.css";
import {Form, Field} from 'react-final-form'

const EditTask = ({whatToDo, editTask, id}) => {
    const onSubmit = (e) => {
        editTask(e.edit, id)

    }
    return <Form onSubmit={onSubmit}

                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit}>
                         <Field
                             name="edit"
                             className={s.createTask}
                             component="input"
                             initialValue={whatToDo}
                         />
                         <button className={s.saveBtn}>Save</button>
                     </form>)}
    />
}


export default EditTask


/*import {Form, Field} from 'react-final-form'

const MyForm = () => (
    <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <h2>Simple Default Input</h2>
                <div>
                    <label>First Name</label>
                    <Field name="firstName" component="input" placeholder="First Name"/>
                </div>

                <h2>An Arbitrary Reusable Input Component</h2>
                <div>
                    <label>Interests</label>
                    <Field name="interests" component={InterestPicker}/>
                </div>

                <h2>Render Function</h2>
                <Field
                    name="bio"
                    render={({input, meta}) => (
                        <div>
                            <label>Bio</label>
                            <textarea {...input} />
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                />

                <h2>Render Function as Children</h2>
                <Field name="phone">
                    {({input, meta}) => (
                        <div>
                            <label>Phone</label>
                            <input type="text" {...input} placeholder="Phone"/>
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>

                <button type="submit">Submit</button>
            </form>
        )}
    />
)*/
