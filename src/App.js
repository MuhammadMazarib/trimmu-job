import logo from './logo.svg';
import './App.css';
import CharactersList from './pages/CharactersList';
import { Route, Router, Routes } from "react-router";
import Character from './pages/Character';





function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList/>}/>
      </Routes>
    </div>
 
</>
  );
}

export default App;
