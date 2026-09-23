import React from 'react';
import './Sidebar.css';

function Sidebar({ data, handleChange, onToggle, isSidebarOpen }) {
  return (
    <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onToggle}>&times;</button>
      <h3>Customization</h3>
      <div className="form-group">
        <label>Theme Color</label>
        <input type="color" name="themeColor" value={data.themeColor} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Text Color</label>
        <input type="color" name="textColor" value={data.textColor} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Font Family</label>
        <select name="fontFamily" value={data.fontFamily} onChange={handleChange}>
          <option value="Arial, sans-serif">Arial</option>
          <option value="'Times New Roman', serif">Times New Roman</option>
          <option value="'Courier New', monospace">Courier New</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;