import axios from 'axios'
import { USER_DETAILS_FAILED,
     USER_DETAILS_REQUEST, 
     USER_DETAILS_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS ,
     USER_LOGOUT_SUCCESS,
     USER_PROFILE_UPDATE_REQUEST,
      USER_PROFILE_UPDATE_FAILED, 
      USER_PROFILE_UPDATE_SUCCESS,
       USER_REGISTER_FAILED,
       USER_REGISTER_REQUEST,
        USER_REGISTER_SUCCESS,
        USER_DETAILS_RESET} from '../constant/userInfo'


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
    dispatch({ type: USER_DETAILS_RESET })
}

export const userDetailsRequest=(id)=>async (dispatch,getState)=>{

    try {
        dispatch({type:USER_DETAILS_REQUEST})
    
          const {userLoginreducer:{userInfo}} =getState()  

        const config={
    
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            },
             
        }
    
        const {data}=await axios.get(`/user/${id}`,config)
        
        dispatch({type:USER_DETAILS_SUCCESS,payload:data})
      
       
    
    } catch (error) {
        
        dispatch({type:USER_DETAILS_FAILED,payload:
            error.response && error.response.data.message  
            ? error.response.data.message : error.message
            })
    }
    
    }
 
export const userProfileUpdate=(user)=>async (dispatch,getState)=>{
    
   console.log('dfghbjnmk,lkjhgfdsgthj',user)
    try {
        dispatch({type:USER_PROFILE_UPDATE_REQUEST})
    
          const {userLoginreducer:{userInfo}} =getState()  
        
        const config={
    
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            },
             
        }
       console.log('rr')
        const {data}=await axios.put('/user/update/profile',user,config)
         console.log('gggggggg',data)
        dispatch({type:USER_PROFILE_UPDATE_SUCCESS,payload:data})  
      
       
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
          })
          localStorage.setItem('userInfo', JSON.stringify(data))
    
    } catch (error) {
        
        dispatch({type:USER_PROFILE_UPDATE_FAILED,payload:
            error.response && error.response.data.message  
            ? error.response.data.message : error.message
            })
    }
    
    }
 