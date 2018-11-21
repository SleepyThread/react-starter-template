import {Button, Card, CardText, CardTitle} from "reactstrap";
import React from "react";
import PropTypes from 'prop-types';
import './SimpleCard.css';

class SimpleCard extends React.Component {


    render() {

        return (
            <Card body>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>{this.props.text}</CardText>
                <Button className="btn btn-primary">{this.props.buttonText}</Button>
            </Card>
        );

    }

}

SimpleCard.proptypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,

};

export default SimpleCard;