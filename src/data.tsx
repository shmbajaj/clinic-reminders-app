import { AtSignIcon, BellIcon } from '@chakra-ui/icons';

const patients = {
  columns: [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Mobile Number', accessor: 'mnumber' },
    { header: 'Date Of Birth', accessor: 'dob' },
  ],

  data: [
    { id: 1, name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 2, name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 3, name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 4, name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 5, name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 6, name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 7, name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 8, name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 9, name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 10, name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 11, name: 'John Doe', mnumber: '9519595195', dob: '05/08/1998' },
    { id: 12, name: 'Jane Smith', mnumber: '9519595195', dob: '05/08/1998' },
  ],
};

const reminders = {
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
      id: 1,
      type: 'Birthday',
      channel: 'sms',
      status: 'Delivered',
      patientName: 'Jane Smith',
    },
    {
      id: 2,
      type: 'Birthday',
      channel: 'whatsapp',
      status: 'Delivered',
      patientName: 'Jane Smith',
    },
    {
      id: 3,
      type: 'Vaccine',
      channel: 'sms',
      status: 'In Progress',
      patientName: 'Jane Smith',
    },
    {
      id: 4,
      type: 'Birthday',
      channel: 'whatsapp',
      status: 'In Progress',
      patientName: 'Jane Smith',
    },
    {
      id: 5,
      type: 'Vaccine',
      channel: 'sms',
      status: 'Yet To Deliver',
      patientName: 'Jane Smith',
    },
    {
      id: 6,
      type: 'Birthday',
      channel: 'whatsapp',
      status: 'Yet To Deliver',
      patientName: 'Jane Smith',
    },
    {
      id: 7,
      type: 'Vaccine',
      channel: 'sms',
      status: 'Delivered',
      patientName: 'Jane Smith',
    },
    {
      id: 8,
      type: 'Birthday',
      channel: 'whatsapp',
      status: 'Delivered',
      patientName: 'Jane Smith',
    },
    {
      id: 9,
      type: 'Vaccine',
      channel: 'sms',
      status: 'In Progress',
      patientName: 'Jane Smith',
    },
    {
      id: 10,
      type: 'Birthday',
      channel: 'whatsapp',
      status: 'In Progress',
      patientName: 'Jane Smith',
    },
    {
      id: 11,
      type: 'Vaccine',
      channel: 'sms',
      status: 'Yet To Deliver',
      patientName: 'Jane Smith',
    },
    {
      id: 12,
      type: 'Birthday',
      channel: 'whatsapp',
      status: 'Yet To Deliver',
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
