import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

export const ScoreModal = ({ title, text, modal, setModal, newGame }) => {
  return (
    <Modal isOpen={modal} toggle={setModal}>
      <ModalHeader className="justify-content-center" toggle={setModal}>
        {title}
      </ModalHeader>
      <ModalBody>{text}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={newGame}>
          New Game
        </Button>
      </ModalFooter>
    </Modal>
  );
};
