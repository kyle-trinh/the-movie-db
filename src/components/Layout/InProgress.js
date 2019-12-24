import React from 'react';
import Modal from './Modal';

function InProgess({ showModal, setShowModal }) {
  const closeActionBtn = (
    <>
      <button onClick={() => setShowModal(false)} className="btn btn-primary">
        Close
      </button>
    </>
  );

  return (
    <Modal
      className={`modal ${showModal ? 'show' : ''}`}
      title="Warning"
      desc="This feature has not been published. Please be patien :)"
      onDismiss={() => {
        setShowModal(false);
      }}
      actionBtn={closeActionBtn}
      showModal={showModal}
    />
  );
}

export default InProgess;
