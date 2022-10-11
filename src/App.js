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
      experiences: [{
        companyName: '',
        position: '',
        workCity: '',
        workFrom: '',
        workTo: '',
        workDesc: '',
      }],
      educations: [{
        schoolName: '',
        degree: '',
        studyTitle: '',
        studyFrom: '',
        studyTo: '',
      }],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const personal = { ...this.state.personal, [name]: value };

    this.setState({ personal }, () => { console.log(this.state) });
  }

  handleChangeExperience(event) {
    const value = event.target.value;
    const name = event.target.name;
    const index = Number(event.target.id);

    const updated = this.state.experiences.map((item, i) => {
      if (i === index) {
        item[name] = value;
      }
      return item;
    });

    this.setState({ experiences: updated }, () => { console.log(this.state) });
  }

  handleChangeSchool(event) {
    const value = event.target.value;
    const name = event.target.name;
    const index = Number(event.target.id);

    const updated = this.state.educations.map((item, i) => {
      if (i === index) {
        item[name] = value;
      }
      return item;
    });

    this.setState({ educations: updated }, () => { console.log(this.state) });
  }

  handleAddExperience(event) {
    const added = this.state.experiences.concat(
      {
        companyName: '',
        position: '',
        workCity: '',
        workFrom: '',
        workTo: '',
        workDesc: '',
      }
    );
    this.setState({ experiences: added }, () => { console.log(this.state) });
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
            {this.state.experiences.map((experience, i) => {
              return (
                <div key={i}>
                  <label>
                    <input id={i} placeholder="Company Name" name="companyName" type="text" onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="Position" name="position" type="text" onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="City" name="workCity" type="text" onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="From" name="workFrom" type="text" onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="To" name="workTo" type="text" onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="Description" name="workDesc" type="textarea" onChange={this.handleChangeExperience} />
                  </label>
                  <button id={i} type="button">Delete</button>
                </div>
              );
            })}
            <button type="button" onClick={this.handleAddExperience}>Add</button>
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
            experiences={this.state.experiences}
            educations={this.state.educations}
          />
        </form>
      </div>
    );
  }
}

export default App;
