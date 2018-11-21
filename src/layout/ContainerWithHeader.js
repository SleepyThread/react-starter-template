import * as React from "react";
import Header from "../component/header/Header";
import PropTypes from "prop-types";


class ContainerWithHeader extends React.Component {

    render() {
        return (
         <div>
            <Header title={this.props.headTitle} />
            <div className="content container pt-4">
                {this.props.children}
            </div>
         </div>
        );
    }

}

ContainerWithHeader.propTypes = {
    headTitle: PropTypes.string.isRequired,
};

export default ContainerWithHeader