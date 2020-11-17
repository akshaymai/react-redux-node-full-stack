import React from 'react';
import { Col,Container, Row } from 'react-bootstrap';
import Products from '../products'
import Product from '../components/products'
const HomeScreen = (props) => {
    return (
        <>
         
              <h1>List Of Products</h1>
        <Row>
            
            {Products.map((product)=>{

            return (
            <Col sm={12} md={6} lg={4} xl={3}>
            <Product  product={product} />
            </Col>
            )
            })}
         </Row>           
        
        </>
    );
}
export default HomeScreen;