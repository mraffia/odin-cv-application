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

    if (event.target.className.slice(5) === "experience") {
      expOrEdu = "experiences";
      expOrEduCopy = this.state.experiences;
    } else if (event.target.className.slice(5) === "education") {
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

    if (event.target.className.slice(4) === "experience") {
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
    } else if (event.target.className.slice(4) === "education") {
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

    if (event.target.className.slice(4) === "experience") {
      expOrEdu = "experiences";
      expOrEduCopy = this.state.experiences;
    } else if (event.target.className.slice(4) === "education") {
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
      <div className="container">
        <div className="form-container">
          <form className="form">
            <div className="form-subcontainer">
              <h4>Personal Information</h4>
              <input className="form-personal" placeholder="Name" name="name" type="text" value={this.state.personal.name} onChange={this.handleChange} />
              <input className="form-personal" placeholder="Title" name="title" type="text" value={this.state.personal.title} onChange={this.handleChange} />
              <input className="form-personal" placeholder="Email" name="email" type="email" value={this.state.personal.email} onChange={this.handleChange} />
              <input className="form-personal" placeholder="Phone Number" name="phone" type="text" value={this.state.personal.phone} onChange={this.handleChange} />
            </div>

            <div className="form-subcontainer">
              <h4>Work Experience</h4>
              {this.state.experiences.map((experience, i) => {
                return (
                  <div key={i} className="form-subcontainer-dynamic">
                    <input id={i} className="form-experience" placeholder="Company Name" name="companyName" type="text" value={this.state.experiences[i].companyName} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-experience" placeholder="Position" name="position" type="text" value={this.state.experiences[i].position} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-experience" placeholder="City" name="workCity" type="text" value={this.state.experiences[i].workCity} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-experience" placeholder="From" name="workFrom" type="text" value={this.state.experiences[i].workFrom} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-experience" placeholder="To" name="workTo" type="text" value={this.state.experiences[i].workTo} onChange={this.handleChangeExpOrEdu} />
                    <textarea id={i} className="form-experience" placeholder="Description" name="workDesc" value={this.state.experiences[i].workDesc} onChange={this.handleChangeExpOrEdu} />
                    <button id={i} className="del-experience" type="button" onClick={this.handleDeleteExpOrEdu}>Delete</button>
                  </div>
                );
              })}
              <button className="add-experience" type="button" onClick={this.handleAddExpOrEdu}>Add</button>
            </div>

            <div className="form-subcontainer">
              <h4>Education</h4>
              {this.state.educations.map((education, i) => {
                return (
                  <div key={i} className="form-subcontainer-dynamic">
                    <input id={i} className="form-education" placeholder="School Name" name="schoolName" type="text" value={this.state.educations[i].schoolName} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-education" placeholder="Degree" name="degree" type="text" value={this.state.educations[i].degree} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-education" placeholder="Title of Study" name="studyTitle" type="text" value={this.state.educations[i].studyTitle} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-education" placeholder="From" name="studyFrom" type="text" value={this.state.educations[i].studyFrom} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-education" placeholder="To" name="studyTo" type="text" value={this.state.educations[i].studyTo} onChange={this.handleChangeExpOrEdu} />
                    <button id={i} className="del-education" type="button" onClick={this.handleDeleteExpOrEdu}>Delete</button>
                  </div>
                );
              })}
              <button className="add-education" type="button" onClick={this.handleAddExpOrEdu}>Add</button>
            </div>
            
            <div className="reset-container">
              <button className="reset" type="button" onClick={this.handleReset}>Reset</button>
            </div>
          </form>
        </div>
        
        <Overview 
            personal={this.state.personal}
            experiences={this.state.experiences}
            educations={this.state.educations}
          />
      </div>
    );
  }
}

export default App;
