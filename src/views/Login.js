import React from "react";
import LoginCard from "../component/card/LoginCard";
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
                        <Col xs="12" md="6"  >
                            <LoginCard/>
                        </Col>
                    </Row>
                </ContainerWithHeader>
        );
    }

}

export default Index