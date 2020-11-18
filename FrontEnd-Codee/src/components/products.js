import React from 'react';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './rating'
const Products = (props) => {
    return (
        <>
           <Card className="my-3 p-3 rounded">
               <Link to={`/product/${props.product._id}`}>
                 <Card.Img variant="top" src={props.product.image} />
                 </Link>
                 <Card.Body>

                   <Link to={`/product/${props.product._id}`}>
                       <Card.Title as="div">
                               <strong>{props.product.name}</strong>
                       </Card.Title>
                  </Link>
    <Card.Text as='div'>
    {/* <div className="my-3">{props.product.rating} from {props.product.numReviews}</div> */}
    <Rating   
    value={props.product.rating}
    text={`${props.product.numReviews} reviews`}
    />
    </Card.Text>
    
    <Card.Text as='h3'>
    ${props.product.price}
    </Card.Text>
  </Card.Body>
</Card> 
        </>
    );
}
export default Products;