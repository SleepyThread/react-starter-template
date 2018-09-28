import * as React from "react";
import Header from "../component/header/Header";
import PropTypes from "prop-types";


class ContainerWithHeader extends React.Component {

    render() {
        return (
            <div className="content container">
                <Header title={this.props.headTitle}/>
                {this.props.children}
            </div>
        );
    }

}

ContainerWithHeader.propTypes = {
    headTitle: PropTypes.string.isRequired,
};

export default ContainerWithHeader