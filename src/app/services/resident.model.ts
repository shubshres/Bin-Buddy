export interface Resident {
  uid: string;
  email: string;
  name: string; 
  streetName: string;
  zipCode: string;
  city: string;
  state: string;
  phoneNumber?: number;
}
