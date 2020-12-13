import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getCartItem, removeCartItem} from '../actions/cartItem'
import {Col,Row,ListGroup,Button,Form, Image,Card} from 'react-bootstrap'
import Message from '../components/message';
import {Link} from 'react-router-dom'
const CartScreen=({match,location,history})=>{
     
  const userLogin=useSelector((state)=>state.userLoginreducer)
  const {userInfo}=userLogin;

     const dispatch=useDispatch() 
    const productId=match.params.id
    const qty=location.search ? Number(location.search.split('=')[1]) : 1;
 
    const cart=useSelector((state)=>state.cart)
  

    const {cartItem} =cart

    useEffect(()=>{

      if(!userInfo){
        history.push('/signin')
       }
     
   if(productId){
       dispatch(getCartItem(productId,qty))
   }
    },[dispatch,productId,qty])

    
  const removeHandler=(id)=>{ 
      
       dispatch(removeCartItem(id))
  }

  const addtoPayment=()=>{
    history.push('/shipping')
  }

    return(
        <div>
        <Row>
        <Col md={8}>
        
        <h1>SHOPPING CART</h1>

        {cartItem.length === 0 ? <Message>Your Cart is Empty <Link to='/'>Go back</Link></Message>:(
          
<ListGroup variant="flush">
 {cartItem.map((item)=>(

<ListGroup.Item>

<Row>
<Col md={2}>

<Image src={item.image} fluid rounded ></Image>
</Col>
<Col md={3}>

 <Link to={`/product/${item.product}`}>{item.name}</Link>
</Col>
<Col md={2}>

${item.price}
</Col>
<Col md={2}>


<Form.Control as='select' value={item.qty} onChange={(e)=>dispatch(getCartItem(item.product,Number(e.target.value)))}> 
            {[...Array(item.countInStock).keys()].map((x)=>(
                <option key={x+1} value={x+1}>
                     {x+1}
                </option>
            ))}
             </Form.Control> 
 
</Col>

<Col>

<Button type='button' variant='light' onClick={()=>removeHandler(item.product)} >

    <i className='fas fa-trash'  />
</Button>
</Col>

</Row>

</ListGroup.Item>

 ))}
 
</ListGroup>

        )}
        </Col>
        <Col md={4}>
        
        <Card>

        <ListGroup>
  <ListGroup.Item><h3>Total({cartItem.reduce((acc,item)=>acc+item.qty,0)}) items</h3>
  
  Total ${cartItem.reduce((acc,item)=> acc+ item.qty * item.price,0).toFixed(2)}
  
  </ListGroup.Item>
  <ListGroup.Item>
  <Button className='btn-block' type="button " disabled={cartItem.length === 0} onClick={addtoPayment}>Process to Pay</Button>
  
  </ListGroup.Item>
 
</ListGroup>

         </Card>   
        
        </Col>
        
        </Row>
        </div>
    )
}
export default CartScreen;