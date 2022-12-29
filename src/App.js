import './index.css'
import ProductsPage from './components/ProductsPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductChosen from './components/ProductChosen'
import React,{useEffect} from 'react'
import {useDispatch}from 'react-redux'
import axios from 'axios'
import {updateProducts} from './actions/productAction'

function App() {

  const dispatch = useDispatch()

  async function prdtsFetch(){
    
    const res = await axios.get('https://fakestoreapi.com/products').catch(err=>console.log('err',err));
    const data = res.data
    dispatch(updateProducts(data))
    console.log('data ',data)
  }

  useEffect(() => {
    console.log('effect creating dispatch')
  prdtsFetch();
  }, [])

  return (
<>
    <h1 className='header'>Big Store</h1>
    
      <div className='container'>

        
        <hr/>
        <Router>

        <Routes>
          <Route exact path='/' element={<ProductsPage/>}/>
          <Route exact path='/product/:productId' element= {<ProductChosen/>}/>

        </Routes>
        </Router>
      </div>
</>
  );
}

export default App;
