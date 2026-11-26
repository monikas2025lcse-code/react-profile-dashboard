export default function TaskCard({ title, category, priority, done }) {
  return (
    <div className={`task-card ${done ? "done" : ""}`}>
      <div className="task-top">
        <span className="task-category">{category}</span>
        <span className={`priority-tag ${priority.toLowerCase()}`}>
          {priority}
        </span>
      </div>
      <h3>{title}</h3>
      <p className="task-status">{done ? "Completed" : "In Progress"}</p>
    </div>
  );
}