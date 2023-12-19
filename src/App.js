import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Shop />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/review' element={<OrderReview />}/>
          <Route path='/inventory' element={<Inventory />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
