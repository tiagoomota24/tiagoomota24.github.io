import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<><Home /><About /><Footer /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
