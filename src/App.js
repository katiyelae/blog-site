import RoutePaths from './RoutePaths';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  return (
    <div id="root">
      <Navbar />
      <RoutePaths />
      <Footer />
    </div> 
  );
}

export default App;
