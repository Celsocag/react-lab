// Composable Apps

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function HeaderComponent() {
  return (
    <header>
      <img src="react-logo.png" width="40px" alt="React logo" />
    </header>
  );
}
function MainConponent() {
  return (
    <main>
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
    <footer>
      <small>© 2024 Ziroll development. All rights reserved.</small>
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
