import StatBox from "./components/StatBox";
import TaskCard from "./components/TaskCard";

const tasks = [
  { id: 1, title: "Push Repo 1 to GitHub", category: "Git", priority: "High", done: true },
  { id: 2, title: "Build reusable task components", category: "React", priority: "High", done: false },
  { id: 3, title: "Design responsive task grid", category: "CSS", priority: "Medium", done: false },
  { id: 4, title: "Write README documentation", category: "Docs", priority: "Low", done: false },
];

export default function App() {
  const completedCount = tasks.filter((t) => t.done).length;

  return (
    <div className="tracker-app">
      <header className="tracker-header">
        <div>
          <h1>Daily Task Tracker</h1>
          <p>Organizing tasks with reusable cards & two-column layout</p>
        </div>
        <div className="stats-row">
          <StatBox label="Total Tasks" value={tasks.length} />
          <StatBox label="Completed" value={completedCount} />
        </div>
      </header>

      <main className="task-grid">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            category={task.category}
            priority={task.priority}
            done={task.done}
          />
        ))}
      </main>
    </div>
  );
}