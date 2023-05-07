
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import Footer from './components/Footer/Footer';
import Sdata from './components/Shops/Sdata';

function App() {

  const {productItems} = Data;
  const {shopItems} = Sdata;
  

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pages productItems={productItems} shopItems={shopItems}/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
