import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/user/AddUser';


function App() {

  return (
    <Router>
      <div >
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
