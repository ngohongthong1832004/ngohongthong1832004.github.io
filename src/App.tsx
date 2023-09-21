import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Auth from './components/auth';
import Login from "./components/login";
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const App:React.FC = () => {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={Home} />
          <Route path="/auth" Component={Auth} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
