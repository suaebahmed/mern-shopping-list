import React, { useState, useEffect } from 'react'
import Fileupload from './Fileupload'
import AppNavbar from '../Navbar'
import { connect } from 'react-redux'
import store from '../../store'
import { getProfile } from '../../actions/profileAction'

function Main() {

    const [state, setState] = useState({title: '',bio: ''})

    const onChangeH=(e)=>{
        setState({
            [e.target.name]: e.target.value
        })
    }
    const onSubmitH=(e)=>{
        e.preventDefault();
        console.log(state)
    }

    useEffect(()=>{
        store.dispatch(getProfile())
    },[])

    return (
        <div>
        <AppNavbar/>
        <div className="row">
            <div className="col-6 text-center">
                <Fileupload/>
            </div>
            <div className="col-6 mt-5">
                <input className="mt-5" type="text" onChange={onChangeH} name="title" placeholder="Who are you? " /><br/>
                <input className="mt-2" type="text" onChange={onChangeH}  name="bio" placeholder="Enter your bio: *" />
                <button onClick={onSubmitH}>submit</button>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)

