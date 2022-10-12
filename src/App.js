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
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    // this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
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

  handleChangeEducation(event) {
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

  handleAddEducation(event) {
    const added = this.state.educations.concat(
      {
        schoolName: '',
        degree: '',
        studyTitle: '',
        studyFrom: '',
        studyTo: '',
      }
    );
    this.setState({ educations: added }, () => { console.log(this.state) });
  }

  handleDeleteExperience(event) {
    const index = Number(event.target.id);
    const deleted = this.state.experiences.filter((item, i) => {
      if (index !== i) {
        return item;
      }
    });
    this.setState({ experiences: deleted }, () => { console.log(this.state) });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <h4>Personal Information</h4>
            <label>
              <input placeholder="Name" name="name" type="text" value={this.state.personal.name} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Title" name="title" type="text" value={this.state.personal.title} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Email" name="email" type="email" value={this.state.personal.email} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="Phone Number" name="phone" type="text" value={this.state.personal.phone} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="LinkedIn (profile link)" name="linkedin" type="text" value={this.state.personal.linkedin} onChange={this.handleChange} />
            </label>
            <label>
              <input placeholder="GitHub (profile link)" name="github" type="text" value={this.state.personal.github} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <h4>Work Experience</h4>
            {this.state.experiences.map((experience, i) => {
              return (
                <div key={i}>
                  <label>
                    <input id={i} placeholder="Company Name" name="companyName" type="text" value={this.state.experiences[i].companyName} onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="Position" name="position" type="text" value={this.state.experiences[i].position} onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="City" name="workCity" type="text" value={this.state.experiences[i].workCity} onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="From" name="workFrom" type="text" value={this.state.experiences[i].workFrom} onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="To" name="workTo" type="text" value={this.state.experiences[i].workTo} onChange={this.handleChangeExperience} />
                  </label>
                  <label>
                    <input id={i} placeholder="Description" name="workDesc" type="textarea" value={this.state.experiences[i].workDesc} onChange={this.handleChangeExperience} />
                  </label>
                  <button id={i} type="button" onClick={this.handleDeleteExperience}>Delete</button>
                </div>
              );
            })}
            <button type="button" onClick={this.handleAddExperience}>Add</button>
          </div>

          <div>
            <h4>Education</h4>
            {this.state.educations.map((education, i) => {
              return (
                <div key={i}>
                  <label>
                    <input id={i} placeholder="School Name" name="schoolName" type="text" value={this.state.educations[i].schoolName} onChange={this.handleChangeEducation} />
                  </label>
                  <label>
                    <input id={i} placeholder="Degree" name="degree" type="text" value={this.state.educations[i].degree} onChange={this.handleChangeEducation} />
                  </label>
                  <label>
                    <input id={i} placeholder="Title of Study" name="studyTitle" type="text" value={this.state.educations[i].studyTitle} onChange={this.handleChangeEducation} />
                  </label>
                  <label>
                    <input id={i} placeholder="From" name="studyFrom" type="text" value={this.state.educations[i].studyFrom} onChange={this.handleChangeEducation} />
                  </label>
                  <label>
                    <input id={i} placeholder="To" name="studyTo" type="text" value={this.state.educations[i].studyTo} onChange={this.handleChangeEducation} />
                  </label>
                  <button id={i} type="button">Delete</button>
                </div>
              );
            })}
            <button type="button" onClick={this.handleAddEducation}>Add</button>
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
