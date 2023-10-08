import { Box, Button, HStack, Icon, VStack } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import data from '../data';
import { FaPlus } from 'react-icons/fa';
import Form from '../components/Form';
import { useState, useRef } from 'react';

export default function Reminders() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [remindersData, setRemindersData] = useState(data.reminders.data);
  const initialValues = useRef<Record<string, any>>({});

  function onDelete(_id: any) {
    const id = parseInt(_id, 10);
    const reminder = remindersData.find((p) => p.id === id);
    if (!reminder) {
      alert('Something Went Wrong!!');
      return;
    }
    const updatedremindersData = [...remindersData].filter((p) => p.id !== id);
    if (
      !window.confirm(
        `Are you sure you want to delete reminder for ${reminder.patientName}?`
      )
    ) {
      return;
    }
    setRemindersData(updatedremindersData);
  }

  function onEdit(_id: any) {
    const id = parseInt(_id, 10);
    const patient = remindersData.find((p) => p.id === id) || {};
    initialValues.current = patient;
    setFormOpen(true);
  }
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
        data={remindersData}
        itemsPerPage={5}
        onDelete={onDelete}
        onEdit={onEdit}
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
        initialValues={initialValues.current}
      />
    </VStack>
  );
}
