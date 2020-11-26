import {USER_LOGIN_FAILED,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS}  from  '../constant/userInfo.js'

export const userInfoDetails=(state={},action)=>{

switch(action.type){

case USER_LOGIN_REQUEST :

return{loading:true}


case USER_LOGIN_SUCCESS :

return {loading:false,userInfo:action.payload}

case USER_LOGIN_FAILED :

return {loading:false,errorInfo:action.payload}
 
case USER_LOGOUT_SUCCESS :

return {}


default :
return state
}
}