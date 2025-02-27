import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./style.scss";
import icons from "../variables";

function MailList({ mails }) {
  const [mailItems, setMailItems] = useState([]);

  useEffect(() => {
    setMailItems(mails);
  }, [mails]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(mailItems);
    const [reorderedItem] = items.splice(result.source.index, 1); //eski konum
    items.splice(result.destination.index, 0, reorderedItem); //yeni konum

    setMailItems(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="mails">
        {(provided) => (
          <table className="list" {...provided.droppableProps} ref={provided.innerRef}>
            <tbody>
              {mailItems.map((mail, index) => (
                <Draggable key={mail.email} draggableId={mail.email} index={index}>
                  {(provided) => (
                    <tr
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="list__mail"
                    >
                      <td className="list__mail-select">
                        <span className="list__mail-select-vertical">{icons.grip}</span>
                        <input type="checkbox" className="list__mail-select-check" />
                        <span className={`list__mail-select-star ${mail.starred ? "starred" : ""}`}>
                          {mail.starred ? icons.solidStar : icons.star}
                        </span>
                      </td>

                      <td className="list__mail-user">
                        <span className="list__mail-user-sender">{mail.sender}</span>
                        <span className="list__mail-user-detail">{mail.detail}</span>
                      </td>

                      <td className="list__mail-date">{mail.date}</td>

                      <td className="list__mail-icons">
                        <span>{icons.archive}</span>
                        <span>{icons.trash}</span>
                        <span>{icons.openMail}</span>
                        <span>{icons.snooze}</span>
                      </td>
                    </tr>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </tbody>
          </table>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default MailList;
