import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image} from "@nextui-org/react";

export default function Hear() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button onClick={onOpen} className="flex flex-col items-center">
      <Image
          alt="nextui logo"
          radius="sm"
          src="/hear.webp"
          width={360}
        />
        <div className='text-center'>
        <h3 className='font-bold text-2xl font-seasons'>Hear</h3>
        </div>
      </button>
      <Modal className="bg-[#98c08e] text-white" isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-seasons">Hear</ModalHeader>
              <ModalBody>
              Master feedback and communication with techniques like Non-Violent Communication (NVC). Transform feedback into growth and improved interactions.
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
