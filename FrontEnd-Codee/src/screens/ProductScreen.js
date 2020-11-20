import React,{useState,useEffect} from 'react';
import {Col,Row,ListGroup,Image, Button} from 'react-bootstrap';
// import Products from '../products';
import Rating from '../components/rating';
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProductScreen = ({match}) => {

    const [product,setProduct]=useState([])
    useEffect(()=>{

        const fetchProducts=async ()=>{

            const {data}=await axios.get(`/product/${match.params.id}`)

            setProduct(data)
       
           } 
        fetchProducts();
    },[match])
    
    return (
        <>
        <Link to="/" className="btn btn-dark my-3">Go Back</Link>
        
        <Row>
            <Col md={6}>
              <Image src={product.image}  alt={product.name} fluid />
            </Col>
            <Col md={3}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                 <Rating    value={product.rating}
                   text={`${product.numReviews} reviews`}></Rating>                    
                </ListGroup.Item>
    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
    <ListGroup.Item> Description: {product.description}</ListGroup.Item>
</ListGroup>
            </Col>
            <Col md={3}>   
            <ListGroup>
    <ListGroup.Item> 
       <Row>
           <Col>
           Price: 
           </Col>
           <Col>
            ${product.price}
           </Col>
        </Row>

    </ListGroup.Item>
    <ListGroup.Item> 
        <Row>     
            <Col>
            <strong>Stock</strong>
            </Col>
            <Col>
                 { product.countInStock <= 0 ?'Out Of Stock' : product.countInStock}
            </Col>  
        </Row>
</ListGroup.Item>
  <ListGroup.Item>
      <Button className='btn-block' type="button " disabled={product.countInStock ===0}>Add To Cart</Button>
  </ListGroup.Item>
  
</ListGroup>
             </Col>
        </Row>


   
        </>
    );
}
export default ProductScreen;