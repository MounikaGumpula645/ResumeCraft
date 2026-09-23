import React from 'react';
import './ProfessionalTemplate.css';
import './templates.css';

function ProfessionalTemplate({ data, onUpdate, onUpdateExperience, onUpdateEducation }) {
  return (
    <div className="resume-template professional" style={{ fontFamily: data.fontFamily, backgroundColor: data.themeColor, color: data.textColor }}>
      <div className="header">
        <h1 contentEditable="true" onBlur={(e) => onUpdate('name', e.target.textContent)}>{data.name}</h1>
        <p className="title" contentEditable="true" onBlur={(e) => onUpdate('title', e.target.textContent)}>{data.title}</p>
        <div className="contact-info">
          <span contentEditable="true" onBlur={(e) => onUpdate('email', e.target.textContent)}>{data.email}</span> | <span contentEditable="true" onBlur={(e) => onUpdate('phone', e.target.textContent)}>{data.phone}</span>
        </div>
      </div>
      <hr />
      <div className="two-column-layout">
        <div className="left-column">
          <div className="section">
            <h3>Summary</h3>
            <p contentEditable="true" onBlur={(e) => onUpdate('summary', e.target.textContent)}>{data.summary}</p>
          </div>
          <div className="section">
            <h3>Skills</h3>
            <p contentEditable="true" onBlur={(e) => onUpdate('skills', e.target.textContent)}>{data.skills}</p>
          </div>
        </div>
        <div className="right-column">
          <div className="section">
            <h3>Experience</h3>
            {data.experience.map((exp, index) => (
              <div key={index}>
                <p>
                  <strong contentEditable="true" onBlur={(e) => onUpdateExperience('title', e.target.textContent, index)}>{exp.title}</strong> at <span contentEditable="true" onBlur={(e) => onUpdateExperience('company', e.target.textContent, index)}>{exp.company}</span>
                </p>
                <p contentEditable="true" onBlur={(e) => onUpdateExperience('dates', e.target.textContent, index)}>{exp.dates}</p>
                <p contentEditable="true" onBlur={(e) => onUpdateExperience('description', e.target.textContent, index)}>{exp.description}</p>
              </div>
            ))}
          </div>
          <div className="section">
            <h3>Education</h3>
            {data.education.map((edu, index) => (
              <div key={index}>
                <p>
                  <strong contentEditable="true" onBlur={(e) => onUpdateEducation('degree', e.target.textContent, index)}>{edu.degree}</strong>, <span contentEditable="true" onBlur={(e) => onUpdateEducation('school', e.target.textContent, index)}>{edu.school}</span>
                </p>
                <p contentEditable="true" onBlur={(e) => onUpdateEducation('dates', e.target.textContent, index)}>{edu.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalTemplate;