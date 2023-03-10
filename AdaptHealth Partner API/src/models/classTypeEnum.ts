/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ClassTypeEnum
 */
export enum ClassTypeEnum {
  Group = 'group',
  Plan = 'plan',
  Medicaid = 'medicaid',
}

/**
 * Schema for ClassTypeEnum
 */
export const classTypeEnumSchema: Schema<ClassTypeEnum> = stringEnum(ClassTypeEnum);
