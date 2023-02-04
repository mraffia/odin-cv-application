import html2pdf from 'html2pdf.js';
import React, { useState } from 'react';
import Nav from "./components/Nav";
import Preview from "./components/Preview";
import './App.css';

function App(props) {
  const [personal, setPersonal] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
  });

  const [experiences, setExperiences] = useState([{
    companyName: '',
    position: '',
    workCity: '',
    workFrom: '',
    workTo: '',
    workDesc: '',
  }]);

  const [educations, setEducations] = useState([{
    schoolName: '',
    degree: '',
    studyCity: '',
    studyTitle: '',
    studyFrom: '',
    studyTo: '',
  }]);

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    const updated = { ...personal, [name]: value };

    setPersonal(updated);
  }

  function handleChangeExpOrEdu(e) {
    const value = e.target.value;
    const name = e.target.name;
    const index = Number(e.target.id);
    let updated;

    if (e.target.className.slice(5) === "experience") {
      updated = experiences.map((item, i) => {
        if (i === index) {
          item[name] = value;
        }
        return item;
      });
      setExperiences(updated);

    } else if (e.target.className.slice(5) === "education") {
      updated = educations.map((item, i) => {
        if (i === index) {
          item[name] = value;
        }
        return item;
      });
      setEducations(updated);
    }
  }

  function handleAddExpOrEdu(e) {
    let added;

    if (e.target.className.slice(4) === "experience") {
      added = experiences.concat(
        {
          companyName: '',
          position: '',
          workCity: '',
          workFrom: '',
          workTo: '',
          workDesc: '',
        }
      );
      setExperiences(added);

    } else if (e.target.className.slice(4) === "education") {
      added = educations.concat(
        {
          schoolName: '',
          degree: '',
          studyCity: '',
          studyTitle: '',
          studyFrom: '',
          studyTo: '',
        }
      );
      setEducations(added);
    }
  }

  function handleDeleteExpOrEdu(e) {
    const index = Number(e.target.id);
    let deleted;

    if (e.target.className.slice(4) === "experience") {
      deleted = experiences.filter((item, i) => {
        return index !== i ? item : undefined;
      });
      setExperiences(deleted);

    } else if (e.target.className.slice(4) === "education") {
      deleted = educations.filter((item, i) => {
        return index !== i ? item : undefined;
      });
      setEducations(deleted);
    }
  }

  function handleReset(e) {
    setPersonal({
      name: '',
      title: '',
      email: '',
      phone: '',
    });
  
    setExperiences([{
      companyName: '',
      position: '',
      workCity: '',
      workFrom: '',
      workTo: '',
      workDesc: '',
    }]);
  
    setEducations([{
      schoolName: '',
      degree: '',
      studyCity: '',
      studyTitle: '',
      studyFrom: '',
      studyTo: '',
    }]);
  }

  function handleLoadExample(e) {
    setPersonal({
      name: 'John Doe',
      title: 'Software Engineer',
      email: 'johndoe@gmail.com',
      phone: '0812-3456-7890',
    });
  
    setExperiences([{
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
    }]);
  
    setEducations([{
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
    }]);
  }

  function handleGeneratePdf(e) {
    const cvPage = document.querySelector(".overview-printable");

    html2pdf()
      .set({ html2canvas: { scale: 4 } })
      .from(cvPage)
      .save();
  }

  return (
    <div className="container">
      <Nav />
      
      <div className="form-container">
        <form className="form">
          <div className="form-subcontainer">
            <h4 className="form-personal-title">Personal Information</h4>
            <input className="form-personal" placeholder="Name" name="name" type="text" value={personal.name} onChange={handleChange} />
            <input className="form-personal" placeholder="Title" name="title" type="text" value={personal.title} onChange={handleChange} />
            <input className="form-personal" placeholder="Email" name="email" type="email" value={personal.email} onChange={handleChange} />
            <input className="form-personal" placeholder="Phone Number" name="phone" type="text" value={personal.phone} onChange={handleChange} />
          </div>

          <div className="form-subcontainer">
            <h4 className="form-experience-title">Experience</h4>
            {experiences.map((experience, i) => {
              return (
                <div key={i} className="form-subcontainer-dynamic">
                  <input id={i} className="form-experience" placeholder="Company Name" name="companyName" type="text" value={experiences[i].companyName} onChange={handleChangeExpOrEdu} />
                  <input id={i} className="form-experience" placeholder="Position" name="position" type="text" value={experiences[i].position} onChange={handleChangeExpOrEdu} />
                  <input id={i} className="form-experience" placeholder="City" name="workCity" type="text" value={experiences[i].workCity} onChange={handleChangeExpOrEdu} />
                  <input id={i} className="form-experience" placeholder="From" name="workFrom" type="text" value={experiences[i].workFrom} onChange={handleChangeExpOrEdu} />
                  <input id={i} className="form-experience" placeholder="To" name="workTo" type="text" value={experiences[i].workTo} onChange={handleChangeExpOrEdu} />
                  <textarea id={i} className="form-experience" placeholder="Description" name="workDesc" value={experiences[i].workDesc} onChange={handleChangeExpOrEdu} />
                  <button id={i} className="del-experience" type="button" onClick={handleDeleteExpOrEdu}>Delete</button>
                </div>
              );
            })}
            <button className="add-experience" type="button" onClick={handleAddExpOrEdu}>Add</button>
          </div>

          <div className="form-subcontainer">
            <h4 className="form-education-title">Education</h4>
            {educations.map((education, i) => {
              return (
                <div key={i} className="form-subcontainer-dynamic">
                  <input id={i} className="form-education" placeholder="School Name" name="schoolName" type="text" value={educations[i].schoolName} onChange={handleChangeExpOrEdu} />
                  <input id={i} className="form-education" placeholder="Degree" name="degree" type="text" value={educations[i].degree} onChange={handleChangeExpOrEdu} />
                  <input id={i} className="form-education" placeholder="Title of Study" name="studyTitle" type="text" value={educations[i].studyTitle} onChange={handleChangeExpOrEdu} />
                  <input id={i} className="form-education" placeholder="City" name="studyCity" type="text" value={educations[i].studyCity} onChange={handleChangeExpOrEdu} />
                  <input id={i} className="form-education" placeholder="From" name="studyFrom" type="text" value={educations[i].studyFrom} onChange={handleChangeExpOrEdu} />
                  <input id={i} className="form-education" placeholder="To" name="studyTo" type="text" value={educations[i].studyTo} onChange={handleChangeExpOrEdu} />
                  <button id={i} className="del-education" type="button" onClick={handleDeleteExpOrEdu}>Delete</button>
                </div>
              );
            })}
            <button className="add-education" type="button" onClick={handleAddExpOrEdu}>Add</button>
          </div>
        </form>
        <div className="buttons-container">
          <button className="reset" type="button" onClick={handleReset}>Reset</button>
          <button className="loadExample" type="button" onClick={handleLoadExample}>Load Example</button>
          <button className="generatePdf" type="button" onClick={handleGeneratePdf}>Save CV as PDF</button>
        </div>
      </div>
      
      <Preview 
          personal={personal}
          experiences={experiences}
          educations={educations} 
      />

      <div className="footer">
        <a href="https://github.com/mraffia">
          <strong>mraffia</strong>
          &nbsp;
          <svg aria-hidden="true" className="octicon octicon-mark-github" height="16" width="16" version="1.1" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg> 
        </a>
      </div>
    </div>
  );

}

export default App;
