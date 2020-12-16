import React,{useEffect,useState} from 'react'
import {Form,Button, Col,Row,Table} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch,useSelector} from 'react-redux';
import {userDetailsRequest,userProfileUpdate} from '../actions/userInfo';
import Message from '../components/message'
import Loader from '../components/loder';
import { USER_UPDATE_PROFILE_RESET } from '../constant/userInfo'
import {myOrderaction} from '../actions/order'

   
const Profile=({location,history})=>{
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [rpwd,setRpwd]=useState("")
  const [message,setMessage]=useState(null)
  const dispatch=useDispatch()


  const userDetails=useSelector((state)=>state.userDetaisr_reducer)
  const {loading,user,errorInfo}=userDetails;
     
  const userLogin=useSelector((state)=>state.userLoginreducer)
  const {userInfo}=userLogin;
 

  const user_update=useSelector((state)=>state.userProfileUpsateReducer)
  const {success}=user_update;
    
  const myOrder=useSelector((state)=>state.myOrder)
  const {loading: loadingOrders, error: errorOrders, orders }=myOrder;
 

    
  useEffect(()=>{

    if(!userInfo){
     history.push('/signin')
    }else{

        if(!user || !user.name || success){
          dispatch({ type: USER_UPDATE_PROFILE_RESET })
            dispatch(userDetailsRequest('getprofile'))
            dispatch(myOrderaction())
       
        }else{
            setName(user.name)
            setEmail(user.email)
        }
    }

   },[success,history,user,userInfo,dispatch])

const onSubmitHandler=(e)=>{
 
    e.preventDefault();

  if(password !== rpwd){
      setMessage('password not match')
  }else{
  dispatch(userProfileUpdate({id:user._id,name,email,password}))   
  } 
}
 
    return(

      <Row>

          <Col md={3}>
          <h2 className="py-3">Update Profile</h2>
  {errorInfo && <Message variant='danger'>{errorInfo}</Message> }
  {success  && <Message variant='success'>'Update Successfully'</Message>}
  {message && <Message variant='danger'>{message}</Message> }
      {loading && <Loader/>}
<Form onSubmit={onSubmitHandler}>
<Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
 
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>

  <Form.Group controlId="formConformPassword">
    <Form.Label>Cofrom Password</Form.Label>
    <Form.Control type="password" placeholder="Confrom Password"  value={rpwd} onChange={(e)=>setRpwd(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Update
  </Button>
</Form>
          </Col>
          <Col md={6}>
          <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
          </Col>
      </Row>
    )

}
 
export default Profile ;