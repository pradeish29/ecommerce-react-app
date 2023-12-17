import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import{Navbar} from "./components/navbar"
import{Shop} from'./pages/shop/shop'
import{Cart} from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context';
import {Footer} from './components/footer'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/ecommerce-react-app' element={<Shop/>}/>
          <Route path='/ecommerce-react-app/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
