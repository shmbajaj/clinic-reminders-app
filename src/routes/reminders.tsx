import { Box, Button, HStack, Icon, VStack } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import data from '../data';
import { FaPlus } from 'react-icons/fa';
import Form, { FormElement } from '../components/Form';
import { useState, useRef } from 'react';
import { RemindersCollection, RemindersRecord } from '../types';
import { generateRandomUID } from './patients';
import NoEntries from '../components/NoEntries';

const formElements: Array<FormElement> =  [
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
]

export default function Reminders() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [remindersData, setRemindersData] = useState<RemindersCollection>([]);
  const initialValues = useRef<Partial<RemindersRecord>>({});

  const hasNoRecords = remindersData.length < 1;


  function onDelete(id: string) {
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

  function onEdit(id: string) {
    const patient = remindersData.find((p) => p.id === id) || {};
    initialValues.current = patient;
    setFormOpen(true);
  }

  function onSubmit(formData: Record<string, any>){
    const isEdit = !!initialValues.current?.id;
    let reminderRecord: RemindersRecord = {...formData as RemindersRecord}
    if(!isEdit){
      reminderRecord.id = generateRandomUID();
      setRemindersData(prevRemindersData => [...prevRemindersData, reminderRecord]);
    }else{
      setRemindersData(prevRemindersData => prevRemindersData.map(record => record.id !== reminderRecord.id ? record : reminderRecord));
    }
    initialValues.current = {};
  }

  function onClose(){
    setFormOpen(false);
  }

  const formTitle = initialValues.current.id ? "Edit Reminder" : "Add New Reminder";

  
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
      {
        !hasNoRecords &&       <DataTable
        columns={data.reminders.columns}
        data={remindersData}
        itemsPerPage={5}
        onDelete={onDelete}
        onEdit={onEdit}
      />
      }
            {
        hasNoRecords && <NoEntries />
      }
      <Form
        isOpen={isFormOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        title={formTitle}
        formElements={formElements}
        initialValues={initialValues.current}
      />
    </VStack>
  );
}
