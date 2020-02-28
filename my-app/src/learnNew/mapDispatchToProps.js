import React, { useState ,useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItems ,addItem,deleteItem} from '../actions/itemAction'

function ShoppingList(props) {

    console.log(props)
    const {items} = props.items.rootItems

    return (
        <div className="container">

        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state
})
 //------  validation work  --------
ShoppingList.propTypes = { 
    getItems: PropTypes.func.isRequired,
    items: PropTypes.items.object
}
//  Method:(1)
// const mapDispatchToProps =() =>{
//     return {
//         newGetItems : (id) => {dispatch(getItems(id))}
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList)
//  Method:(2)
// const mapDispatchToProps = () =>{
//     return{
//         getItems
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps() )(ShoppingList)
//  Method:(3)
// const mapDispatchToProps ={
//     getItems,
//     deleteItem
// }
// export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList)
//  Method:(4)
// export default connect(mapStateToProps,{getItems ,deleteItem})(ShoppingList)
