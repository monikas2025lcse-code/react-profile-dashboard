export default function SkillBadge({ label, level }) {
  return (
    <span className="skill-badge">
      <strong>{label}</strong>
      {level && <small> · {level}</small>}
    </span>
  );
}