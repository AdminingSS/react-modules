import React, {Component} from 'react';

export default class CCNInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            validation: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const {validation} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Credit Card Number:
                    <input type="text" value={this.getValue()} onChange={this.handleChange} />
                </label>
                {(validation === 'success') ? <input type="submit" value="Submit" /> : null}
            </form>
        );
    }

    handleSubmit(event) {
        alert('Submitted successfully');
        event.preventDefault();
    }

    handleChange(event) {
        const dirtValue = event.target.value;
        if(dirtValue.length > 19) return;
        const {divider} = this.props;
        const regExp = new RegExp(divider, 'g');
        const newValue = dirtValue.replace(regExp, '');
        if(newValue.length < 16 || !(newValue.match(/^\d+$/))) {
            this.setState({validation: 'error'});
        }
        else {
            this.setState({validation: 'success'});
        }
        this.setState({value: newValue});
    }

    getValue = () => {
        const rawValue = this.state.value;
        const {divider} = this.props;
        const valueLength = rawValue.length;
        let newValue = rawValue.substring(0,4);

        for(let i = 4; i < valueLength; i+=4) {
            newValue = newValue + divider + rawValue.substring(i, i+4);
        }
        return newValue;

        // if(valueLength <= 4) {
        //     return rawValue;
        // }
        // else if (valueLength <= 8) {
        //     return rawValue.substring(0,4) + divider + rawValue.substring(4);
        // }
        // else if (valueLength <= 12) {
        //     return rawValue.substring(0,4) + divider + rawValue.substring(4,8) + divider + rawValue.substring(8);
        // }
        // else return rawValue.substring(0,4) + divider + rawValue.substring(4,8) + divider + rawValue.substring(8,12) + divider + rawValue.substring(12);

    }
}