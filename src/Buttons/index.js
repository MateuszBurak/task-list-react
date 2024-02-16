import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllAsDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button
                onClick = {toggleHideDone}
                className="buttons__button"
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className={"buttons__button"}
                disabled={tasks.every(({ done }) => done)}
                onClick = {markAllAsDone} 
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);


export default Buttons;