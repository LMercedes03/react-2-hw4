import './App.css';
import { Nav } from './Nav';
import { HomePage} from './Pages/HomePage.js'
import { Exercise1 } from './Pages/Exercise1';
import { Exercise2 } from './Pages/Exercise2';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='AppStyle'>
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path= "/" exact={true} element={<HomePage />}/>
          <Route path= "/about" exact={true} element={<Exercise1 />}/>
          <Route path= "/contact" exact={true} element={<Exercise2 />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;