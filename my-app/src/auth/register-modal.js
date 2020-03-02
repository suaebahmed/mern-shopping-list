import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/authThunkActin'
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
        name: '',
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
        const {name,email,password} = this.state
        var createObj = {
            name,
            email,
            password
        }
        this.props.register(createObj)
        this.setState({
            name: '',
            email: '',
            password: '',
            msg: null    
        })
        this.toggle();
    }
    componentDidUpdate(prevProps,nextProps){
        const {error,isAuthenticated} = this.props
        if(error !== prevProps.error ){
            if(error.id == 'REGISTER_FAIL'){
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
                    Register
                </NavLink>
                <Modal
                    isOpen ={this.state.model}
                    toggle ={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Register Form
                    { this.state.msg && this.state.msg.length?(this.state.msg.map((obj,id)=>(<Alert color="danger" key={id}>{obj.msg}</Alert>))):null}
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name:</Label>
                                <Input type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Enter your name *" 
                                onChange={this.onChange}/>
                            </FormGroup>
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
                                placeholder="Add shopping name *" 
                                onChange={this.onChange}/>
                            </FormGroup>
                                <Button style={{marginTop: "20px",border: '1px solid red'}}
                                        color='info'
                                        block
                                >Register</Button>

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
    register,
    clearErrors
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterModel)


