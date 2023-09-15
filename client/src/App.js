import './App.css';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layout/RootLayout';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

// import Footer from './components/Footer';
// import Header from './components/Header';
// import Overview from './components/Overview';
// import Profile from './components/Profile';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="help" element={<HelpLayout />}>
//         <Route path="faq" element={<Faq />} />
//         <Route path="contact" element={<Contact />} action={actionContact} />
//       </Route>

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
