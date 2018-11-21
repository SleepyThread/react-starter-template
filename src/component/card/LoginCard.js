import React from "react";
import {Form, FormGroup, Label, CardTitle, CardText, Card, Button, Input} from "reactstrap";
import { LoginAction } from '../../redux/action/UserAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {isLoggedIn} from "../../helper/Autentication";
import {withRouter} from "react-router";

class LoginCard extends React.Component {

    state = {
        userId: "",
        password: ""
    };

    componentDidMount() {
        if(isLoggedIn()) {
            this.props.history.push("/dashboard");
        }
     }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitLogin = () => {

        // Perform API Request.
        localStorage.setItem("isLoggedIn", true );
        this.props.login(this.state.userId);
        this.props.history.push("/dashboard");
    };

    render() {

        const { userId, password } = this.state;


        return (
            <Card body>
                <CardTitle>Login Form</CardTitle>
                <CardText>
                    <Form>
                        <FormGroup>
                            <Label for="userId">User Id</Label>
                            <Input type="email" name="userId" id="userId" value={userId} onChange={this.handleChange} placeholder="Enter UserId" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" value={password} onChange={this.handleChange} placeholder="Enter Password" />
                        </FormGroup>
                        <Button onClick={this.submitLogin}>Submit</Button>
                    </Form>
                </CardText>

            </Card>
        );
    }

}

LoginCard.prototypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        login: LoginAction(dispatch),
    };
};


export default connect(null, mapDispatchToProps)(withRouter(LoginCard));