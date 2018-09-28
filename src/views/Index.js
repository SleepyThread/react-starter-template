import React from "react";
import FluidContainerWithHeader from "../layout/FluidContainerWithHeader";
import SimpleCard from "../component/card/SimpleCard";
import {Col, Row} from "reactstrap";
import Conf from "../conf/Configuration";



class Index extends React.Component {

    getConf = () =>  {
        return {
            headTitle: Conf.appConf.header.title,
        }
    };


    render() {
        let config = this.getConf();
        return (
                <FluidContainerWithHeader headTitle={config.headTitle}>
                    <Row>
                        <Col sm="12" md={{ size: 2, offset: 4 }}>
                        <SimpleCard title="Login Page" body="This is a login Page." buttonText="Press Me!" />
                        </Col>
                    </Row>

                </FluidContainerWithHeader>
        );
    }

}

export default Index