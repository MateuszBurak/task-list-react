import "./style.css";

const Form = (props) => (
    <form className="form__content">
        <input className="form__input" id="newTaskField" type="text"
            placeholder="Co jest do zrobienia?" min="1" autoFocus />
        <button className="form__button"> Dodaj zadanie </button>
    </form>
);

export default Form;