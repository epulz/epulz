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
const Brain = lazy(() => import("./Event/Brain"));
const CodeDilemma = lazy(() => import("./Event/CodeDilemma"));
const Fable = lazy(() => import("./Event/Fable"));
const Orator = lazy(() => import("./Event/Orator"));
const Project = lazy(() => import("./Event/Project"));
const Scam = lazy(() => import("./Event/Scam"));

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
        <Route
          path="/event/brain-buster"
          element={
            <Suspense fallback={<Loading />}>
              <Brain />
            </Suspense>
          }
        />
        <Route
          path="/event/code-dilemma"
          element={
            <Suspense fallback={<Loading />}>
              <CodeDilemma />
            </Suspense>
          }
        />
        <Route
          path="/event/fable-forum"
          element={
            <Suspense fallback={<Loading />}>
              <Fable />
            </Suspense>
          }
        />
        <Route
          path="/event/the-orators-arena"
          element={
            <Suspense fallback={<Loading />}>
              <Orator />
            </Suspense>
          }
        />
        <Route
          path="/event/project-expo"
          element={
            <Suspense fallback={<Loading />}>
              <Project />
            </Suspense>
          }
        />
        <Route
          path="/event/scam-2024"
          element={
            <Suspense fallback={<Loading />}>
              <Scam />
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
