
import './App.css'; 
import Navbar from './Component/navbar/Navbar'
import Home from './Component/home/Home';
import Freeshipping from './Component/home/Freeshipping';
import Selling from './Component/Product/Selling';
import Fruits from './Component/Product/Fruits';
import Vegetables from './Component/Product/Vegetables';
import Registration from './Component/Product/Registration';
import Trending from './Component/Product/Trending';
import Reviews from './Component/Product/Reviews';
import Brand from './Component/brand/Brand';
import Footer from './Component/footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Freeshipping/>
      <Selling/>
      <Fruits/>
      <Vegetables/>
      <Registration/>
      <Trending/>
      <Reviews/>
      <Brand/>
      <Footer/>


    </div>
  );
}

export default App;
