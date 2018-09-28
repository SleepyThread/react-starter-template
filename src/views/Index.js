import React from "react";
import ContainerWithHeader from "../layout/ContainerWithHeader";
import SimpleCard from "../component/card/SimpleCard";
import {Col, Row} from "reactstrap";



class Index extends React.Component {

    render() {

        return (
                <ContainerWithHeader>
                    <Row>
                        <Col sm="12" md={{ size: 2, offset: 4 }}>
                        <SimpleCard title="Login Page" body="This is a login Page." buttonText="Press Me!" />
                        </Col>
                    </Row>

                </ContainerWithHeader>
        );
    }

}

export default Index