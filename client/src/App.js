import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Header from './Components/header';
import Upload from './Pages/upload';
import './Sass/index.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
      <a href="/upload">Upload</a>
    </div>
  );
}

export default App;
