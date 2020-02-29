import React, { Component } from 'react'
import { addItem } from '../actions/itemAction'
import { connect } from 'react-redux'
import {
Button,
Modal,
ModalHeader,
ModalBody,
Form,
FormGroup,
Label,
Input
} from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';

class ItemModel extends Component {
    state = {
        model: false,
        name: ''
    }
    toggle = () =>{
        this.setState({
            model: !this.state.model,
        })
    }
    onChange=(e)=>{
        this.setState({
            name: e.target.value,
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        this.props.addItem({name: this.state.name})
        // another method
        // this.setState({
        //     model: !this.state.model,
        // })
        // to close modal
        this.toggle(); /// this funtion called
    }
    render() {
        return (
            <div>
                <p>hello add item component</p>
                <Button
                    color="primary"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >ADD Item
                </Button>
                <Modal
                    isOpen ={this.state.model}
                    toggle ={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to shopping list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item:</Label>
                                <Input type="text" 
                                name="name" 
                                id="item" 
                                placeholder="Add shopping item *" 
                                onChange={this.onChange}/>
                                <Button style={{marginTop: "20px",border: '1px solid red'}}
                                        color='info'
                                        block
                                >Add item</Button>

                                <Button style={{marginTop: '10px'}}
                                color='warning'
                                onClick={(e)=>{e.preventDefault() }}
                                onClick={this.toggle}
                                >Cancal</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.rootItems
})

const mapDispatchToProps = {
    addItem
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemModel)


