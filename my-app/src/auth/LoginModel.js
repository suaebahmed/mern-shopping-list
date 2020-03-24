import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/authThunkActin'
import { clearErrors } from '../actions/errAction'
import {
Button,
Modal,
ModalHeader,
ModalBody,
Form,
FormGroup,
Label,
Input,
NavLink,
Alert
} from 'reactstrap'

class RegisterModel extends Component {
    state = {
        model: false,
        email: '',
        password: '',
        msg: null
    }
    toggle = () =>{
        // clean the err msg
        this.props.clearErrors()
        this.setState({
            model: !this.state.model,
        })
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        const {email,password} = this.state
        var createObj = {
            email,
            password
        }
        this.props.login(createObj)
        this.setState({
            email: '',
            password: '',
            msg: null    
        })
        this.toggle();
    }
    componentDidUpdate(prevProps,nextProps){
        const {error,isAuthenticated} = this.props
        if(error !== prevProps.error ){
            if(error.id == 'LOGIN_FAIL'){
                this.setState({msg: error.msg})
            }else{
                this.setState({msg: null})
            }
        }
       if(this.state.model){
           if(isAuthenticated){
               this.toggle();
           }
       }
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#"> 
                    Login
                </NavLink>
                <Modal
                    isOpen ={this.state.model}
                    toggle ={this.toggle}
                >
                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                                <Label for="email">Email:</Label>
                                <Input type="text" 
                                name="email" 
                                id="email"
                                placeholder="Enter your email *" 
                                onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password:</Label>
                                <Input type="text" 
                                name="password" 
                                id="password" 
                                placeholder="Enter your password *" 
                                onChange={this.onChange}/>
                            </FormGroup>
                                <Button style={{marginTop: "20px"}}
                                        color='info'
                                        block
                                >LOGIN</Button>

                                <Button style={{marginTop: '10px'}}
                                color='warning'
                                onClick={(e)=>{e.preventDefault() }}
                                onClick={this.toggle}
                                >Cancal</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    error: state.errReducer

})
// prope-type..
const mapDispatchToProps = {
    login,
    clearErrors
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterModel)
