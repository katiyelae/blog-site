import RoutePaths from './RoutePaths';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <RoutePaths />
      <Footer />
    </div> 
  );
}

export default App;
