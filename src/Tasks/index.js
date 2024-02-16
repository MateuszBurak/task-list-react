import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(({ content, id, done }) => (
            <li key={id} className={(done && props.hideDone) ? "tasks__item--hidden" : "tasks__item"}>
                <button className="tasks__buttonDone">{done ? "✔" : ""}</button>
                <span className={`tasks__listItemContent ${done ? "tasks__listItemContent--done" : ""}`}>{content}</span>
                <button className="tasks__buttonDeleteTask">🗑</button>
            </li>
        ))}
    </ul>
)

export default Tasks;