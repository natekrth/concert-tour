import './App.css';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import Home from './pages/Home';
import './styles/main.css';


function App() {
  return (
    <div className="App">
      <h1 className="text-3xl underline text-center text-blue-300 ">
        Hello world!
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
