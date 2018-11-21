import * as React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import PropTypes from 'prop-types';
import './Header.css';
import {connect} from "react-redux";
import { LogoutAction } from "../../redux/action/UserAction";
import {isLoggedIn} from "../../helper/Autentication";
import {withRouter} from "react-router";


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    performLogout = () => {
        localStorage.removeItem("isLoggedIn");
        // Perform API Request.
        this.props.logout();
        this.props.history.push("/login");
    };

    getUserAction = () => {
        if (!isLoggedIn()) {
            return (
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
            );
        } else {
            return (
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        {this.props.userName}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            User Profile
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem onClick={this.performLogout}>
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            );
        }
    };

    render() {
        return (
            <div className="header">
                <div className='container'>
                    <Navbar expand="md">
                        <NavbarBrand href="/" className="mr-auto">{this.props.title}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {this.getUserAction()}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }

}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,

    history: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.UserReducers.isLoggedIn,
        userName: state.UserReducers.userName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: LogoutAction(dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));