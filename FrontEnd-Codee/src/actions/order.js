import axios from 'axios'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL
} from '../constant/order' 

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

  
    const {userLoginreducer:{userInfo}} =getState()  
        
    const config={

        headers:{
            'Content-type':'application/json',
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