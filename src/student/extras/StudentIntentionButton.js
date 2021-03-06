import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { db } from '../../firebase';
import { pendingIntention } from '../../InternshipStates';

const approvalState = pendingIntention;

function StudentIntention({ practica, altText, forceDisable }) {
  const [internshipState, setInternshipState] = useState(practica.status);

  const handleOnClick = () => {
    if (internshipState !== approvalState) {
      setInternshipState(approvalState);
    }

    db.collection('internships')
      .doc(practica.id)
      .update({ status: approvalState });
  };

  const isPendingApproval = () => {
    return internshipState === approvalState;
  };
  return (
    <Button
      onClick={handleOnClick}
      disabled={forceDisable || isPendingApproval()}
      color='primary'>
      {internshipState !== approvalState
        ? altText
          ? altText
          : 'Informar intenci贸n de pr谩ctica'
        : 'Intenci贸n enviada'}
    </Button>
  );
}

export const availableInternshipa = 'Pr谩ctica disponible 馃搼';
export const pendingIntentiona = 'Intenci贸n enviada 馃摠';
export const approvedIntentiona = 'Intenci贸n aprobada 鉁旓笍';
export const deniedIntentiona = 'Intenci贸n rechazada 鉂?';
export default StudentIntention;
