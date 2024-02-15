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
const Auction = lazy(() => import("./Event/Auction"));
const Photography = lazy(() => import("./Event/Photography"));
const Project = lazy(() => import("./Event/Project"));
const Scam = lazy(() => import("./Event/Scam"));
const Accomodation = lazy(() => import("./Accomodation/Accomodation"));
const Contact = lazy(() => import("./Contact/Contact"));

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
          path="/epulz/about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/epulz/events"
          element={
            <Suspense fallback={<Loading />}>
              <Events />
            </Suspense>
          }
        />
        <Route
          path="/epulz/event/mind-unfolded"
          element={
            <Suspense fallback={<Loading />}>
              <Mind />
            </Suspense>
          }
        />
        <Route
          path="/epulz/event/brain-buster"
          element={
            <Suspense fallback={<Loading />}>
              <Brain />
            </Suspense>
          }
        />
        <Route
          path="/epulz/event/code-dilemma"
          element={
            <Suspense fallback={<Loading />}>
              <CodeDilemma />
            </Suspense>
          }
        />
        <Route
          path="/epulz/event/bid-wars"
          element={
            <Suspense fallback={<Loading />}>
              <Auction />
            </Suspense>
          }
        />
        <Route
          path="/epulz/event/photography"
          element={
            <Suspense fallback={<Loading />}>
              <Photography />
            </Suspense>
          }
        />
        <Route
          path="/epulz/event/project-expo"
          element={
            <Suspense fallback={<Loading />}>
              <Project />
            </Suspense>
          }
        />
        <Route
          path="/epulz/event/scam-2024"
          element={
            <Suspense fallback={<Loading />}>
              <Scam />
            </Suspense>
          }
        />
        <Route
          path="/epulz/accommodation"
          element={
            <Suspense fallback={<Loading />}>
              <Accomodation />
            </Suspense>
          }
        />
        <Route
          path="/epulz/contact-us"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
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
