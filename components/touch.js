import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image} from "@nextui-org/react";

export default function Touch() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button onClick={onOpen} className="flex flex-col items-center mx-auto">
      <Image
          alt="nextui logo"
          radius="sm"
          src="/touch.webp"
          width={240}
        />
        <div className='text-center'>
        <h3 className='font-bold text-2xl font-seasons text-[#f7faf8]'>Touch</h3>
        </div>
      </button>
      <Modal className="bg-[#98c08e] text-white" isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-seasons">Touch</ModalHeader>
              <ModalBody>
              Discover how touch, beyond the physical, impacts our connections. Use color, language, and values to create meaningful and mindful interactions.
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
