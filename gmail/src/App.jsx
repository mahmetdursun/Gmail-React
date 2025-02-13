import Sidebar from './components/sidebar/Sidebar';
import Item from './components/item/item';
import Navbar from './components/Navbar/Navbar';
import GmailLayout from './layout/index'

function App() {
  return ( 
    <div>
      <GmailLayout/>
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
// import GmailRouters from './components/router';

// function AppRouter() {
//   return useRoutes([GmailRouters]);
// }

// function App() {
//   return (
//     <Router>
//       <AppRouter />
//     </Router>
//   );
// }

// export default App;
