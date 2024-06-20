/* eslint-disable react/prop-types */
import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@material-tailwind/react';

const CustomModal = ({ isOpen, onClose, videoId }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Modal size="lg" active={isOpen} toggler={onClose}>
      <ModalHeader toggler={onClose}>Video Player</ModalHeader>
      <ModalBody>
        <iframe
          width="100%"
          height="400"
          src={youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ModalBody>
      <ModalFooter>
        <Button color="red" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
