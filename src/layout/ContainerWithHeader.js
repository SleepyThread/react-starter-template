import * as React from "react";
import Header from "../component/header/Header";


class ContainerWithHeader extends React.Component {

    render() {
        return (
            <div className="content">
                <Header title="Your Header"/>
                {this.props.children}
            </div>
        );
    }

}

export default ContainerWithHeader