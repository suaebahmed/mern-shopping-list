import {GET_ITEMS,DELETE_ITEM,ADD_ITEM, ITEMLS_LOADING} from '../actions/actionType'
import axios from 'axios'



export const getItems = () =>{
    return (dispatch)=>{

        dispatch({type: ITEMLS_LOADING});
        axios.get('http://localhost:5000/api/items')
             .then(response=>{
                const data = response.data.products
                dispatch({type: GET_ITEMS,payload: data})
             })
             .catch(err=>{
                 console.log(err)
             })
    }
}

export const addItem = (item) =>{
    return (dispatch,getState) =>{
        axios.post('http://localhost:5000/api/items',item,configAuth(getState)) // item is obj 
        .then(res=>{
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const deleteItem = (id) =>{
    return (dispatch,getState) =>{


        axios.delete(`http://localhost:5000/api/items/${id}`,configAuth(getState))
        .then(res=>{
            console.log(res.data)
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const configAuth =(getState)=>{
    const token = getState().authReducer.token
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    if(token){
        config.headers['x-auth-token'] = token;
    }
    return config;  // i forgot this
}