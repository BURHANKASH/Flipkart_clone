import axios from "axios";

import * as actionType from '../Contants/CartConstant';

const URL = 'http://localhost:8000';


export const addToCart = (id,quantity) => async(dispatch)=>{
        try{
            const{ data } = await axios.get(`${URL}/product/${id}`)
            dispatch({type:actionType.ADD_TO_CART , payload: { ...data , quantity}});
        }
        catch(e){
           dispatch({type:actionType.ADD_TO_CART_ERROR ,payload: e.message});

            
        }

}

export const removeFromCart  = (id) =>(dispatch) =>{
        dispatch({type:actionType.REMOVE_FROM_CART , payload: id })
}