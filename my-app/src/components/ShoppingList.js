import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container,Button, ListGroup, ListGroupItem} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getItems ,deleteItem} from '../actions/itemAction'

function ShoppingList(props) {

    useEffect(() => {
        props.getItems()
    }, [])

    var {items} = props.itemsXX.rootItems
    

    return (
        <Container>
            <Button
            color = "dark"
            style = {{marginBottom: '2rem'}}
            >Add Item</Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({_id,name})=>(              ///  destructuring 
                        <CSSTransition key={_id} timeout={300} classNames="fade">
                            <ListGroupItem> 
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={()=>{
                                    props.deleteItem(_id)
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
    itemsXX: state
})

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    itemsXX: PropTypes.object.isRequired
}

export default connect(mapStateToProps,{getItems ,deleteItem})(ShoppingList)
