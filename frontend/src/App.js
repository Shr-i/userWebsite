import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Loader from "./Components/Loader/Loader"
const SignUp = lazy(() => import("./Components/SignUp/SignUp"));
const SignIn = lazy(() => import("./Components/SignIn/SignIn"))
const About = lazy(() => import("./Components/About/About"));
const Contact =  lazy(() => import("./Components/Contact/Contact"))
const SignOut =  lazy(() => import("./Components/SignOut/SignOut"));
const Home =  lazy(() => import("./Components/Home/Home"));
const Dashboard =  lazy(() => import("./Components/Dashboard/Dashboard"));
const PrivateRoute = lazy(() => import("./PrivateRoute/PrivateRoute"));

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
