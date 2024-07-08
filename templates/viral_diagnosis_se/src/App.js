import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./homepage/Homepage";
import FormPage from "./form/FormPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/symptomForm" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
