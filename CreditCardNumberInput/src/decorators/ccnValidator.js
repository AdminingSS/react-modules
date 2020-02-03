import React, {Component} from 'react';

export default (OriginalComponent) => class CCNValidator extends Component {
    state = {
        validation: ''
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} validateCCN = {this.validateCCN}/>
    }

    validateCCN = (newValue) => {
        if(newValue.length < 16 || !(newValue.match(/^\d+$/))) {
            this.setState({validation: 'error'});
        }
        else {
            this.setState({validation: 'success'});
        }
    }
}