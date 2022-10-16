import html2pdf from 'html2pdf.js';
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
        studyCity: '',
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
    this.handleLoadExample = this.handleLoadExample.bind(this);
    this.handleGeneratePdf = this.handleGeneratePdf.bind(this);
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
          studyCity: '',
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
        studyCity: '',
        studyTitle: '',
        studyFrom: '',
        studyTo: '',
      }],
    }, () => { console.log(this.state) });
  }

  handleLoadExample(event) {
    this.setState({
      personal: {
        name: 'John Doe',
        title: 'Software Engineer',
        email: 'johndoe@gmail.com',
        phone: '0812-3456-7890',
      },
      experiences: [{
        companyName: 'Facebook',
        position: 'Data Scientist',
        workCity: 'Menlo Park, CA',
        workFrom: 'Sep. 2017',
        workTo: 'Now',
        workDesc: 'Worked with cross functional partners to improve video publishers\' experience through Creator Studio as the sole data scientist supporting 5 PMs',
      },
      {
        companyName: 'BuzzFeed',
        position: 'Associate Data Scientist',
        workCity: 'New York, NY',
        workFrom: 'Apr. 2017',
        workTo: 'Sep. 2017',
        workDesc: 'Analyzed our video content on Facebook to increase our video distribution and grew our pages\' views by 54%',
      },
      {
        companyName: 'Microsoft',
        position: 'Program Manager Intern',
        workCity: 'Redmond, WA',
        workFrom: 'May. 2016',
        workTo: 'Aug. 2016',
        workDesc: 'Owned and designed an IT security product based on shielded Virtual Machine technology that lets organizations easily deploy privileged access workstations',
      },
      {
        companyName: 'LinkedIn',
        position: 'Software Engineer Intern',
        workCity: 'Mountain View, CA',
        workFrom: 'Jan. 2015',
        workTo: 'Apr. 2015',
        workDesc: 'Designed and implemented query persistence on the new generation graph database that would be the core of the Economic Graph',
      },
      {
        companyName: 'Citadel',
        position: 'Financial Technology Associate Intern',
        workCity: 'Chicago, IL',
        workFrom: 'Jun. 2014',
        workTo: 'Aug. 2014',
        workDesc: 'Developed in C++, a high performant multithreaded WebSocket server serving all the traders\' browser to replace an existing C++ GUI',
      }],
      educations: [{
        schoolName: 'Universitas Indonesia',
        degree: 'Master',
        studyCity: 'Depok, Indonesia',
        studyTitle: 'Information Technology',
        studyFrom: 'Sep. 2018',
        studyTo: 'Sep. 2020',
      },
      {
        schoolName: 'University of Waterloo',
        degree: 'Bachelor',
        studyCity: 'Waterloo, CN',
        studyTitle: 'Computer Science',
        studyFrom: 'Sep. 2012',
        studyTo: 'Jan. 2017',
      }],
    }, () => { console.log(this.state) });
  }

  handleGeneratePdf(event) {
    const cvPage = document.querySelector(".overview-printable");

    html2pdf()
      .set({ html2canvas: { scale: 4 } })
      .from(cvPage)
      .save();
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="header-title">Odin CV Application</div>
        </div>
        
        <div className="form-container">
          <form className="form">
            <div className="form-subcontainer">
              <h4 className="form-personal-title">Personal Information</h4>
              <input className="form-personal" placeholder="Name" name="name" type="text" value={this.state.personal.name} onChange={this.handleChange} />
              <input className="form-personal" placeholder="Title" name="title" type="text" value={this.state.personal.title} onChange={this.handleChange} />
              <input className="form-personal" placeholder="Email" name="email" type="email" value={this.state.personal.email} onChange={this.handleChange} />
              <input className="form-personal" placeholder="Phone Number" name="phone" type="text" value={this.state.personal.phone} onChange={this.handleChange} />
            </div>

            <div className="form-subcontainer">
              <h4 className="form-experience-title">Experience</h4>
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
              <h4 className="form-education-title">Education</h4>
              {this.state.educations.map((education, i) => {
                return (
                  <div key={i} className="form-subcontainer-dynamic">
                    <input id={i} className="form-education" placeholder="School Name" name="schoolName" type="text" value={this.state.educations[i].schoolName} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-education" placeholder="Degree" name="degree" type="text" value={this.state.educations[i].degree} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-education" placeholder="Title of Study" name="studyTitle" type="text" value={this.state.educations[i].studyTitle} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-education" placeholder="City" name="studyCity" type="text" value={this.state.educations[i].studyCity} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-education" placeholder="From" name="studyFrom" type="text" value={this.state.educations[i].studyFrom} onChange={this.handleChangeExpOrEdu} />
                    <input id={i} className="form-education" placeholder="To" name="studyTo" type="text" value={this.state.educations[i].studyTo} onChange={this.handleChangeExpOrEdu} />
                    <button id={i} className="del-education" type="button" onClick={this.handleDeleteExpOrEdu}>Delete</button>
                  </div>
                );
              })}
              <button className="add-education" type="button" onClick={this.handleAddExpOrEdu}>Add</button>
            </div>
          </form>
          <div className="buttons-container">
            <button className="reset" type="button" onClick={this.handleReset}>Reset</button>
            <button className="loadExample" type="button" onClick={this.handleLoadExample}>Load Example</button>
            <button className="generatePdf" type="button" onClick={this.handleGeneratePdf}>Save CV as PDF</button>
          </div>
        </div>
        
        <Overview 
            personal={this.state.personal}
            experiences={this.state.experiences}
            educations={this.state.educations} 
        />
        
        <div className="footer">
          By yours truly,&nbsp;<a href="https://github.com/mraffia"> <strong>mraffia</strong></a>
        </div>
      </div>
    );
  }
}

export default App;
