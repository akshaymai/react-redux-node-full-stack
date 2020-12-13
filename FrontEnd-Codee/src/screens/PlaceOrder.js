
import React,{useState} from 'react'
import {Row,Col,Card,ListGroup,Image,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/checkoutSteps'
import Message from '../components/message'
 




const PlaceOrder=({step1,step2,step3,step4})=>{

    const cart=useSelector((state)=>state.cart)
    const {shippingAddress,paymentMethod} =cart

 //   Calculate prices
 const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItem.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)


const placeOrderHandler=()=>{
    console.log('ergtfh')
}


return(
    <>
     <CheckoutSteps step1 step2 step3 step4 />
        <Row>
             <Col md={8}>
                 <ListGroup variant='flush'>
                     <ListGroup.Item >
                            <h2>Shipping</h2>
                            <p> 
                            <strong>Address:  </strong>
                            {shippingAddress.address},{shippingAddress.city},{shippingAddress.postelcode},{shippingAddress.country}                            
                            </p>                      
                     </ListGroup.Item>
                     <ListGroup.Item >
                            <h2>Payment Method</h2>
                            <p> 
                            <strong>Method  </strong>
                              {paymentMethod}     
                            </p>                      
                     </ListGroup.Item>
                     <ListGroup.Item >
                            <h2>Order Item</h2>
                            {cart.cartItem.length === 0 ? <Message variant='danger'> Your cart is empty</Message>:(

                               <ListGroup variant="flush">

                                    {cart.cartItem.map((item,index)=>{
                                           console.log('fffffffffff',item)

                                        return <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image src={item.image} alt={item.name} fluid rounded></Image>
                                            </Col>
                                            <Col>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={4}>
                                             {item.qty} ⨉ {item.price} =${item.qty * item.price}
                                            </Col>
                                        </Row>
                                      </ListGroup.Item>

                                    })}
                                        
                               </ListGroup>
                                    )
                            }                    
                     </ListGroup.Item>
                 </ListGroup>
            </Col>
            <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {/* {error && <Message variant='danger'>{error}</Message>} */}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        </Row>
       
    </>
)
}
export default PlaceOrder