import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf';
import './ResumeEditor.css';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import ModernTemplate from './templates/ModernTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import Sidebar from './Sidebar';

function ResumeEditor() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('professional');

  const [resumeData, setResumeData] = useState({
    name: 'John Doe',
    title: 'Software Developer',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    website: 'www.yourwebsite.com',
    address: '123 Fake St, City, State, ZIP',
    summary: 'A highly motivated and results-oriented professional...',
    experience: [{
      title: 'Senior Developer',
      company: 'Tech Company',
      dates: 'Jan 2020 - Present',
      description: 'Developed and maintained web applications...',
    }],
    education: [{
      school: 'University Name',
      degree: 'Degree, Major',
      dates: 'Year - Year',
    }],
    skills: 'React, JavaScript, HTML, CSS',
    photo: '',
    themeColor: '#1a434b', 
    textColor: '#e0e0e0',  
    fontFamily: 'Arial, sans-serif'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLiveUpdate = (field, value) => {
    setResumeData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleLiveUpdateExperience = (field, value, index) => {
    const newExperience = [...resumeData.experience];
    newExperience[index][field] = value;
    setResumeData(prevData => ({
      ...prevData,
      experience: newExperience,
    }));
  };

  const handleLiveUpdateEducation = (field, value, index) => {
    const newEducation = [...resumeData.education];
    newEducation[index][field] = value;
    setResumeData(prevData => ({
      ...prevData,
      education: newEducation,
    }));
  };
  
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData(prevData => ({
          ...prevData,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const renderTemplate = () => {
    const commonProps = { 
      data: resumeData,
      onUpdate: handleLiveUpdate,
      onUpdateExperience: handleLiveUpdateExperience,
      onUpdateEducation: handleLiveUpdateEducation,
      onPhotoChange: handlePhotoChange 
    };
    switch (selectedTemplate) {
      case 'professional':
        return <ProfessionalTemplate {...commonProps} />;
      case 'modern':
        return <ModernTemplate {...commonProps} />;
      case 'creative':
        return <CreativeTemplate {...commonProps} />;
      default:
        return <ProfessionalTemplate {...commonProps} />;
    }
  };

  const handleDownload = () => {
    const input = document.getElementById('resume-preview-container');

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("resumecraft_resume.pdf");
      });
  };

  return (
    <div className="live-preview-fullscreen">
      <Sidebar 
        data={resumeData}
        handleChange={handleChange}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        handlePhotoChange={handlePhotoChange}
      />
      
      <button className="toggle-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? 'Close Panel' : 'Open Panel'}
      </button>

      <div className="template-tabs">
          <button
            className={`tab-button ${selectedTemplate === 'professional' ? 'active' : ''}`}
            onClick={() => setSelectedTemplate('professional')}
          >
            Professional
          </button>
          <button
            className={`tab-button ${selectedTemplate === 'modern' ? 'active' : ''}`}
            onClick={() => setSelectedTemplate('modern')}
          >
            Modern
          </button>
          <button
            className={`tab-button ${selectedTemplate === 'creative' ? 'active' : ''}`}
            onClick={() => setSelectedTemplate('creative')}
          >
            Creative
          </button>
        </div>
      <div id="resume-preview-container">
        {renderTemplate()}
      </div>
      <button onClick={handleDownload} className="download-button">Download PDF</button>
    </div>
  );
}

export default ResumeEditor;