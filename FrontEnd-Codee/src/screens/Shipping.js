import React,{useState} from 'react'
import FromContainer from '../components/fromContainer';
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux';
import {addShippingaddress} from '../actions/cartItem'

const Shipping=({history})=>{

    const cart=useSelector((state)=>state.cart)
    const {shippingAddress} =cart
const [address,setAddress]=useState(shippingAddress.address)
const [city,setCity]=useState(shippingAddress.city)
const [postelcode,setPostel]=useState(shippingAddress.postelcode)
const [country,setCountry]=useState(shippingAddress.country)

const dispatch=useDispatch()



const ShippingSubmit=(e)=>{
    e.preventDefault()
    dispatch(addShippingaddress({address,city,postelcode,country}))
    history.push('/payment')
}

return(
<FromContainer>
 <h1>Shipping</h1>
 <Form onSubmit={ShippingSubmit}>

 <Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Address" required value={address} onChange={(e)=>setAddress(e.target.value)} />
 
  </Form.Group>

  <Form.Group>
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="Enter City" required value={city} onChange={(e)=>setCity(e.target.value)} />
 
  </Form.Group>

 <Form.Group>
    <Form.Label>Postel Code</Form.Label>
    <Form.Control type="text" placeholder="Enter Pincode" required value={postelcode} onChange={(e)=>setPostel(e.target.value)} />
</Form.Group>
  <Form.Group>
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" placeholder="Enter Country" required value={country} onChange={(e)=>setCountry(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Shipping
  </Button>
 </Form>
</FromContainer>
)
}

export default Shipping