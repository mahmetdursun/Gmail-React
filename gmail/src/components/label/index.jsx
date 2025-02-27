import React, { useState } from "react";
import "./style.scss";
import icons from "../variables";
import LabelModal from "../label-modal";
import SidebarOption from '../icon-text-item'

function Labels({ isCollapsed }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState([{ name: "Categories", color: "#333333" }]);
  const [labelName, setLabelName] = useState("");
  const [labelColor, setLabelColor] = useState("#");
  
  const toggleModal = () => setModalOpen(!modalOpen);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addLabel = () => {
    if (labelName.trim() !== "") {
      const newCategory = {
        name: labelName,
        color: labelColor === "#" ? generateRandomColor() : labelColor,
      };
      setCategories([...categories, newCategory]);
      setLabelName("");
      setLabelColor("#");
      setModalOpen(false);
    }
  };

  return (
    <div className="sidebar__labels">
      <div className="sidebar__labels-add">
      {!isCollapsed && <p className="sidebar__labels-add-header">Labels</p>}
        <span 
          className={`sidebar__labels-add-icon ${isCollapsed ? "collapsed" : ""}`} 
          onClick={toggleModal}
        >
          {icons.add}
        </span>
      </div>

      <LabelModal
        isOpen={modalOpen}
        toggleModal={toggleModal}
        labelName={labelName}
        setLabelName={setLabelName}
        labelColor={labelColor}
        setLabelColor={setLabelColor}
        addLabel={addLabel}
      />

      {categories.map((category, index) => (
        <SidebarOption
          key={index}
          icon={icons.label}
          text={isCollapsed ? "" : category.name}
          color={category.color}
          variant="small"
        />
      ))}
    </div>
  );
}

export default Labels;
