import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { Dashboard } from "../pages";

function RootRoutes() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

export default RootRoutes;
