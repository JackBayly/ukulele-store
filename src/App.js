
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Store from './Components/Store';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
<Footer/>
   </BrowserRouter>
    </div>
  );
}

export default App;
