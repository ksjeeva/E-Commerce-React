import './App.css';

import { Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from '../Signup/Signup';
import New from './New';
import SignIn from '../Signin/SignIn';
import FooterPage from '../Footer/Footer';
import Combined from '../Categories/Combined';
import JoinProducts from '../Products/JoinProducts';
import JoinWproducts from '../Products/JoinWproducts';
import JoinKproducts from '../Products/JoinKproducts';


function App() { 
  return (
    <div> 
      <Routes> 
        <Route path='/E-Commerce-React' element={<New/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/LogIn' element={<SignIn/>}/>
        <Route path='/Mens' element={<JoinProducts/>}/>
        <Route path='/women' element={<JoinWproducts/>}/>
        <Route path='/kids' element={<JoinKproducts/>}/>
        <Route path='/categories' element={<Combined/>}/>
      </Routes>
      <FooterPage/>
    </div>
  );
}

export default App;
