/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { ContactPoint, contactPointSchema } from './contactPoint';
import { Coverage, coverageSchema } from './coverage';
import { GenderEnum, genderEnumSchema } from './genderEnum';
import { HumanName, humanNameSchema } from './humanName';
import { Identifier, identifierSchema } from './identifier';

/** AdaptHealth Patient Type */
export interface Patient {
  /** Unique identifiers for the patient record */
  identifier: Identifier[];
  name: HumanName;
  /** Contact types including phone, fax and email */
  telecom: ContactPoint[];
  gender: GenderEnum;
  birthDate: string;
  /** Patient delivery, billing and physical address */
  address: Address[];
  /** Contact types including phone, fax and email */
  contact: ContactPoint[];
  /** Patient Insurance */
  coverage: Coverage[];
  [key: string]: unknown;
}

export const patientSchema: Schema<Patient> = expandoObject({
  identifier: ['identifier', array(lazy(() => identifierSchema))],
  name: ['name', lazy(() => humanNameSchema)],
  telecom: ['telecom', array(lazy(() => contactPointSchema))],
  gender: ['gender', genderEnumSchema],
  birthDate: ['birthDate', string()],
  address: ['address', array(lazy(() => addressSchema))],
  contact: ['contact', array(lazy(() => contactPointSchema))],
  coverage: ['coverage', array(lazy(() => coverageSchema))],
});
