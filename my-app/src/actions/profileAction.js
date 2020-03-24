import { LOAD_PROFILE } from './actionType'
import axios from 'axios'

export const getProfile = (payload) => (dispatch,getState) =>{

    var config = {
        headers:{
            'Content-type': 'application/json'
        }
    }
    var user = getState().authReducer.user
    var id
    if(user){
        id = user._id
    }
    console.log(id)
    console.log(getState())
    axios.get('http://localhost:5000/api/profile/'+id)
         .then(res=>{
            console.log(res.data)
         })
         .catch(err=>{
            console.log(err);
         })
}
