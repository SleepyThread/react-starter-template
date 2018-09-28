import ContainerWithHeader from "../layout/ContainerWithHeader";
import React from "react";
import SimpleCard from "../component/card/SimpleCard";
import {Col, Row} from "reactstrap";



class Dashboard extends React.Component {


    render() {

        return (
            <ContainerWithHeader>
                <Row>
                    <Col sm="12" md={{ size: 2, offset: 4 }}>
                        <SimpleCard title="Dashboard Page" body="Hello Bro" buttonText="Press Me!"/>
                    </Col>
                </Row>
            </ContainerWithHeader>
        );
    }

}

export default Dashboard