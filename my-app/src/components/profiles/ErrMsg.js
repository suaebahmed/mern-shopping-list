import React from 'react'

function ErrMsg(props) {
    return (
        <div className="alert alert-info">
            <h6>{props.msg} !</h6>
        </div>
    )
}

export default ErrMsg
