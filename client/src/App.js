import './App.css';
import {Box} from '@mui/material'
import DataProvider from './Context/DataProvider';
// components
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home';
import DetailView from './Components/Details/DetailView';
import Cart from './Components/Cart/Cart';
import {BrowserRouter,Route,Routes}  from 'react-router-dom';

function App() {
  return (
    <DataProvider>
     
      <BrowserRouter basename="">
   <Header/>
   <Box style={{marginTop:54}} >
      <Routes>
       <Route path ='/' element = {<Home/>}/>
       <Route path ='/product/:id' element = {<DetailView/>}/>
       <Route path='/cart' element={<Cart/>} />
      </Routes>
   </Box>
   </BrowserRouter>
   </DataProvider>
  );
}

export default App;
