import reactLogo from '../react-logo.png'

export default function HeaderComponent() {
    return (
      <header >
        <nav>
          <img  src={reactLogo} alt="React logo" />
          <span>ReactFacts</span>
        </nav>
      </header>
    );
  }

