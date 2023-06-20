import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Homes';
import About from './pages/Abouts';
import Products from './pages/Products';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';

function App(){
    return (
        <>
        <Router>
            <Navigation />
            <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/about" element={<About/>}></Route>
               <Route path="/products" element={<Products/>}></Route>
               <Route path="/cart" element={<Cart/>}></Route>      
            </Routes>
        </Router>
        </>
    );
}
export default App;