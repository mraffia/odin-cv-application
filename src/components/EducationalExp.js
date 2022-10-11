import React from 'react';

class EducationalExp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolValue: '',
            titleValue: '',
            dateValue: '',
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
                school: this.state.schoolValue, 
                title: this.state.titleValue, 
                Date: this.state.dateValue, 
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
                        School Name:&nbsp;
                        <input name="schoolValue" type="text" required value={this.state.schoolValue} onChange={this.handleChange} />
                    </label>
                    <label>
                        Title of Study:&nbsp;
                        <input name="titleValue" type="text" required value={this.state.titleValue} onChange={this.handleChange} />
                    </label>
                    <label>
                        Date of Study:&nbsp;
                        <input name="dateValue" type="date" required value={this.state.dateValue} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default EducationalExp;