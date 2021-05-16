import { Button } from 'grommet';
import React, { useState, useEffect } from 'react';
import { db } from './../../../firebase';

const approvalState = 'Pendiente Aprobación';

function StudentIntention({ practica }) {
  const [internshipState, setInternshipState] = useState(practica.status);

  const handleOnClick = () => {
    if (internshipState !== approvalState) {
      setInternshipState(approvalState);
    }

    db.collection('internships')
      .doc(practica.id)
      .set({ status: approvalState }, { merge: true });
  };

  const isPendingApproval = () => {
    return internshipState === approvalState;
  };

  useEffect(() => {});

  return (
    <Button
      label={
        internshipState !== approvalState
          ? 'Informar intención de práctica'
          : 'Intención enviada'
      }
      primary
      onClick={handleOnClick}
      disabled={isPendingApproval()}
      color={isPendingApproval() ? 'status-warning' : 'status-ok'}
    />
  );
}

export default StudentIntention;