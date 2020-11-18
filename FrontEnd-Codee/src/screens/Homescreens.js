import React from 'react';
import { Col,Row } from 'react-bootstrap';
import Products from '../products'
import Product from '../components/products'
const HomeScreen = (props) => {
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