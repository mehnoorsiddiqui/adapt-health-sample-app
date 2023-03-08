/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import {
  IdentifierTypeEnum,
  identifierTypeEnumSchema,
} from './identifierTypeEnum';
import {
  IdentifierUseEnum,
  identifierUseEnumSchema,
} from './identifierUseEnum';

/** any internal or external identifier used to represent an entity */
export interface Identifier {
  use: IdentifierUseEnum;
  type: IdentifierTypeEnum;
  value: string;
  [key: string]: unknown;
}

export const identifierSchema: Schema<Identifier> = expandoObject({
  use: ['use', identifierUseEnumSchema],
  type: ['type', identifierTypeEnumSchema],
  value: ['value', string()],
});