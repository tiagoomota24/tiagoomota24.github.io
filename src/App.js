import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contato';
import Projects from './components/Projetos';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<><Home /><About /><Projects /><Contact /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
