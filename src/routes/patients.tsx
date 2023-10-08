import { Box, Button, HStack, Icon, VStack } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import data from '../data';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Form from '../components/Form';

export default function Patients() {
  const [isFormOpen, setFormOpen] = useState(false);
  return (
    <VStack spacing={4} p={4} w="100%">
      <HStack justifyContent="flex-end" w="100%">
        <Box>
          <Button
            onClick={() => setFormOpen(true)}
            leftIcon={<Icon as={FaPlus} onClick={() => setFormOpen(true)} />}
            colorScheme="blue"
          >
            Add Patient
          </Button>
        </Box>
      </HStack>
      <DataTable
        columns={data.patients.columns}
        data={data.patients.data}
        itemsPerPage={5}
        // insertNewRecordBtnText="Add Patient"
      />
      <Form
        isOpen={isFormOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={(formData) => {
          console.log({ formData });
        }}
        title="Add New Patient"
        formElements={[
          {
            label: 'Name',
            name: 'name',
            type: 'text',
            required: true,
          },
          {
            label: 'Mobile Number',
            name: 'mnumber',
            type: 'text',
            required: true,
          },
          {
            label: 'Date Of Birth',
            name: 'dob',
            type: 'text',
            required: true,
          },
        ]}
      />
    </VStack>
  );
}
