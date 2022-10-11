import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      name: '',
      title: '',
      email: '',
      phone: '',
      schoolName: '',
      degree: '',
      studyTitle: '',
      studyFrom: '',
      studyTo: '',
      companyName: '',
      position: '',
      workCity: '',
      workFrom: '',
      workTo: '',
      workDesc: '',
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
              <input placeholder="Name" name="name" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Title" name="title" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Email" name="email" type="email" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Phone Number" name="phone" type="text" onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <h4>Work Experience</h4>
            <label>
              <input placeholder="Company Name" name="companyName" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Position" name="position" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="City" name="workCity" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="From" name="workFrom" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="To" name="workTo" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Description" name="workDesc" type="textarea" onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <h4>Education</h4>
            <label>
              <input placeholder="School Name" name="schoolName" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Degree" name="degree" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Title of Study" name="studyTitle" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="From" name="studyFrom" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="To" name="studyTo" type="text" onChange={this.handleChange} />
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
