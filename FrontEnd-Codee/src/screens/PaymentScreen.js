import React,{useState} from 'react'
import FromContainer from '../components/fromContainer';
import {Form,Button,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux';
import {addpaymentMethod} from '../actions/cartItem'
import CheckoutSteps from '../components/checkoutSteps'



const PaymentScreen=({history})=>{

    const cart=useSelector((state)=>state.cart)
    const {shippingAddress} =cart

const [payment,setPaymentMethod]=useState('paypal')

const dispatch=useDispatch()

if(!shippingAddress){
  history.push('/shipping')
}


const PaymentSubmit=(e)=>{
    e.preventDefault()
    dispatch(addpaymentMethod(payment))
    history.push('/placeorder')
}

return(
<FromContainer>
    <CheckoutSteps step1 step2 step3/>
 <h1>Payment</h1>
 <Form onSubmit={PaymentSubmit}>
  <Form.Group>
    <Form.Label as='legend'> Select Method</Form.Label>

  <Col>
    <Form.Check 
    type="radio"
    label="paypal or credit card"
    id="paypal"
    name="paymentMethod"
    value="Paypal"
    checked
    
    onChange={(e)=>   setPaymentMethod(e.target.value)}
    >
    </Form.Check>
  
    {/* <Form.Check 
    type="radio"
    label="strip"
    id="strip"
    name="paymentMethod"
    value="strip"
    
    onChange={(e)=>setPaymentMethod(e.target.value)}
    >
    </Form.Check> */}
  
  
  </Col>
  </Form.Group>
  <Button variant="primary" className="my-3" type="submit">
   Continue
  </Button>
 </Form>
</FromContainer>
)
}

export default PaymentScreen