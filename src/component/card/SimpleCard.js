import {Button, Card, CardText, CardTitle} from "reactstrap";
import React from "react";
import PropTypes from 'prop-types';

class SimpleCard extends React.Component {


    render() {

        return (
            <Card body>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>{this.props.text}</CardText>
                <Button>{this.props.buttonText}</Button>
            </Card>
        );

    }

}

SimpleCard.PropTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,

};

export default SimpleCard;