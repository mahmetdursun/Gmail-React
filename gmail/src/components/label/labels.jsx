import React, { useState } from "react";
import icons from "../variables/variables"; // 🟢 `icons` dosyasını import et
import './labels.scss';

function Labels() {
  const [modalOpen, setModalOpen] = useState(false);
  const [labelName, setLabelName] = useState("");
  const [labelColor, setLabelColor] = useState("#333333");
  const [categories, setCategories] = useState(["Categories"]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const addLabel = () => {
    if (labelName.trim() !== "") {
      setCategories([...categories, labelName]);
      setLabelName("");
      setModalOpen(false);
    }
  };

  return (
    <div className="sidebar__labels">
      <div className="sidebar__labels-add">
        <p className="sidebar__labels-add-header">Labels</p>
        <span className="sidebar__labels-add-icon" id="add-icon" onClick={toggleModal}>
          {icons.add} {/* ✅ Burada FaPlus ikonunu doğru şekilde çağırıyoruz */}
        </span>
      </div>

      {modalOpen && <div className="sidebar__labels-overlay" onClick={toggleModal}></div>}

      {modalOpen && (
        <div className="sidebar__labels-modal">
          <div className="sidebar__labels-modal-header">
            <p>New Tag</p>
          </div>

          <div className="sidebar__labels-modal-content">
            <label htmlFor="labelName">Please enter a new tag name:</label>
            <input 
              type="text" 
              id="labelName" 
              placeholder="Etiket adı" 
              value={labelName} 
              onChange={(e) => setLabelName(e.target.value)}
            />

            <div className="sidebar__labels-modal-content-check">
              <input type="checkbox" id="nestedLabel" />
              <label htmlFor="nestedLabel">Edit label:</label>
            </div>

            <select>
              <option value="">Select an option</option>
            </select>

            <label htmlFor="labelColor">Choose a color for the label:</label>
            <input 
              type="color" 
              id="labelColor" 
              value={labelColor} 
              onChange={(e) => setLabelColor(e.target.value)} 
            />
          </div>

          <div className="sidebar__labels-modal-footer">
            <button className="sidebar__labels-modal-footer-close" onClick={toggleModal}>
              İptal Et
            </button>
            <button 
              className="sidebar__labels-modal-footer-create" 
              onClick={addLabel} 
              disabled={!labelName.trim()}
            >
              Oluştur
            </button>
          </div>
        </div>
      )}

      {categories.map((category, index) => (
        <div key={index} className="sidebar__labels-categories">
          <div className="sidebar__labels-categories-article" style={{ backgroundColor: labelColor }}></div>
          <p className="sidebar__labels-categories-text">{category}</p>
        </div>
      ))}
    </div>
  );
}

export default Labels;
