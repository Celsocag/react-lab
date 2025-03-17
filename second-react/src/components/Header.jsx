export default function HeaderComponent() {
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

