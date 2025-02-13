import React, { useState } from "react";
import "./labels.scss";
import icons from "../variables/variables";
import LabelModal from "../label-modal/labelModal";

function Labels() {
  const [modalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState([{ name: "Categories", color: "#333333" }]);
  const [labelName, setLabelName] = useState("");
  const [labelColor, setLabelColor] = useState("#");

  const toggleModal = () => setModalOpen(!modalOpen);

  // Random renk oluşturma fonksiyonu
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
        color: labelColor === "#" ? generateRandomColor() : labelColor,  // Kullanıcı boş bırakırsa random renk
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
        <p className="sidebar__labels-add-header">Labels</p>
        <span className="sidebar__labels-add-icon" onClick={toggleModal}>
          {icons.add}
        </span>
      </div>

      {/* Modal Component */}
      <LabelModal
        isOpen={modalOpen}
        toggleModal={toggleModal}
        labelName={labelName}
        setLabelName={setLabelName}
        labelColor={labelColor}
        setLabelColor={setLabelColor}
        addLabel={addLabel}
      />

      {/* Category Items Render */}
      {categories.map((category, index) => (
        <div key={index} className="sidebar__headline">
          <div className="sidebar__headline-box">
            <span
              className="sidebar__headline-box-icon"
              style={{ color: category.color }}
            >
              {icons.label}
            </span>
            <p className="sidebar__headline-box-text">{category.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Labels;





// import React, { useState } from "react";
// import "./labels.scss";
// import icons from "../variables/variables";
// import LabelModal from "../label-modal/labelModal";
// import LabelItem from "../label-item/labelItem";

// function Labels() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [categories, setCategories] = useState([{ name: "Categories", color: "#333333" }]);
//   const [labelName, setLabelName] = useState("");
//   const [labelColor, setLabelColor] = useState("#");

//   const toggleModal = () => setModalOpen(!modalOpen);

//   const generateRandomColor = () => {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   const addLabel = () => {
//     if (labelName.trim() !== "") {
//       const newCategory = {
//         name: labelName,
//         color: labelColor === "#" ? generateRandomColor() : labelColor,
//       };
//       setCategories([...categories, newCategory]);
//       setLabelName("");
//       setLabelColor("#");
//       setModalOpen(false);
//     }
//   };

//   return (
//     <div className="sidebar__labels">
//       <div className="sidebar__labels-add">
//         <p className="sidebar__labels-add-header">Labels</p>
//         <span className="sidebar__labels-add-icon" onClick={toggleModal}>
//           {icons.add}
//         </span>
//       </div>

//       <LabelModal
//         isOpen={modalOpen}
//         toggleModal={toggleModal}
//         labelName={labelName}
//         setLabelName={setLabelName}
//         labelColor={labelColor}
//         setLabelColor={setLabelColor}
//         addLabel={addLabel}
//       />

//       {categories.map((category) => (
//         <div className="sidebar__headline">
//           <div className="sidebar__headline-box">
//             <span
//               className="sidebar__headline-box-icon"
//               style={{ color: category.color }}
//             >
//               {icons.label}
//             </span>
//             <p className="sidebar__headline-box-text">{category.name}</p>
//           </div>
//         </div>
//       ))}

// {/* {categories.map((category) => (
// <LabelItem
// iconName={icons.label}
// iconColor={category.color}
// text={category.name}
// href={'/'}

// />
//       ))} */}
      
//     </div>
//   );
// }

// export default Labels;
