import Header from "./components/header";
import Chart from "./pages/chart";
import Projects from "./pages/projects";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className='idmChart'>
      <Header />
      <Routes>
        <Route index element={<Projects />} />
        <Route path='/project/:id' element={<Chart />} />
      </Routes>
    </div>
  );
};

export default App;
