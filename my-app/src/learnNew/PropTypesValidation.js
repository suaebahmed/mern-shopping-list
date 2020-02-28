import React from 'react'
import PropTypes from 'prop-types'

const Greeting = (props)=>{
    const {name,age} = props;
    console.log(props)
    return (
    <h1>Wellcome! {name}({age})</h1>
    )
}

function Example() {
    return (
        <div>
            {/*  are there is age OR is it number */}
            <Greeting name="Suaeb" age="25"></Greeting> 
        </div>
    )
}
 // validation
Greeting.PropTypes = { 
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    age: React.PropTypes.number.isRequired
}

export default Example
