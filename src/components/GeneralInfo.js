import React from 'react';

class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            emailValue: '',
            phoneValue: '',
            info: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ 
            [name]: value 
        }, () => {
            console.log(this.state);
        });
    }
    
    handleSubmit(event) {
        this.setState({
            info: {
                name: this.state.nameValue, 
                email: this.state.emailValue, 
                phone: this.state.phoneValue, 
            }
        }, () => {
            console.log(this.state.info);
        });

        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:&nbsp;
                        <input name="nameValue" type="text" required value={this.state.nameValue} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email:&nbsp;
                        <input name="emailValue" type="email" required value={this.state.emailValue} onChange={this.handleChange} />
                    </label>
                    <label>
                        Phone:&nbsp;
                        <input name="phoneValue" type="tel" required value={this.state.phoneValue} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default GeneralInfo;