import './App.css'
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar'
import './components/navbar/navbar.scss'; 

function App() {
  return ( 
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
