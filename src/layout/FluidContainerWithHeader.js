import * as React from "react";
import Header from "../component/header/Header";


class FluidContainerWithHeader extends React.Component {

    render() {
        return (
            <div className="content container-fluid">
                <Header title="Your Header"/>
                {this.props.children}
            </div>
        );
    }

}

export default FluidContainerWithHeader