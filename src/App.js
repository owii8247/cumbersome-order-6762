import './App.css';
import Footer from './Components/Footer';
import AllRoutes from './Routes/AllRoutes';
import Navbar1 from './Components/Navbar1';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Header />
      <AllRoutes />
      <Footer />

      
    </div>
  );
}

export default App;
