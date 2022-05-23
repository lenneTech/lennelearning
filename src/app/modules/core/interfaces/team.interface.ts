import { Specialty } from './specialty.interface';

export interface Team {
  name: string;
  imageUrl: string;
  imageAlt: string;
  contact: string;
  type: string;
  phoneNumber?: string;
  frontend?: Specialty[];
  backend?: Specialty[];
  design?: Specialty[];
}
