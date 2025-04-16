import React from 'react';
import MailView from '../../components/mail-view/index';

function Starred() {
  return (
    <div>
      <MailView starred={true} />
    </div>
  );
}

export default Starred;
