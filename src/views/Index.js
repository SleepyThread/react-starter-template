import React from "react";
import SimpleCard from "../component/card/SimpleCard";
import {Col, Row} from "reactstrap";
import Conf from "../conf/Configuration";
import ContainerWithHeader from "../layout/ContainerWithHeader";



class Index extends React.Component {

    getConf = () =>  {
        return {
            headTitle: Conf.appConf.header.title,
        }
    };


    render() {
        let config = this.getConf();
        return (
                <ContainerWithHeader headTitle={config.headTitle}>
                    <Row>
                        <Col xs="12" md="4" >
                            <SimpleCard title="Login Page" body="This is a login Page." buttonText="Press Me!" />
                        </Col>
                        <Col xs="12" md="4" >
                            <SimpleCard title="Login Page" body="This is a login Page." buttonText="Press Me!" />
                        </Col>
                        <Col xs="12" md="4" >
                            <SimpleCard title="Login Page" body="This is a login Page." buttonText="Press Me!" />
                        </Col>
                    </Row>
                </ContainerWithHeader>
        );
    }

}

export default Index