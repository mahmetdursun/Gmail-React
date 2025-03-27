import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import GmailLayout from './layout'
import Inbox from './tabs/inbox'
import Starred from './tabs/starred'
import Sent from './tabs/sent'
import Bin from './tabs/bin'
import MailDetails from './components/mail-details'

const router = createBrowserRouter([
 {
    path: '/gmail',
    element: <GmailLayout />,
    children: [
      { path: 'inbox', element: <Inbox/> },
      { path: 'starred', element: <Starred /> },
      { path: 'sent', element: <Sent /> },
      { path: 'bin', element: <Bin /> },
      { path: ":category/mail/:id", element: <MailDetails /> },
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