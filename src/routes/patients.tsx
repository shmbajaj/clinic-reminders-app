import { Box, Button,  HStack, Icon, VStack, } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import data from '../data';
import { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Form, { FormElement } from '../components/Form';
import NoEntries from '../components/NoEntries';
import { PatientsCollection, PatientsRecord } from '../types';
import {v4 as uuidv4} from 'uuid';


const formElements: Array<FormElement> = [
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
  type: 'date',
  required: true,
},
]

export function generateRandomUID(){
  return uuidv4();
}


export default function Patients() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [patientsData, setPatientsData] = useState<PatientsCollection>([]);
  const initialValues = useRef<Partial<PatientsRecord>>({});

  const hasNoRecords = patientsData.length < 1;

  function onDelete(id: string) {
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

  function onEdit(id: string) {
    const patient = patientsData.find((p) => p.id === id) || {};
    initialValues.current = patient;
    setFormOpen(true);
  }

  function onSubmit(formData: Record<string, any>){
    const isEdit = !!initialValues.current?.id;
    let patientRecord: PatientsRecord = {...formData as PatientsRecord}
    if(!isEdit){
      patientRecord.id = generateRandomUID();
      setPatientsData(prevPatientsData => [...prevPatientsData, patientRecord]);
    }else{
      setPatientsData(prevPatientsData => prevPatientsData.map(record => record.id !== patientRecord.id ? record : patientRecord));
    }
    initialValues.current = {};
  }

  function onClose(){
    setFormOpen(false);
  }

  const formTitle = initialValues.current.id ? "Edit Patient" : "Add New Patient"

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
      {
        !hasNoRecords &&       <DataTable
        columns={data.patients.columns}
        data={patientsData}
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
