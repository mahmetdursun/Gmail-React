import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import GmailLayout from './layout'
import Inbox from './pages/inbox'
import Starred from './pages/starred'
import Sent from './pages/sent'
import Bin from './pages/bin'

const router = createBrowserRouter([
 {
    path: '/gmail',
    element: <GmailLayout />,
    children: [
      { path: 'inbox', element: <Inbox/> },
      { path: 'starred', element: <Starred /> },
      { path: 'sent', element: <Sent /> },
      { path: 'bin', element: <Bin /> }
    ],
  },
  // {
  //   path: '/',
  //   element: <Home/>
  // }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)