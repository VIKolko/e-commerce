import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userSlice"

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        console.log(user)
        const res = await publicRequest.post('/auth/login',user)
        
        dispatch(loginSuccess(res.data))
        console.log(res.data)
    }catch(err){
        dispatch(loginFailure(err))
    }
}