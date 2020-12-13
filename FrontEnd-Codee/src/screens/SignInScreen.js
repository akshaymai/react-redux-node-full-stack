import React,{useEffect,useState} from 'react'
import FromContainer from '../components/fromContainer';
import {Form,Button, Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {userLoginrequest} from '../actions/userInfo';
import Message from '../components/message'
import Loader from '../components/loder';
   
const SignIn=({location,history})=>{
      
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [successMsg,setSuccessMsg]=useState(false)
   const dispatch=useDispatch()
   const userInformation=useSelector((state)=>state.userLoginreducer)
   
   const {loading,userInfo,errorInfo}=userInformation

   
   const redirect=location.search ? location.search.split('=')[1] :'/';
    
   useEffect(()=>{

    if(userInfo){
      setSuccessMsg(userInfo.message)

      setTimeout(()=>{
         
        history.push(redirect)
      },2000)
      
    }

   },[userInfo,history,redirect])

const onSubmitHandler=(e)=>{
  e.preventDefault();
  dispatch(userLoginrequest(email,password))
}



    return(

     
        <FromContainer>
  <h1 className="py-3">Login Page</h1>
  {errorInfo && <Message variant='danger'>{errorInfo}</Message> }
    {successMsg ? <Message variant='info'>{successMsg}</Message> : null}
      {loading && <Loader/>}
<Form onSubmit={onSubmitHandler}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

   <Row className="py-3"> 
    <Col>
      <Link to='/register'>Not Register</Link>
    </Col>
   </Row>
        </FromContainer>
    )

}
 
export default SignIn;