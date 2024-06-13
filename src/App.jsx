import RoutePaths from './RoutePaths';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  return (
    <div id="root">
      <div className="header-container">
      <Navbar />
      </div>
     <div className="main-content-container">
     <RoutePaths />
     </div>
     <div className="footer-container">
     <Footer />
     </div>
    </div> 
  );
}

export default App;
