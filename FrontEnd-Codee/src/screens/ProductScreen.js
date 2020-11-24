import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Col,Row,ListGroup,Image, Button, Form} from 'react-bootstrap';
// import Products from '../products';
import {Link} from 'react-router-dom'
import Rating from '../components/rating';

import {ProductDetails} from '../actions/productAction'
import Loader from '../components/loder';
import Message from '../components/message';

const ProductScreen = ({match,history}) => {
  
    const [qty,setQty]=useState(1)

    const dispatch=useDispatch()

    const productDetails=useSelector((state)=>state.ProductDetails)
     

    const {product,loading,error}=productDetails


    useEffect(()=>{
        dispatch(ProductDetails(match.params.id))
    },[match,dispatch])


    const addtoCartHandler=()=>{

        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    
    return (
        <>
        <Link to="/" className="btn btn-light my-3">Go Back</Link>

       {loading ? <Loader/> : error ? <Message variant='info'>{error}</Message> :
       
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
 {product.countInStock > 0 && (

<ListGroup.Item> 
   <Row>     
       <Col>
       <strong>Qty</strong>
       </Col>
       <Col>
       <Form.Control as='select' value={qty} onChange={(e)=>setQty(e.target.value)}> 
            {[...Array(product.countInStock).keys()].map((x)=>(
                <option key={x+1} value={x+1}>
                     {x+1}
                </option>
            ))}
             </Form.Control> 
       </Col>  
   </Row>
</ListGroup.Item>


 )}
<ListGroup.Item>
 <Button className='btn-block' type="button " disabled={product.countInStock ===0} onClick={addtoCartHandler}>Add To Cart</Button>
</ListGroup.Item>

</ListGroup>
        </Col>
   </Row>



       }        
       
        </>
    );
}
export default ProductScreen;