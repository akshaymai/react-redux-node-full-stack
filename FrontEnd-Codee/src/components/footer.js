import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = (props) =>{
    return  (
        <>
        <Container>
         <Row>           
           <Col className="text-center py-3" >
           Copywrite&& copy 2020
           </Col>     
        </Row>               
         </Container> 
         </>
    );
}
export default Footer;