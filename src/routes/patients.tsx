import { Box, Button, HStack, Icon, VStack } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import data from '../data';
import { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Form from '../components/Form';

export default function Patients() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [patientsData, setPatientsData] = useState(data.patients.data);
  const initialValues = useRef<Record<string, any>>({});

  function onDelete(_id: any) {
    const id = parseInt(_id, 10);
    const patient = patientsData.find((p) => p.id === id);
    if (!patient) {
      alert('Something Went Wrong!!');
      return;
    }
    const updatedPatientsData = [...patientsData].filter((p) => p.id !== id);
    if (
      !window.confirm(`Are you sure you want to delete ${patient.name} record?`)
    ) {
      return;
    }
    setPatientsData(updatedPatientsData);
  }

  function onEdit(_id: any) {
    const id = parseInt(_id, 10);
    const patient = patientsData.find((p) => p.id === id) || {};
    initialValues.current = patient;
    setFormOpen(true);
  }

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
        data={patientsData}
        itemsPerPage={5}
        onDelete={onDelete}
        onEdit={onEdit}
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
        initialValues={initialValues.current}
      />
    </VStack>
  );
}
