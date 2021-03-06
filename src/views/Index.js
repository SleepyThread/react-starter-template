import React from "react";
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
                    This is Sparta.
                </ContainerWithHeader>
        );
    }

}

export default Index