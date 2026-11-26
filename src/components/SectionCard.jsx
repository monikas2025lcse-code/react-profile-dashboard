export default function SectionCard({ title, subtitle, children }) {
  return (
    <section className="section-card">
      <div className="section-header">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}