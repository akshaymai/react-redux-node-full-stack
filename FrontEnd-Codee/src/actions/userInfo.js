import axios from 'axios'
import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS ,USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED,USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS} from '../constant/userInfo'


export const userLoginrequest=(email,password)=>async (dispatch,getState)=>{

try {
    dispatch({type:USER_LOGIN_REQUEST})

    const config={

        headers:{
            'Content-type':'application/json'
        }
    }

    const {data}=await axios.post(`/user/login`,{email,password},config)

    dispatch({type:USER_LOGIN_SUCCESS,payload:data})
  
    localStorage.setItem('userInfo',JSON.stringify(data))

} catch (error) {
    
    dispatch({type:USER_LOGIN_FAILED,payload:
        error.response && error.response.data.message
        ? error.response.data.message : error.message
        })
}

}

export const userRegisterrequest=(name,email,password)=>async (dispatch,getState)=>{

    try {
        dispatch({type:USER_REGISTER_REQUEST})
    
        const config={
    
            headers:{
                'Content-type':'application/json'
            }
        }
    
        const {data}=await axios.post(`/user/signup`,{name,email,password},config)
    
        dispatch({type:USER_REGISTER_SUCCESS,payload:data})
      
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        
        localStorage.setItem('userInfo',JSON.stringify(data))
    
    } catch (error) {
        
        dispatch({type:USER_REGISTER_FAILED,payload:
            error.response && error.response.data.message  
            ? error.response.data.message : error.message
            })
    }
    
    }
    
export const Logout=()=>(dispatch)=>{

    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT_SUCCESS})
}