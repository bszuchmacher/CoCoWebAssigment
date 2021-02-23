import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

const ModalDisplay = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} onClose={props.closeModal}>
      <ModalOverlay />
      <ModalContent fontFamily="Reggae One">
        <ModalHeader textDecoration="underline">Image by: {props.author} </ModalHeader>
        <ModalCloseButton
          _hover={{
            transition: "transform .2s",
            transform: "scale(1.5)",
            transitionDuration: "2s"
          }}
        />
        <ModalBody 
        backgroundColor="azure"
        _hover={{
              transition: "transform .2s",
              transform: "scale(1.1)",
              transitionDuration: "2s"}}>
          <img
            alt={props.author}
            width="100%"
            height="100%"
            src={props.src}
            fallbackSrc="https://via.placeholder.com/150/FFFF00/000000"
          ></img>
          <br></br>
          <Text fontStyle="italic" fontSize="16px">Find at: {props.src}</Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            onClick={props.closeModal}
            _hover={{
              transition: "transform .2s",
              transform: "scale(1.5)",
              transitionDuration: "2s",
            }}
            fontFamily="Reggae One"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDisplay;
