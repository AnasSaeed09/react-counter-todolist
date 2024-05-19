import { BrowserRouter as Router, Route , Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Counter/home';
import Todolist from './Components/To Do List/todolist';

function App() {
  return (
    <Router>
      <div className="App">
         <nav>
          <ul>
            <li><Link to="/" className='link-content'>Home</Link></li>
            <li><Link to="/To Do List" className='link-content'>Task List</Link></li>
          </ul>
         </nav>
          
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/To Do List" element={<Todolist/>}/>
          </Routes>
       </div>
    </Router>
  );
}

export default App;
