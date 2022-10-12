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
    this.handleChangeExpOrEdu = this.handleChangeExpOrEdu.bind(this);
    this.handleAddExpOrEdu = this.handleAddExpOrEdu.bind(this);
    this.handleDeleteExpOrEdu = this.handleDeleteExpOrEdu.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const personal = { ...this.state.personal, [name]: value };

    this.setState({ personal }, () => { console.log(this.state) });
  }

  handleChangeExpOrEdu(event) {
    const value = event.target.value;
    const name = event.target.name;
    const index = Number(event.target.id);

    let expOrEdu;
    let expOrEduCopy;

    if (event.target.className.slice(4) === "Experience") {
      expOrEdu = "experiences";
      expOrEduCopy = this.state.experiences;
    } else if (event.target.className.slice(4) === "Education") {
      expOrEdu = "educations";
      expOrEduCopy = this.state.educations;
    }

    const updated = expOrEduCopy.map((item, i) => {
      if (i === index) {
        item[name] = value;
      }
      return item;
    });

    this.setState({ [expOrEdu]: updated }, () => { console.log(this.state) });
  }

  handleAddExpOrEdu(event) {
    let expOrEdu;
    let added;

    console.log(event.target.className.slice(3));

    if (event.target.className.slice(3) === "Experience") {
      expOrEdu = "experiences";
      added = this.state.experiences.concat(
        {
          companyName: '',
          position: '',
          workCity: '',
          workFrom: '',
          workTo: '',
          workDesc: '',
        }
      );
    } else if (event.target.className.slice(3) === "Education") {
      expOrEdu = "educations";
      added = this.state.educations.concat(
        {
          schoolName: '',
          degree: '',
          studyTitle: '',
          studyFrom: '',
          studyTo: '',
        }
      );
    }

    this.setState({ [expOrEdu]: added }, () => { console.log(this.state) });
  }

  handleDeleteExpOrEdu(event) {
    const index = Number(event.target.id);

    let expOrEdu;
    let expOrEduCopy;

    if (event.target.className.slice(3) === "Experience") {
      expOrEdu = "experiences";
      expOrEduCopy = this.state.experiences;
    } else if (event.target.className.slice(3) === "Education") {
      expOrEdu = "educations";
      expOrEduCopy = this.state.educations;
    }

    const deleted = expOrEduCopy.filter((item, i) => {
      return index !== i ? item : undefined;
    });

    this.setState({ [expOrEdu]: deleted }, () => { console.log(this.state) });
  }

  handleReset(event) {
    this.setState({
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
    }, () => { console.log(this.state) });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <h4>Personal Information</h4>
            <label>
              <input className="formPersonal" placeholder="Name" name="name" type="text" value={this.state.personal.name} onChange={this.handleChange} />
            </label>
            <label>
              <input className="formPersonal" placeholder="Title" name="title" type="text" value={this.state.personal.title} onChange={this.handleChange} />
            </label>
            <label>
              <input className="formPersonal" placeholder="Email" name="email" type="email" value={this.state.personal.email} onChange={this.handleChange} />
            </label>
            <label>
              <input className="formPersonal" placeholder="Phone Number" name="phone" type="text" value={this.state.personal.phone} onChange={this.handleChange} />
            </label>
            <label>
              <input className="formPersonal" placeholder="LinkedIn (profile link)" name="linkedin" type="text" value={this.state.personal.linkedin} onChange={this.handleChange} />
            </label>
            <label>
              <input className="formPersonal" placeholder="GitHub (profile link)" name="github" type="text" value={this.state.personal.github} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <h4>Work Experience</h4>
            {this.state.experiences.map((experience, i) => {
              return (
                <div key={i}>
                  <label>
                    <input id={i} className="formExperience" placeholder="Company Name" name="companyName" type="text" value={this.state.experiences[i].companyName} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <label>
                    <input id={i} className="formExperience" placeholder="Position" name="position" type="text" value={this.state.experiences[i].position} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <label>
                    <input id={i} className="formExperience" placeholder="City" name="workCity" type="text" value={this.state.experiences[i].workCity} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <label>
                    <input id={i} className="formExperience" placeholder="From" name="workFrom" type="text" value={this.state.experiences[i].workFrom} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <label>
                    <input id={i} className="formExperience" placeholder="To" name="workTo" type="text" value={this.state.experiences[i].workTo} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <label>
                    <input id={i} className="formExperience" placeholder="Description" name="workDesc" type="textarea" value={this.state.experiences[i].workDesc} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <button id={i} className="delExperience" type="button" onClick={this.handleDeleteExpOrEdu}>Delete</button>
                </div>
              );
            })}
            <button className="addExperience" type="button" onClick={this.handleAddExpOrEdu}>Add</button>
          </div>

          <div>
            <h4>Education</h4>
            {this.state.educations.map((education, i) => {
              return (
                <div key={i}>
                  <label>
                    <input id={i} className="formEducation" placeholder="School Name" name="schoolName" type="text" value={this.state.educations[i].schoolName} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <label>
                    <input id={i} className="formEducation" placeholder="Degree" name="degree" type="text" value={this.state.educations[i].degree} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <label>
                    <input id={i} className="formEducation" placeholder="Title of Study" name="studyTitle" type="text" value={this.state.educations[i].studyTitle} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <label>
                    <input id={i} className="formEducation" placeholder="From" name="studyFrom" type="text" value={this.state.educations[i].studyFrom} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <label>
                    <input id={i} className="formEducation" placeholder="To" name="studyTo" type="text" value={this.state.educations[i].studyTo} onChange={this.handleChangeExpOrEdu} />
                  </label>
                  <button id={i} className="delEducation" type="button" onClick={this.handleDeleteExpOrEdu}>Delete</button>
                </div>
              );
            })}
            <button className="addEducation" type="button" onClick={this.handleAddExpOrEdu}>Add</button>
          </div>
          
          <div>
            <input type="reset" onClick={this.handleReset}/>
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
