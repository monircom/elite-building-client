import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import DashboardLayout from '../layouts/DashboardLayout'
import Statistics from '../pages/Dashboard/Common/Statistics'
import Profile from "../pages/Dashboard/Common/Profile";
import Announcement from "../pages/Dashboard/Common/Announcement";
import Coupon from "../pages/Dashboard/Admin/Coupon";
import Announcements from "../pages/Dashboard/Admin/Announcements";
import AllApartments from "../pages/AllApartments";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import PrivateRoute from './PrivateRoute';
import ApartmentDetails from "../pages/RoomDetails/ApartmentDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/login",
       element: <Login /> },

      { path: "/signup",
       element: <SignUp /> },

       { path: "/apartments",
       element: <AllApartments></AllApartments> },
      
      {
        path: "/apartment/:id",
        
        element:
        (
          <PrivateRoute>
            <ApartmentDetails />
          </PrivateRoute>
        ),

      },
    ],
  },
  {
    path: '/dashboard',
    element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      
    ),
    children: [
      {
        index: true,
        element: (   
          <PrivateRoute>
            <Profile />    
          </PrivateRoute>      
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
          <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'announcement',
        element: (
          <PrivateRoute>
          <Announcement></Announcement>
          </PrivateRoute>
        ),
      },

      {
        path: 'coupon',
        element: (
          <PrivateRoute>
          <Coupon></Coupon>
          </PrivateRoute>
        ),
      },
      // {
      //   path: 'my-listings',
      //   element: (
      //     <PrivateRoute>
      //       <HostRoute>
      //         <MyListings />
      //       </HostRoute>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: 'member',
        element: (
          <PrivateRoute>
              <ManageUsers />
              </PrivateRoute>
        ),
      },
      {
        path: 'admin-announcement',
        element: (
          <PrivateRoute>
              <Announcements></Announcements>
              </PrivateRoute>
        ),
      },
      // {
      //   path: 'my-bookings',
      //   element: (
      //     <PrivateRoute>
      //       <MyBookings />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'manage-bookings',
      //   element: (
      //     <PrivateRoute>
      //       <HostRoute>
      //         <ManageBookings />
      //       </HostRoute>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'profile',
      //   element: (
      //     <PrivateRoute>
      //       <Profile />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);
