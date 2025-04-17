import React from 'react';
import MailView from '../../components/mail-view/index';

function Sent() {
  return (
    <div>
      <MailView category="Sent" sentOnly={true} />
    </div>
  );
}

export default Sent;
