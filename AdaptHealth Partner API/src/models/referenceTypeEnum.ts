/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ReferenceTypeEnum
 */
export enum ReferenceTypeEnum {
  Patient = 'patient',
  Order = 'order',
  Payor = 'payor',
}

/**
 * Schema for ReferenceTypeEnum
 */
export const referenceTypeEnumSchema: Schema<ReferenceTypeEnum> = stringEnum(ReferenceTypeEnum);
