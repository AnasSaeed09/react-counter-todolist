import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Counter/home';
import Todolist from './Components/To Do List/todolist';

function App() {
  return (
    <Router>
      <div className="App">  
          <Routes>
            {/*To render only the path contents , not the full DOM */}
            <Route path="/" element={<Home/>}/>
            <Route path="/To Do List" element={<Todolist/>}/>
          </Routes>
       </div>
    </Router>
  );
}

export default App;
