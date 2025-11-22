export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="kicker">Drug-free menstrual comfort</div>
        <h1>Silent Relief</h1>
        <p className="lead">Your compassionate, step-by-step, non-pharmacological guide to easing menstrual pain using gentle movement, breathwork, heat, posture, sleep, and simple daily rituals?designed for teens through menopause.</p>
        <div className="cta">
          <a className="button" href="/guide">Read the Guide</a>
          <a className="button secondary" href="/guide#download">Download / Print</a>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h3>Gentle by Design</h3>
          <p>Zero drugs. Zero supplements. Zero strenuous workouts. Only calming, accessible practices you can do anywhere.</p>
        </div>
        <div className="card">
          <h3>Actionable Steps</h3>
          <p>Clear routines, quick-relief protocols, and printable checklists for day 1-3 and beyond.</p>
        </div>
        <div className="card">
          <h3>For Every Season</h3>
          <p>Tailored notes for teens, postpartum, perimenopause, and menopause transitions.</p>
        </div>
      </section>
    </main>
  );
}
