import React from 'react'
import './style.scss'

function LabelModal({ isOpen, toggleModal, labelName, setLabelName, labelColor, setLabelColor, addLabel }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal-header">
          <p>New Tag</p>
        </div>
  
        <div className="modal-content">
          <label className="modal-content-label" htmlFor="labelName">Please enter a new tag name:</label>
          <input
            className="modal-content-text"
            type="text"
            id="labelName"
            placeholder="Etiket adı"
            value={labelName}
            onChange={(e) => setLabelName(e.target.value)}
          />
  
          <label className="modal-content-label" htmlFor="labelColor">Choose a color for the label:</label>
          <input
            type="color"
            id="labelColor"
            value={labelColor}
            onChange={(e) => setLabelColor(e.target.value)}
          />
        </div>
  
        <div className="modal-footer">
          <button className="modal-footer-close" onClick={toggleModal}>
            İptal Et
          </button>
          <button
            className="modal-footer-create"
            onClick={addLabel}
            disabled={!labelName.trim()}
          >
            Oluştur
          </button>
        </div>
      </div>
    );
  }
  
  export default LabelModal;