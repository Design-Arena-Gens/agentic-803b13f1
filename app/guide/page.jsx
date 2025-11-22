"use client";

import { useRef } from 'react';

export default function GuidePage() {
  const topRef = useRef(null);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <main ref={topRef}>
      <section className="hero" id="download">
        <div className="kicker">Definitive PDF guide (print-ready)</div>
        <h1>Silent Relief: Your Drug-Free Guide to Eliminating Menstrual Pain</h1>
        <p className="lead">Compassionate, practical, and entirely non-pharmacological. Built on gentle movement, restorative breathwork, heat, acupressure, posture, sleep hygiene, and everyday lifestyle rhythms. Designed for teens through menopause?no supplements, no medications, no strenuous exercise.</p>
        <div className="cta print-actions">
          <button className="button" onClick={handlePrint}>Print / Save as PDF</button>
          <a className="button secondary" href="#toc">Skip to contents</a>
        </div>
        <small>Educational resource only. Not a diagnosis or medical advice. If pain is severe, worsening, or accompanied by concerning symptoms (see Safety First), seek medical care promptly.</small>
      </section>

      <section id="toc" className="card toc">
        <h2>Contents</h2>
        <ol>
          <li><a href="#how-to-use">How to Use This Guide</a></li>
          <li><a href="#safety">Safety First: When to Seek Care</a></li>
          <li><a href="#understanding">Understanding Menstrual Pain</a></li>
          <li><a href="#quick">Quick-Relief Protocols (10?20 minutes)</a></li>
          <li><a href="#core">Core Drug-Free Strategies</a></li>
          <li><a href="#day-plan">Day 1?3 Gentle Plan</a></li>
          <li><a href="#lifestyle">Daily Lifestyle Rhythms</a></li>
          <li><a href="#teen">Teen Toolkit</a></li>
          <li><a href="#peri">Perimenopause & Menopause Notes</a></li>
          <li><a href="#work-school">Work & School Game Plan</a></li>
          <li><a href="#checklists">Printable Checklists</a></li>
          <li><a href="#faq">FAQs</a></li>
        </ol>
      </section>

      <article className="card">
        <section id="how-to-use" className="section">
          <h2>How to Use This Guide</h2>
          <p>This is a gentle, zero-medication playbook. Start with <strong>Quick-Relief Protocols</strong> when you need immediate comfort. Then build a simple routine from <strong>Core Strategies</strong> and <strong>Daily Lifestyle Rhythms</strong>. Keep it light. If anything increases pain, stop and choose an easier option.</p>
        </section>

        <section id="safety" className="section">
          <h2>Safety First: When to Seek Care</h2>
          <ul>
            <li>Pain that suddenly worsens, feels different than usual, or disrupts daily life despite rest and comfort measures.</li>
            <li>Heavy bleeding soaking a pad/tampon every hour for several hours, or passing large clots.</li>
            <li>New pain after an IUD insertion, fever, foul-smelling discharge, dizziness or fainting.</li>
            <li>Pain with pregnancy or possible pregnancy.</li>
            <li>Pain with vomiting that prevents hydration, or any symptom that worries you.</li>
          </ul>
          <p>If any apply, contact a healthcare professional or urgent care. Trust your instincts.</p>
        </section>

        <section id="understanding" className="section">
          <h2>Understanding Menstrual Pain (In Plain Language)</h2>
          <p>Cramping often comes from the uterus contracting to release its lining. Gentle warmth, calm breathing, relaxed muscles, unhurried pacing, and supportive posture can lower muscle tension and help your nervous system shift from bracing to releasing?often reducing pain perception.</p>
        </section>

        <section id="quick" className="section">
          <h2>Quick-Relief Protocols (10?20 minutes)</h2>
          <h3>1) Warmth + Belly Breath Reset (10 minutes)</h3>
          <ol>
            <li>Apply a warm compress or hot water bottle over lower abdomen or lower back (comfortably warm, not hot).</li>
            <li>Lie semi-reclined with knees bent and supported by pillows.</li>
            <li>Breathe: Inhale through the nose for 4 counts, soften jaw and shoulders, exhale for 6?8 counts. Repeat for 20?30 breaths.</li>
          </ol>

          <h3>2) Pelvic Drop + Exhale Lengthening (8?12 minutes)</h3>
          <ol>
            <li>Position: Lie on your back, soles of feet on the floor, knees bent. Place one hand on belly, one on lower ribs.</li>
            <li>On each exhale, imagine the pelvic floor <em>dropping</em> and the lower belly <em>melting</em>. No force.</li>
            <li>Use 4-second inhale, 6?8-second exhale; repeat 20 cycles.</li>
          </ol>

          <h3>3) Gentle Lower-Body Unwind (10 minutes)</h3>
          <ol>
            <li>Knee-to-chest (single): 5 slow breaths each side.</li>
            <li>Knees-together sway: 6?8 relaxed sways side-to-side.</li>
            <li>Figure-4 stretch (very light): 4?5 breaths each side. Stop if pinchy.</li>
          </ol>

          <h3>4) Acupressure Trio (8?12 minutes)</h3>
          <p>Apply light-to-moderate pressure for 60?90 seconds per point, breathe slowly, repeat up to 3 rounds.</p>
          <ul>
            <li><strong>SP6 (Sanyinjiao):</strong> Inside of lower leg, ~4 finger-widths above inner ankle bone.</li>
            <li><strong>LI4 (Hegu):</strong> Soft web between thumb and index finger. Avoid if pregnant.</li>
            <li><strong>LV3 (Taichong):</strong> Top of foot, in the valley between big toe and second toe.</li>
          </ul>

          <h3>5) Restorative Positions (as needed)</h3>
          <ul>
            <li><strong>Supported Child?s Pose:</strong> Torso and head resting on stacked pillows or a folded blanket.</li>
            <li><strong>Legs on Chair:</strong> Lie on back, calves supported on a chair; arms wide, jaw soft.</li>
          </ul>
        </section>

        <section id="core" className="section">
          <h2>Core Drug-Free Strategies</h2>
          <h3>Heat Therapy</h3>
          <ul>
            <li>Use a hot water bottle or warm compress 15?20 minutes at a time. Protect skin with fabric.</li>
            <li>Alternate lower abdomen and low-back based on where you feel relief.</li>
          </ul>

          <h3>Breathwork to Calm the Nervous System</h3>
          <ul>
            <li><strong>4?7?8 (very gentle):</strong> Inhale 4, hold 2?3 (skip if stressful), exhale 6?8. 2?4 minutes.</li>
            <li><strong>Box-lite:</strong> Inhale 4, soft pause 2, exhale 6, soft pause 2. 2?4 minutes.</li>
          </ul>

          <h3>Pelvic Floor Relaxation</h3>
          <ul>
            <li>Think ?drop, melt, widen? on each exhale. Avoid bracing or squeezing.</li>
            <li>Try the cue: jaw unclenches ? pelvic floor softens.</li>
          </ul>

          <h3>Gentle Movement (No Strain)</h3>
          <ul>
            <li>5?10 minute slow walk or indoor pacing while breathing slowly.</li>
            <li>Micro-mobility: ankle circles, shoulder rolls, side-bend reach with easy breath.</li>
          </ul>

          <h3>Self-Massage & Acupressure</h3>
          <ul>
            <li>Lower belly massage: small clockwise circles, 2?3 minutes with light pressure.</li>
            <li>Low-back sweep: fists gently glide along the muscles next to the spine (not on spine), 1?2 minutes.</li>
          </ul>

          <h3>Supportive Posture</h3>
          <ul>
            <li>Seated: feet supported, back slightly reclined, a cushion behind low-back.</li>
            <li>Standing: unlock knees, soften ribcage, exhale fully to reduce bracing.</li>
          </ul>

          <h3>Sleep & Rest Hygiene</h3>
          <ul>
            <li>Wind-down: dim lights, warm shower, 5 minutes of slow breathing.</li>
            <li>Night comfort: side-lying with a pillow between knees or a soft belly pillow.</li>
          </ul>
        </section>

        <section id="day-plan" className="section">
          <h2>Day 1?3 Gentle Plan</h2>
          <h3>Morning (10?20 minutes)</h3>
          <ul>
            <li>Warm compress + 20 slow breaths.</li>
            <li>Pelvic drop practice, 2?3 minutes.</li>
            <li>Short walk or sway/stretch sequence.</li>
          </ul>
          <h3>Midday</h3>
          <ul>
            <li>Acupressure trio or supported pose break (5?10 minutes).</li>
            <li>Light movement snack: 5 minutes of easy pacing or ankle/hip circles.</li>
          </ul>
          <h3>Evening</h3>
          <ul>
            <li>Warm shower or warm compress.</li>
            <li>Breathwork (exhale-focused) and a comfortable resting position.</li>
          </ul>
        </section>

        <section id="lifestyle" className="section">
          <h2>Daily Lifestyle Rhythms (Gentle, Chemical-Free)</h2>
          <ul>
            <li><strong>Hydration:</strong> Regular sips of warm water throughout the day can feel soothing.</li>
            <li><strong>Regular Meals:</strong> Simple, balanced plates you tolerate well; avoid long gaps that can increase tension.</li>
            <li><strong>Pacing:</strong> Lower-demand tasks during day 1?2; batch or delegate when possible.</li>
            <li><strong>Environment:</strong> Soften lights, reduce noise, keep a cozy layer for warmth.</li>
            <li><strong>Digital Hygiene:</strong> Short screen breaks; gentle soundscapes or quiet can help downshift.</li>
          </ul>
        </section>

        <section id="teen" className="section">
          <h2>Teen Toolkit</h2>
          <ul>
            <li>Create a small ?comfort kit?: heat pack, soft socks, water bottle, supportive note to self.</li>
            <li>Use the school nurse?s office for 10-minute warmth + breath reset if available.</li>
            <li>Practice the acupressure trio at your desk with slow, quiet breathing.</li>
          </ul>
        </section>

        <section id="peri" className="section">
          <h2>Perimenopause & Menopause Notes</h2>
          <ul>
            <li>Cycles can be irregular; anchor your routine to symptoms rather than dates.</li>
            <li>Emphasize posture support and gentle walking to reduce stiffness and tension.</li>
            <li>Prioritize sleep wind-down habits; small changes often yield big differences in comfort.</li>
          </ul>
        </section>

        <section id="work-school" className="section">
          <h2>Work & School Game Plan</h2>
          <ul>
            <li>Communicate: request a warm-up break or flexible seating when possible.</li>
            <li>Alternate sit/stand; keep low-back supported; schedule a 5-minute movement snack each hour.</li>
            <li>Have a private cue (e.g., breathe + release jaw) before high-focus tasks.</li>
          </ul>
        </section>

        <section id="checklists" className="section">
          <h2>Printable Checklists</h2>
          <h3>Quick-Relief (circle 2?3)</h3>
          <ul>
            <li>[ ] Warm compress (10?20 min)</li>
            <li>[ ] Belly breath reset (20?30 breaths)</li>
            <li>[ ] Pelvic drop practice (2?3 min)</li>
            <li>[ ] Gentle lower-body unwind (10 min)</li>
            <li>[ ] Acupressure trio (8?12 min)</li>
            <li>[ ] Restorative pose (5?10 min)</li>
          </ul>
          <h3>Day 1?3 Plan</h3>
          <ul>
            <li>[ ] Morning warmth + breath</li>
            <li>[ ] Midday acupressure break</li>
            <li>[ ] Evening warm shower/compress</li>
          </ul>
          <h3>Daily Rhythm</h3>
          <ul>
            <li>[ ] Hydration (warm water sips)</li>
            <li>[ ] Regular, simple meals</li>
            <li>[ ] Pacing + micro-movement</li>
            <li>[ ] Wind-down routine</li>
          </ul>
          <p className="print-actions"><em>Tip:</em> Use the ?Print / Save as PDF? button at the top. In your print dialog, choose ?Save as PDF?.</p>
        </section>

        <section id="faq" className="section">
          <h2>FAQs</h2>
          <h3>Is this safe if I?m new to movement?</h3>
          <p>Yes?choose the most comfortable options, move slowly, and stop if anything increases pain.</p>
          <h3>Can I use these methods alongside medical care?</h3>
          <p>Yes. These are supportive, non-pharmacological comfort measures. Follow your clinician?s guidance if you?re under care.</p>
          <h3>Will this eliminate pain completely?</h3>
          <p>Many people experience meaningful relief. Results vary. Consistency and self-kindness matter. Seek medical input if pain persists or worsens.</p>
        </section>

        <section className="section">
          <h2>Kind Reminder</h2>
          <p>You deserve comfort. Small, gentle steps?taken regularly?can shift your body from bracing to ease. Celebrate each moment of relief.</p>
        </section>
      </article>

      <div className="cta print-actions" style={{ marginTop: 24, marginBottom: 24 }}>
        <button className="button" onClick={handlePrint}>Print / Save as PDF</button>
        <a className="button secondary" href="#top">Back to top</a>
      </div>
    </main>
  );
}
