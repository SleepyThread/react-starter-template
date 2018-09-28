import React from "react";
import SimpleCard from "../component/card/SimpleCard";
import {Col, Row} from "reactstrap";
import ContainerWithHeader from "../layout/ContainerWithHeader";


class Dashboard extends React.Component {


    render() {

        return (
            <ContainerWithHeader>
                <Row>
                    <Col sm="12" md={{ size: 4, offset: 4 }}>
                        <SimpleCard title="Dashboard Page" body="Hello Bro" buttonText="Press Me!"/>
                    </Col>
                </Row>
            </ContainerWithHeader>
        );
    }

}

export default Dashboard