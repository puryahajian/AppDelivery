
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.scss'
import ListMenu from './pages/listMenu/ListMenu';
import Profile from './pages/profile/Profile';
import Cart from './pages/cart/Cart';
import EditProfile from './pages/editProfile/EditProfile';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list-menu' element={<ListMenu/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/edit-profile' element={<EditProfile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
