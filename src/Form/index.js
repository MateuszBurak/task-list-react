import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form
            className="form__content"
            onSubmit={onFormSubmit}>
            <input
                className="form__input"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text"
                placeholder="Co jest do zrobienia?"
                min="1"
                autoFocus />
            <button
                className="form__button">
                Dodaj zadanie
            </button>
        </form>
    );
};

export default Form;