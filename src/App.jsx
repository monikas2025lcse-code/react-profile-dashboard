import ProfileHeader from "./components/ProfileHeader";
import SectionCard from "./components/SectionCard";
import SkillBadge from "./components/SkillBadge";

const skills = [
  { name: "React", level: "Learning" },
  { name: "Java", level: "Core" },
  { name: "Python", level: "Intermediate" },
  { name: "SQL", level: "Core" },
];

export default function App() {
  return (
    <div className="dashboard-container">
      <ProfileHeader
        name="Monika S"
        role="Computer Science & Data Science Student"
        location="Tamil Nadu, India"
        bio="Building modular UI components and practicing clean front-end architecture."
      />

      <main className="dashboard-grid">
        <SectionCard
          title="Technical Skills"
          subtitle="Reusable badge components rendered from data"
        >
          <div className="badge-group">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                label={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Assignment Focus"
          subtitle="Component organization & layout structure"
        >
          <p>
            Each repository in this assignment showcases distinct reusable
            components, custom layouts, and organized folder structure.
          </p>
        </SectionCard>
      </main>
    </div>
  );
}