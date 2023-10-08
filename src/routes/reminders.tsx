import { Box, Button, HStack, Icon, VStack } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import data from '../data';
import { FaPlus } from 'react-icons/fa';
import Form from '../components/Form';
import { useState } from 'react';

export default function Reminders() {
  const [isFormOpen, setFormOpen] = useState(false);
  return (
    <VStack spacing={4} p={4} w="100%">
      <HStack justifyContent="flex-end" w="100%">
        <Box>
          <Button
            onClick={() => setFormOpen(true)}
            leftIcon={<Icon as={FaPlus} />}
            colorScheme="blue"
          >
            Add Reminder
          </Button>
        </Box>
      </HStack>
      <DataTable
        columns={data.reminders.columns}
        data={data.reminders.data}
        itemsPerPage={5}
        // insertNewRecordBtnText="Add Reminder"
      />
      <Form
        isOpen={isFormOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={(formData) => {
          console.log({ formData });
        }}
        title="Add New Reminder"
        formElements={[
          {
            label: 'Type',
            name: 'type',
            type: 'text',
            required: true,
          },
          {
            label: 'Communication Channel',
            name: 'channel',
            type: 'text',
            required: true,
          },
          {
            label: 'Patient Name',
            name: 'patientName',
            type: 'text',
            required: true,
          },
        ]}
      />
    </VStack>
  );
}
