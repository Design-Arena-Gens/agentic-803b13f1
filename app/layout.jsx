import './globals.css';

export const metadata = {
  title: 'Silent Relief: Drug-Free Guide to Eliminating Menstrual Pain',
  description: 'Compassionate, evidence-informed strategies to relieve menstrual pain naturally with gentle, accessible methods.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <div className="brand">
              <div className="logo" />
              <div>Silent Relief</div>
            </div>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/guide">Guide</a>
            </nav>
          </header>
          {children}
          <footer className="footer">
            <div>? {new Date().getFullYear()} Silent Relief. Educational purposes only. Not medical advice.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
