import './App.css';
import Box from './Components/Box/Box';
import ContactBtn from './Components/ContactBtn/ContactBtn';


function App() {
  return (
    <div className="App">
      <header className="Header">DareGenerator.com</header>
        <Box />
        <ContactBtn />
      <footer className="Footer">Version 0.0.1</footer>
    </div>
  );
}

export default App;
