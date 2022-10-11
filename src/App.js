import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      nameValue: '',
      emailValue: '',
      phoneValue: '',
      schoolValue: '',
      titleValue: '',
      dateValue: '',
      companyValue: '',
      positionValue: '',
      fromValue: '',
      untilValue: '',
      descValue: '',
      schools: {},
      companies: {},
  };

  this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h4>Personal Information</h4>
            <label>
              <input placeholder="Name" name="nameValue" type="text" value={this.state.nameValue} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Email" name="emailValue" type="email" value={this.state.emailValue} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Phone Number" name="phoneValue" type="text" value={this.state.phoneValue} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <h4>Work Experience</h4>
            <label>
              <input placeholder="School Name" name="schoolValue" type="text" value={this.state.schoolValue} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Title of Study" name="titleValue" type="text" value={this.state.titleValue} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Date of Study" name="dateValue" type="text" value={this.state.dateValue} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <h4>Education</h4>
            <label>
              <input placeholder="Company Name" name="companyValue" type="text" value={this.state.companyValue} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Position Title" name="positionValue" type="text" value={this.state.positionValue} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="From" name="fromValue" type="text" value={this.state.fromValue} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Until" name="untilValue" type="text" value={this.state.untilValue} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Description" name="descValue" type="textarea" value={this.state.descValue} onChange={this.handleChange} />
            </label>
          </div>
          
          <div>
            <input type="reset" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
