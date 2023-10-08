import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

interface FormElement {
  label: string;
  name: string;
  type: 'text' | 'number' | 'email' | 'password' | 'date';
  required?: boolean;
  // value: string | number;
}

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: Record<string, any>) => void;
  title: string;
  formElements: FormElement[];
  initialValues?: Record<string, any>;
}

export default function Form({
  isOpen,
  onClose,
  onSubmit,
  title,
  formElements,
  initialValues,
}: FormProps) {
  const { isOpen: isModalOpen, onOpen, onClose: handleClose } = useDisclosure();
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  useEffect(() => {
    setFormData(initialValues || {});
  }, [initialValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({});
    handleClose();
    onClose();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => {
        onClose();
        handleClose();
      }}
      size="md"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            {formElements.map((element) => (
              <FormControl key={element.name} mb={4}>
                <FormLabel>{element.label}</FormLabel>
                <Input
                  type={element.type}
                  name={element.name}
                  value={formData[element.name] || ''}
                  required={element.required || false}
                  onChange={handleChange}
                />
              </FormControl>
            ))}
            <Button colorScheme="blue" onClick={handleSubmit} mr={2}>
              Save
            </Button>
            <Button
              colorScheme="gray"
              onClick={() => {
                onClose();
                handleClose();
              }}
            >
              Cancel
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
