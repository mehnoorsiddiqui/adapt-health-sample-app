/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import {
  ContactPointUseEnum,
  contactPointUseEnumSchema,
} from './contactPointUseEnum';
import { SystemEnum, systemEnumSchema } from './systemEnum';

export interface ContactPoint {
  system: SystemEnum;
  value: string;
  use: ContactPointUseEnum;
  [key: string]: unknown;
}

export const contactPointSchema: Schema<ContactPoint> = expandoObject({
  system: ['system', systemEnumSchema],
  value: ['value', string()],
  use: ['use', contactPointUseEnumSchema],
});
