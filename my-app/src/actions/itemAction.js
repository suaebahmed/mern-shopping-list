import {GET_ITEMS,DELETE_ITEM,ADD_ITEM, ITEMLS_LOADING} from '../actions/actionType'
import axios from 'axios'

// export const thunk_creator = () =>{
//     return (dispatch)=>{

//         dispatch({type: ITEMLS_LOADING});
//         axios.get('http://localhost:3000/api/items')
//              .then(response=>{
//                 const data = response.data.products
//                 dispatch({type: GET_ITEMS,payload: data})
//                 console.log(data)
//              })
//              .catch(err=>{
//                  console.log(err)
//              })
//     }
// }

export const getItems = () =>{
    return (dispatch)=>{
        dispatch({type: ITEMLS_LOADING});
        axios.get('http://localhost:3000/api/items')
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
    return (dispatch) =>{
        axios.post('http://localhost:3000/api/items',item)
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
    return (dispatch) =>{

        console.log(id)

        axios.delete(`http://localhost:3000/api/items/${id}`)
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