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


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div className="header">
                <div className='container'>
                    <Navbar expand="md">
                        <NavbarBrand href="/" className="mr-auto">{this.props.title}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/dashboard">Dashboard</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Settings
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Setting Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Setting Option 2
                                        </DropdownItem>
                                        <DropdownItem divider/>
                                        <DropdownItem>
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
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
};

export default Header;