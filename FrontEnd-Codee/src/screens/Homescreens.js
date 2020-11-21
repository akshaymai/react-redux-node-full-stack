import React from 'react';
import { Col,Row } from 'react-bootstrap';
import {useEffect} from 'react'
import Product from '../components/products'
// import products from '../../../Backend-Code/data/products';
import  {useSelector,useDispatch} from 'react-redux'
import {listofProduct} from '../actions/productAction'

const HomeScreen = (props) => {
 
const dispatch=useDispatch(); 
 
 const productList=useSelector((state)=>state.ProductList)
const {products,loading,error}=productList
    
useEffect(()=>{ 

dispatch(listofProduct()) 
},[dispatch])
   

    // useEffect(()=>{

    //     const fetchProducts=async ()=>{

    //         const {data}=await axios.get('/products')
    //         console.log("akshay",data)
    //         setProducts(data)
       
    //        } 
    //     fetchProducts();
    // },[])

// console.log('ffffffffff',Products)
    return (
        
        <>
         
              <h3>List Of Products</h3>
              {loading ? (
                  <h1>Loading </h1> 
              ):error ? (
              <h1>{error}</h1>
              ) :(
            <Row>
            {products.map((product)=>{
            return (
            <Col sm={12} md={6} lg={4} xl={3}>
            <Product  key={product._id} product={product} />
            </Col>
            )
            })}
         </Row>                       
              )}
        </>
    );
}
export default HomeScreen;