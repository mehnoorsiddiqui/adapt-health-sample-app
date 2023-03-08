/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import { AddressTypeEnum, addressTypeEnumSchema } from './addressTypeEnum';

export interface Address {
  type: AddressTypeEnum;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  [key: string]: unknown;
}

export const addressSchema: Schema<Address> = expandoObject({
  type: ['type', addressTypeEnumSchema],
  line1: ['line1', string()],
  line2: ['line2', string()],
  city: ['city', string()],
  state: ['state', string()],
  postalCode: ['postalCode', string()],
  country: ['country', string()],
});