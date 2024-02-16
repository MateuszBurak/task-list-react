import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="tasks">
        {tasks.map(({ content, id, done }) => (
            <li
                key={id}
                className={
                    (done && hideDone) ? "tasks__item--hidden" : "tasks__item"}>
                <button
                    className="tasks__buttonDone">
                    {done ? "✔" : ""}
                </button>
                <span
                    className={
                        `tasks__listItemContent ${done ? "tasks__listItemContent--done" : ""}`
                    }>
                    {content}
                </span>
                <button
                    onClick={() => removeTask(id)}
                    className="tasks__buttonDeleteTask">
                    🗑
                </button>
            </li>
        ))}
    </ul>
)

export default Tasks;