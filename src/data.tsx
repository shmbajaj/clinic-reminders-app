import { AtSignIcon, BellIcon } from '@chakra-ui/icons';
import { DataTypeColumns, PatientsCollection, ReminderCommunicationChannel, ReminderStatus, ReminderType, RemindersCollection } from './types';

const patients: {columns: Array<DataTypeColumns>, data: PatientsCollection} = {
  columns: [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Mobile Number', accessor: 'mnumber' },
    { header: 'Date Of Birth', accessor: 'dob' },
  ], 

  data: [
    { id: "1", name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "2", name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "3", name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "4", name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "5", name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "6", name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "7", name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "8", name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "9", name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "10", name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "11", name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: "12", name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
  ],
};

const reminders: {columns: Array<DataTypeColumns>, data: RemindersCollection} = {
  columns: [
    { header: 'ID', accessor: 'id' },
    { header: 'Type', accessor: 'type' },
    { header: 'Channel', accessor: 'channel' },
    { header: 'Patient Name', accessor: 'patientName' },
    {
      header: 'Status',
      accessor: 'status',
    },
  ],

  data: [
    {
      id: "1",
      type: ReminderType.BIRTHDAY,
      channel: ReminderCommunicationChannel.SMS,
      status: ReminderStatus.DELIVERED,
      patientName: 'Jane Smith',
    },
    {
      id: "2",
      type: ReminderType.BIRTHDAY,
      channel:ReminderCommunicationChannel.WHATSAPP,
      status: ReminderStatus.DELIVERED,
      patientName: 'Jane Smith',
    },
    {
      id: "3",
      type: ReminderType.VACCINE,
      channel: ReminderCommunicationChannel.SMS,
      status: ReminderStatus.IN_PROGRESS,
      patientName: 'Jane Smith',
    },
    {
      id: "4",
      type: ReminderType.BIRTHDAY,
      channel:ReminderCommunicationChannel.WHATSAPP,
      status: ReminderStatus.IN_PROGRESS,
      patientName: 'Jane Smith',
    },
    {
      id: "5",
      type: ReminderType.VACCINE,
      channel: ReminderCommunicationChannel.SMS,
      status: ReminderStatus.YET_TO_DELIVER,
      patientName: 'Jane Smith',
    },
    {
      id: "6",
      type: ReminderType.BIRTHDAY,
      channel:ReminderCommunicationChannel.WHATSAPP,
      status: ReminderStatus.YET_TO_DELIVER,
      patientName: 'Jane Smith',
    },
    {
      id: "7",
      type: ReminderType.VACCINE,
      channel: ReminderCommunicationChannel.SMS,
      status: ReminderStatus.DELIVERED,
      patientName: 'Jane Smith',
    },
    {
      id: "8",
      type: ReminderType.BIRTHDAY,
      channel:ReminderCommunicationChannel.WHATSAPP,
      status: ReminderStatus.DELIVERED,
      patientName: 'Jane Smith',
    },
    {
      id: "9",
      type: ReminderType.VACCINE,
      channel: ReminderCommunicationChannel.SMS,
      status: ReminderStatus.IN_PROGRESS,
      patientName: 'Jane Smith',
    },
    {
      id: "10",
      type: ReminderType.BIRTHDAY,
      channel:ReminderCommunicationChannel.WHATSAPP,
      status: ReminderStatus.IN_PROGRESS,
      patientName: 'Jane Smith',
    },
    {
      id: "11",
      type: ReminderType.VACCINE,
      channel: ReminderCommunicationChannel.SMS,
      status: ReminderStatus.YET_TO_DELIVER,
      patientName: 'Jane Smith',
    },
    {
      id: "12",
      type: ReminderType.BIRTHDAY,
      channel:ReminderCommunicationChannel.WHATSAPP,
      status: ReminderStatus.YET_TO_DELIVER,
      patientName: 'Jane Smith',
    },
  ],
};

const routes = {
  sidebar: [
    {
      to: 'patients',
      title: 'Patients',
      icon: AtSignIcon,
    },
    {
      to: 'reminders',
      title: 'Reminders',
      icon: BellIcon,
    },
  ],
};

export default { patients, reminders, routes };
