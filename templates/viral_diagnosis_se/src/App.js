import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./homepage/Homepage";
import FormPage from "./form/FormPage";
import EvoFormPage from "./form/EvoFormPage";
import ResultsRage from "./results/ResultsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/symptomForm" element={<FormPage />} />
        <Route path="/evolutionForm" element={<EvoFormPage />} />
        <Route path="/results" element={<ResultsRage />} />
      </Routes>
    </>
  );
}

export default App;
