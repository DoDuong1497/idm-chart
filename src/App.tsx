import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main-layout/main-layout";

import { Chart } from "./pages/chart";
import { Projects } from "./pages/project";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
        />
        <Route
          path='/project/:projectId/chart'
          element={
            <MainLayout>
              <Chart />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
