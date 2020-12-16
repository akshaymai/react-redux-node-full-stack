import axios from 'axios'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_MY_DETAILS_REQUEST,
  ORDER_MY_DETAILS_SUCCESS,
  ORDER_MY_DETAILS_FAIL
} from '../constant/order' 

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

  
    const {userLoginreducer:{userInfo}} =getState()  
        
    const config={

        headers:{
          
            Authorization:`Bearer ${userInfo.token}`
        },
         
    }

    const { data } = await axios.post(`/order/create/order`, order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
  
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    })
  }
}





export const orderDetailsaction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

  
    const {userLoginreducer:{userInfo}} =getState()  
        
    const config={

        headers:{
            'Content-type':'application/json',
            Authorization:`Bearer ${userInfo.token}`
        },
         
    }

    const { data } = await axios.get(`/order/get/order/${id}`,  config)

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
  
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message,
    })
  }
}




export const orderPayAction = (id,paymentResult) => async (dispatch, getState) => {
  
  try {
    dispatch({
      type: ORDER_PAY_REQUEST,
    })

  
    const {userLoginreducer:{userInfo}} =getState()  
        
    const config={

        headers:{
            'Content-type':'application/json',
            Authorization:`Bearer ${userInfo.token}`
        },
         
    }

    const { data } = await axios.put(`http://localhost:5002/order/update/order/${id}/paid`, paymentResult,config)

 
    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
  
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: message,
    })
  }
}



export const myOrderaction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_MY_DETAILS_REQUEST,
    })

  
    const {userLoginreducer:{userInfo}} =getState()  
        
    const config={

        headers:{
            'Content-type':'application/json',
            Authorization:`Bearer ${userInfo.token}`
        },
         
    }

    const { data } = await axios.get(`order/myorder`,  config)

    dispatch({
      type: ORDER_MY_DETAILS_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
  
    dispatch({
      type: ORDER_MY_DETAILS_FAIL,
      payload: message,
    })
  }
}
