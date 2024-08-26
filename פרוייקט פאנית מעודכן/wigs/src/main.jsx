import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { Services } from './componenta/meeting/services.jsx'
import { Service } from './componenta/meeting/serivce.jsx';
import { SignIn } from './componenta/login/usersighin.jsx';
import { SignUp } from './componenta/login/usersignup.jsx';
import { UpdateUser } from './componenta/actionsonuser/UpdateUser.jsx';
import { MainAdmin } from './componenta/admin/admin';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Meetings } from './componenta/admin/meetings.jsx';
import { SignInAdmin } from './componenta/admin/signInAdmin.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: 'services',
        Component: Services,
        children: [{

          path: ':service',
          Component: Service,
        }]
      },
      {
        path: 'services/:service',
        Component: Service,
      },
      {
        path: 'signin',
        Component: SignIn
      }
      , {
        path: 'signUp',
        Component: SignUp
      },
      ,
      {
        path: 'updateUser',
        Component: UpdateUser
      }
     
    ],
    errorElement: <p> oops :( not exists... </p>,
  },
  {
    path: 'admin',
    Component:SignInAdmin,
      children: [
        {
          path: 'mainAdmin',
          Component: MainAdmin
        },

        {
          path: 'meetingsAdmin',
          Component: Meetings
        }, {
          path: 'servicesAdmin',
          Component: Services
        }
      ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
