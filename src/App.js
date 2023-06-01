import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Components/Main/Main';
import Results from './Components/Results/Results';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='/resultados' element={<Results/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
