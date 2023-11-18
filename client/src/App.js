import './App.css';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './layout/RootLayout';

import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ProfileLayout from './layout/ProfileLayout';
import Drivers from './components/driver_pages/Drivers';
import Driver from './components/driver_pages/Driver';
import { useCookies } from 'react-cookie';
import DriversLayout from './layout/DriversLayout';
import Settings from './components/profile/Settings';
import Bookings from './components/profile/Bookings';
import Reviews from './components/profile/Reviews';
import Billing from './components/profile/Billing';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [user, setUser] = useState('');
  const [cookies, setCookies, removeCookies] = useCookies();
  useEffect(() => {
    function fetchUser() {
      axios
        .get(`/api/v1/user/me`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + cookies.jwt,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.data.data);
          }
          console.log(res);
        })
        .catch((e) => console.error(e));
    }
    if (cookies.jwt) fetchUser();
  }, [cookies.jwt]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout
            cookies={cookies}
            removeCookies={removeCookies}
            photo={user.photo}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="login" element={<Login cookies={cookies} />} />
        <Route path="signup" element={<Signup cookies={cookies} />} />
        <Route
          path="profile"
          element={<ProfileLayout cookies={cookies} role={user.role} />}
        >
          <Route
            index
            element={
              <Settings
                cookies={cookies}
                userContact={user.contact}
                userName={user.name}
                userPhoto={user.photo}
              />
            }
          />
          <Route
            path="my-bookings"
            element={<Bookings bookings={user.bookings} />}
          >
            <Route index element={<Drivers />} />
          </Route>
          <Route
            path="my-reviews"
            element={<Reviews reviews={user.reviews} />}
          />
          <Route path="billing" element={<Billing />} />
        </Route>
        <Route path="drivers" element={<DriversLayout cookies={cookies} />}>
          <Route index element={<Drivers />} />
        </Route>
        <Route
          path="drivers/:driverId"
          element={<Driver cookies={cookies} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
