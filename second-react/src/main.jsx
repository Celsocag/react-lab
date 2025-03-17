// Simple styling

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function HeaderComponent() {
  return (
    <header className="header">
      <img className="logoImg" src="react-logo.png" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contct</li>
        </ul>
      </nav>
    </header>
  );
}
function MainConponent() {
  return (
    <main className="mainContent">
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}
function FooterComponent() {
  return (
    <footer className="footer">
      <small>© 2024 Albuquerque development. All rights reserved.</small>
    </footer>
  );
}

function MainPage() {
  return (
    <>
      <HeaderComponent />
      <MainConponent />
      <FooterComponent />
    </>
  );
}

root.render(<MainPage />);
