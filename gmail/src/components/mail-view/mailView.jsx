import React from "react";
import './mailView.scss';
import icons from '../variables/variables';

function MailView() {
  return (
    <div className="mailview">
      <div className="mailview__controller">
        <input className="mailview__controller-check" type="checkbox" />

        <span className="mailview__controller-down">{icons.down}</span>
        <span className="mailview__controller-refresh">{icons.refresh}</span>
        <span className="mailview__controller-other">{icons.threeDots}</span>
        <span className="mailview__controller-trash">{icons.trashAlt}</span>
        <span className="mailview__controller-open">{icons.openMail}</span>

        <div className="mailview__controller-interval">
          <p className="mailview__controller-interval-text">1-16 of 16</p>
          <span className="mailview__controller-interval-left">{icons.chevronLeft}</span>
          <span className="mailview__controller-interval-right">{icons.chevronRight}</span>
        </div>
      </div>
    </div>
  );
}

export default MailView;
