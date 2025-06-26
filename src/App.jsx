import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Navbar from './components/Navbar';
import AllNew from './components/allnew';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allnew" element={<AllNew />} />
      </Routes>
    </Router>
  );
}

export default App;