import React from 'react';

class Overview extends React.Component {    
    render() {
        const personal = this.props.personal;
        const experiences = this.props.experiences;
        const educations = this.props.educations;

        return (
            <div className="overview-container">
                <div className="overview-header">
                    <h1>{personal.name}</h1>
                    <p>{personal.title}</p>
                    <div>{personal.email}</div>
                    <div>{personal.phone}</div>
                </div>

                <div className="overview-experience-container">
                    <h3 className="overview-experience-title">Work Experience</h3>
                    <hr />
                    {experiences.map((experience, i) => {
                        return (
                        <div key={i} className="overview-experience">
                            <div className="overview-experience-name">{experience.companyName}</div>
                            <div className="overview-experience-city">{experience.workCity}</div>
                            <div className="overview-experience-position">{experience.position}</div>
                            <div className="overview-experience-from">{experience.workFrom}</div>
                            <div className="overview-experience-to">{experience.workTo}</div>
                            <div className="overview-experience-desc">{experience.workDesc}</div>
                        </div>
                        );
                    })}
                </div>

                <div className="overview-education-container">
                    <h3 className="overview-education-title">Education</h3>
                    <hr />
                    {educations.map((education, i) => {
                        return (
                        <div key={i} className="overview-education">
                            <div className="overview-education-name">{education.schoolName}</div>
                            <div className="overview-experience-city">{education.studyCity}</div>
                            <div className="overview-education-degree">{education.degree}</div>
                            <div className="overview-education-study">{education.studyTitle}</div>
                            <div className="overview-education-from">{education.studyFrom}</div>
                            <div className="overview-education-to">{education.studyTo}</div>
                        </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Overview;