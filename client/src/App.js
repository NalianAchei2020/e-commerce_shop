import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Header from './Components/header';
import './Sass/index.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
