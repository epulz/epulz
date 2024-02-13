import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Routes,
} from "react-router-dom";
import { Navigation } from "./main/Navigation";
import { Footer } from "./main/Footer";

const Loading = () => <div>Loading...</div>;

const Main = lazy(() => import("./main/Main"));
const About = lazy(() => import("./About/About"));
const Events = lazy(() => import("./Events/Events"));
const Mind = lazy(() => import("./Event/Mind"));

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          exact
          path="/epulz"
          element={
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/events"
          element={
            <Suspense fallback={<Loading />}>
              <Events />
            </Suspense>
          }
        />
        <Route
          path="/event/mind-unfolded"
          element={
            <Suspense fallback={<Loading />}>
              <Mind />
            </Suspense>
          }
        />
      </Routes>
      <Outlet />
      <Footer />
    </Router>
  );
}

export default App;
