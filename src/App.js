import React from 'react';
import './App.css';
import Overview from "./components/Overview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        name: '',
        title: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
      },
      companies: [{
        companyName: '',
        position: '',
        workCity: '',
        workFrom: '',
        workTo: '',
        workDesc: '',
      }],
      schools: [{
        schoolName: '',
        degree: '',
        studyTitle: '',
        studyFrom: '',
        studyTo: '',
      }],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleAddCompany = this.handleAddCompany.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const personal = { ...this.state.personal, [name]: value };

    this.setState({ personal }, () => { console.log(this.state) });
  }

  handleChangeCompany(event) {
    const value = event.target.value;
    const name = event.target.name;
    const index = Number(event.target.id);

    const updated = this.state.companies.map((item, i) => {
      if (i === index) {
        item[name] = value;
      }
      return item;
    });

    this.setState({ companies: updated }, () => { console.log(this.state) });
  }

  handleChangeSchool(event) {
    const value = event.target.value;
    const name = event.target.name;
    const index = Number(event.target.id);

    const updated = this.state.schools.map((item, i) => {
      if (i === index) {
        item[name] = value;
      }
      return item;
    });

    this.setState({ schools: updated }, () => { console.log(this.state) });
  }

  handleAddCompany(event) {
    const added = this.state.companies.concat(
      {
        companyName: '',
        position: '',
        workCity: '',
        workFrom: '',
        workTo: '',
        workDesc: '',
      }
    );
    this.setState({ companies: added }, () => { console.log(this.state) });
  }

  render() {
    return (
      <div>
        <form>
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
            <label>
              <input placeholder="LinkedIn (profile link)" name="linkedin" type="text" onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="GitHub (profile link)" name="github" type="text" onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <h4>Work Experience</h4>
            {this.state.companies.map((company, i) => {
              return (
                <div key={i}>
                  <label>
                    <input id={i} placeholder="Company Name" name="companyName" type="text" onChange={this.handleChangeCompany} />
                  </label>
                  <label>
                    <input id={i} placeholder="Position" name="position" type="text" onChange={this.handleChangeCompany} />
                  </label>
                  <label>
                    <input id={i} placeholder="City" name="workCity" type="text" onChange={this.handleChangeCompany} />
                  </label>
                  <label>
                    <input id={i} placeholder="From" name="workFrom" type="text" onChange={this.handleChangeCompany} />
                  </label>
                  <label>
                    <input id={i} placeholder="To" name="workTo" type="text" onChange={this.handleChangeCompany} />
                  </label>
                  <label>
                    <input id={i} placeholder="Description" name="workDesc" type="textarea" onChange={this.handleChangeCompany} />
                  </label>
                  <button id={i} type="button">Delete</button>
                </div>
              );
            })}
            <button type="button" onClick={this.handleAddCompany}>Add</button>
          </div>

          <div>
            <h4>Education</h4>
            <div>
              <label>
                <input id="0" placeholder="School Name" name="schoolName" type="text" onChange={this.handleChangeSchool} />
              </label>
              <label>
                <input id="0" placeholder="Degree" name="degree" type="text" onChange={this.handleChangeSchool} />
              </label>
              <label>
                <input id="0" placeholder="Title of Study" name="studyTitle" type="text" onChange={this.handleChangeSchool} />
              </label>
              <label>
                <input id="0" placeholder="From" name="studyFrom" type="text" onChange={this.handleChangeSchool} />
              </label>
              <label>
                <input id="0" placeholder="To" name="studyTo" type="text" onChange={this.handleChangeSchool} />
              </label>
              <button type="button">Delete</button>
            </div>
            <button type="button">Add</button>
          </div>
          
          <div>
            <input type="reset" />
          </div>

          <Overview 
            personal={this.state.personal}
            companies={this.state.companies}
            schools={this.state.schools}
          />
        </form>
      </div>
    );
  }
}

export default App;
