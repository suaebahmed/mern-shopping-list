import React, { useState ,useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container,Button, ListGroup, ListGroupItem} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid';
import { getItems ,addItem,deleteItem} from '../actions/itemAction'

function ShoppingList(props) {

    // useEffect(() => {
    //     console.log('hey')
    //     props.getItems()
    // }, [])

    const {items} = props.items.rootItems
    return (
        <Container>
            <Button
            color = "dark"
            style = {{marginBottom: '2rem'}}
            // onClick ={()=>{
            //     const name = prompt('Enter item');
            //     if(name){
            //         setItems([...items,{id: uuidv4(),name}])
            //     }
            // }}
            >Add Item</Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({id,name})=>(                   ///  destructuring 
                        <CSSTransition key={id} timeout={300} classNames="fade">
                            <ListGroupItem> 
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={()=>{
                                    props.deleteItem(id)
                                }}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    items: state
})

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired
}

export default connect(mapStateToProps,{getItems ,deleteItem})(ShoppingList)
