export interface PatientsRecord {
    id: string;
    name: string;
    mnumber: string;
    dob: string
} 

export type PatientsCollection = Array<PatientsRecord>;

export interface RemindersRecord {
    id: string;
    patientName: string;
    status: ReminderStatus;
    channel: ReminderCommunicationChannel;
    type: ReminderType;
}

export type RemindersCollection = Array<RemindersRecord>

export enum ReminderStatus {
    DELIVERED = "Delivered",
    IN_PROGRESS = "In Progress",
    YET_TO_DELIVER = "Yet To Deliver",
}

export enum ReminderCommunicationChannel {
    SMS = "SMS",
    WHATSAPP = "WHATSAPP"
}

export enum ReminderType {
    BIRTHDAY = "Birthday",
    VACCINE = "Vaccine"
}

export interface DataTypeColumns {
    header: string;
    accessor: string;
}