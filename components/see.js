import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image} from "@nextui-org/react";

export default function See() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <div onClick={onOpen} className="flex flex-col items-center">
      <Image
          alt="nextui logo"
          radius="sm"
          src="/see.webp"
          width={360}
        />
        <div className='text-center'>
        <h3 className='font-bold text-2xl font-seasons'>See</h3>
        </div>
      </div>
      <Modal className="bg-[#98c08e] text-white" isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-seasons">See</ModalHeader>
              <ModalBody>
              Explore future mapping through visualisation and meditation. Align your reality with your dreams and turn your vision into actionable steps.
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
