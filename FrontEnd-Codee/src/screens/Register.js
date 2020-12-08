import React,{useEffect,useState} from 'react'
import FromContainer from '../components/fromContainer';
import {Form,Button, Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {userRegisterrequest} from '../actions/userInfo';
import Message from '../components/message'
import Loader from '../components/loder';
   
const Register=({location,history})=>{
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [rpwd,setRpwd]=useState("")
  const [message,setMessage]=useState(null)
   const dispatch=useDispatch()
   const userInformation=useSelector((state)=>state.userRegisterreducer)
   
   const {loading,userInfo,errorInfo}=userInformation
   
   const redirect=location.search ? location.search.split('=')[1] :'/';
    
   useEffect(()=>{

    if(userInfo){
      setMessage('succsessfully register')
      
     history.push(redirect)
    }

   },[userInfo,history,redirect])

const onSubmitHandler=(e)=>{
  e.preventDefault();
  if(password !== rpwd){
      setMessage('password not match')
  }else{
  dispatch(userRegisterrequest(name,email,password))   
  }
}

    return(

     
        <FromContainer>
  <h1 className="py-3">RegisterPage</h1>
  {errorInfo && <Message variant='danger'>{errorInfo}</Message> }
  

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
    Submit
  </Button>
</Form>

   <Row className="py-3"> 
    <Col>
     Alreday Register? <Link to={'/signin'}>Login here</Link>
    </Col>
   </Row>
        </FromContainer>
    )

}
 
export default Register;