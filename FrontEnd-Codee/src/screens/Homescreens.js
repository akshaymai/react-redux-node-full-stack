import React from 'react';
import { Col,Row } from 'react-bootstrap';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Product from '../components/products'
// import products from '../../../Backend-Code/data/products';
const HomeScreen = (props) => {

    const [Products,setProducts]=useState([])

    

    useEffect(()=>{

        const fetchProducts=async ()=>{

            const {data}=await axios.get('/product')
            console.log("akshay",data)
            setProducts(data)
       
           } 
        fetchProducts();
    },[])

// console.log('ffffffffff',Products)
    return (
        
        <>
         
              <h3>List Of Products</h3>
        <Row>
            
            {Products.map((product)=>{

            return (
            <Col sm={12} md={6} lg={4} xl={3}>
            <Product  key={product._id} product={product} />
            </Col>
            )
            })}
         </Row>           
        
        </>
    );
}
export default HomeScreen;