import Box from './Components/Box/Box';
import ContactBtn from './Components/ContactBtn/ContactBtn';
import './sass/main.css';

// testing
function App() {
  return (
    <div className="app">
      <header className="Header">DareGenerator.com</header>
        <Box />
        <ContactBtn />
      <footer title="Version 1.0.2: Now Mobile Compatible!" className="Footer">Version 0.0.1</footer>
    </div>
  );
}

export default App;
