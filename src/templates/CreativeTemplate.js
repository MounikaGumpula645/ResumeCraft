import React from 'react';
import './CreativeTemplate.css';

function CreativeTemplate({ data, onUpdate, onUpdateExperience, onUpdateEducation, onPhotoChange }) {
  const handleFileUpload = (event) => {
    onPhotoChange(event);
  };

  return (
    <div className="resume-template creative" style={{ fontFamily: data.fontFamily }}>
      <div className="left-column" style={{ backgroundColor: data.themeColor, color: data.textColor }}>
        <div className="photo-upload-area">
          <input 
            type="file" 
            id="photo-upload" 
            className="photo-input" 
            onChange={handleFileUpload} 
            accept="image/*" 
          />
          {data.photo ? (
            <label htmlFor="photo-upload" className="photo-label">
              <img src={data.photo} alt="Profile" className="profile-photo" />
            </label>
          ) : (
            <label htmlFor="photo-upload" className="photo-label">
              <span className="plus-icon">&#43;</span>
            </label>
          )}
        </div>
        <div className="contact-section">
          <h3>Contact Me</h3>
          <p>
            <span>&#9990;</span> <span contentEditable="true" onBlur={(e) => onUpdate('phone', e.target.textContent)}>{data.phone}</span>
          </p>
          <p>
            <span>&#9993;</span> <span contentEditable="true" onBlur={(e) => onUpdate('email', e.target.textContent)}>{data.email}</span>
          </p>
          <p>
            <span>&#128187;</span> <span contentEditable="true" onBlur={(e) => onUpdate('website', e.target.textContent)}>{data.website}</span>
          </p>
          <p>
            <span>&#128205;</span> <span contentEditable="true" onBlur={(e) => onUpdate('address', e.target.textContent)}>{data.address}</span>
          </p>
        </div>
        <div className="references-section">
          <h3>References</h3>
          <p>Available upon request.</p>
        </div>
        <div className="education-section">
          <h3>Education</h3>
          {data.education.map((edu, index) => (
            <div key={index} className="education-item">
              <p><strong contentEditable="true">{edu.school}</strong></p>
              <p contentEditable="true" onBlur={(e) => onUpdateEducation('degree', e.target.textContent, index)}>{edu.degree}</p>
              <p contentEditable="true" onBlur={(e) => onUpdateEducation('dates', e.target.textContent, index)}>{edu.dates}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="right-column" style={{ color: data.textColor }}>
        <div className="header">
          <h1 contentEditable="true" style={{ color: data.themeColor }} onBlur={(e) => onUpdate('name', e.target.textContent)}>{data.name}</h1>
          <p className="title" contentEditable="true" onBlur={(e) => onUpdate('title', e.target.textContent)}>{data.title}</p>
        </div>
        <div className="about-section">
          <h3 style={{ color: data.themeColor }}>About Me</h3>
          <p contentEditable="true" onBlur={(e) => onUpdate('summary', e.target.textContent)}>{data.summary}</p>
        </div>
        <div className="job-experience-section">
          <h3 style={{ color: data.themeColor }}>Job Experience</h3>
          {data.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <p><strong contentEditable="true" onBlur={(e) => onUpdateExperience('title', e.target.textContent, index)}>{exp.title}</strong> at <span contentEditable="true" onBlur={(e) => onUpdateExperience('company', e.target.textContent, index)}>{exp.company}</span></p>
              <p contentEditable="true" onBlur={(e) => onUpdateExperience('dates', e.target.textContent, index)}>{exp.dates}</p>
              <p contentEditable="true" onBlur={(e) => onUpdateExperience('description', e.target.textContent, index)}>{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="skills-section">
          <h3 style={{ color: data.themeColor }}>Skills</h3>
          <p contentEditable="true" onBlur={(e) => onUpdate('skills', e.target.textContent)}>{data.skills}</p>
        </div>
      </div>
    </div>
  );
}

export default CreativeTemplate;