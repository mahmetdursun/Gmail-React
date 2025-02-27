import React from "react";
import "./style.scss"; 
import icons from "../variables";

function Compose({ toggleCompose }) {
  return (
    <div className="compose">
      <div className="compose__header">
        <p className="compose__header-text">New Message</p>

        <div className="compose__header-icons">
          <span className="compose__header-icons-minimize">{icons.minimize}</span>
          <span className="compose__header-icons-close" onClick={toggleCompose}>{icons.close}</span>
        </div>
      </div>

      <div className="compose__content">
        <div className="compose__content-to">
          <label className="compose__content-to-text" htmlFor="to"></label>
          <input
            className="compose__content-to-input"
            id="to"
            placeholder="To"
            required
          />
          <hr className="compose__content-to-stick" />
        </div>

        <div className="compose__content-subject">
          <input
            className="compose__content-subject-input"
            type="text"
            id="subject"
            placeholder="Subject"
            required
          />
          <hr className="compose__content-subject-stick" />
        </div>

        <textarea
          className="compose__content-body"
          id="body"
          placeholder="Write your message..."
          required
        ></textarea>
      </div>

      <div className="compose__footer">
        <button className="compose__footer-send" id="send-btn">
          Send
        </button>
        {/* gap ile boşluk ekle */}
        <div className="compose__footer-icon">
          <span>{icons.paperclip}</span>
          <span>{icons.link}</span>
          <span>{icons.smile}</span>
          <span>{icons.drive}</span>
          <span>{icons.image}</span>
          <span>{icons.lock}</span>
          <span>{icons.edit}</span>
          <span>{icons.threeDots}</span>
        </div>

        <div className="compose__footer-trash">
          <span>{icons.trash}</span>
        </div>
      </div>
    </div>
  );
}

export default Compose;
