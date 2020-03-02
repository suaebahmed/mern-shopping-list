import React, { Component, Fragment } from 'react'
import { NavLink } from 'reactstrap'
import { logout } from '../actions/authThunkActin'
import { connect } from 'react-redux'

class Logout extends Component {
    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="#">
                    Logout
                </NavLink>
            </Fragment>
        )
    }
}

export default connect(null,{logout})(Logout)
