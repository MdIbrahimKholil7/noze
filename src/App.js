import './App.css';
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Header>
    </div>
  );
}

export default App;
