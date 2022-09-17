import logo from './logo.svg';
import './App.css';
import Header from './Pages/shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Lunch from './Pages/Home/Lunch';
import Breakfast from './Pages/Home/Breakfast';
import Dinner from './Pages/Home/Dinner';
import ItemWrap from './Pages/Home/ItemWrap';

function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/food/:lunch' element={<ItemWrap></ItemWrap>}></Route>
          <Route path='/food/:breakfast' element={<ItemWrap></ItemWrap>}></Route>
          <Route path='/food/:dinner' element={<ItemWrap></ItemWrap>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
