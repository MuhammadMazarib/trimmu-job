import './App.css';
import JobList from './pages/JobList';
import { Route, Routes } from "react-router";






function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<JobList/>}/>
      </Routes>
    </div>
 
</>
  );
}

export default App;
