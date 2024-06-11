import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import DashboardLayout from '../layouts/DashboardLayout'
import Statistics from '../pages/Dashboard/Common/Statistics'

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
      {
        path: "/room/:id",
        element: <RoomDetails />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
     
        <DashboardLayout />
      
    ),
    children: [
      {
        index: true,
        element: (
          
            <Statistics />
          
        ),
      },
      // {
      //   path: 'add-room',
      //   element: (
      //     <PrivateRoute>
      //       <HostRoute>
      //         <AddRoom />
      //       </HostRoute>
      //     </PrivateRoute>
      //   ),
      // },
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
      // {
      //   path: 'manage-users',
      //   element: (
      //     <PrivateRoute>
      //       <AdminRoute>
      //         <ManageUsers />
      //       </AdminRoute>
      //     </PrivateRoute>
      //   ),
      // },
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
