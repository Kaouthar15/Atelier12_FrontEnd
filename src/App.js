import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {Route,Routes,NavLink} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <ul>
          <li><NavLink to='/' >Home</NavLink></li>
        </ul>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/> 
        </Routes>
    </div>
  );
}

export default App;
