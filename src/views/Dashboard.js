import React from "react";
import SimpleCard from "../component/card/SimpleCard";
import {Col, Row} from "reactstrap";
import ContainerWithHeader from "../layout/ContainerWithHeader";
import Conf from "../conf/Configuration";


class Dashboard extends React.Component {

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
                    <Col sm="12" md={{ size: 4, offset: 4 }}>
                        <SimpleCard title="Dashboard Page" body="Hello Bro" buttonText="Press Me!"/>
                    </Col>
                </Row>
            </ContainerWithHeader>
        );
    }

}

export default Dashboard