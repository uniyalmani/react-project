import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "./actionTypes"
import {APIurls} from '../helpers/url';
import {getFormBody} from '/helpers/utils';

export fuction startLogin(){
    return {
        type:LOGIN_START
    }
}
export fuction login(email, password){
    return (dispatch) =>{
        const url = APIurls.login;
        fetch(url,{
            method:'POST',
            header:{
                'content-Type':'apllication/x-www-form-urlencoded',

            },
            body:getFormBody({email, password})
        });
        
    }
        

    
}
export fuction loginFailed(){
    return {
        type:LOGIN_FAILED
    }
}