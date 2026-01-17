export default function Section({ title, children }) {
  return (
    <section className="container">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}