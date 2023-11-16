import './App.css';
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Models = lazy(() => import("./pages/Product"));
const Feature = lazy(() => import("./pages/Feature"));
const Profile = lazy(() => import("./pages/profile/profile"));
const Detailgt3rs = lazy(() => import("./pages/details/gt3rs"));
const Detailgt3 = lazy(() => import("./pages/details/gt3"));
const Detailturbo = lazy(() => import("./pages/details/turbo"));
const Detailturbocabrioret = lazy(() => import("./pages/details/turbocabrioret"));
const Detailturbos = lazy(() => import("./pages/details/turbos"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Models" element={<Models />} />
          <Route path="/Feature" element={<Feature />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Models/911-gt3-rs" element={<Detailgt3rs />} />
          <Route path="/Models/911-gt3" element={<Detailgt3 />} />
          <Route path="/Models/911-turbo" element={<Detailturbo />} />
          <Route
            path="/Models/911-turbo-cabrioret"
            element={<Detailturbocabrioret />}
          />
          <Route path="/Models/911-turbo-s" element={<Detailturbos />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
