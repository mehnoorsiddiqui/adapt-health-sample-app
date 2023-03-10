/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface HumanName {
  family: string;
  given: string;
  prefix: string;
  suffix: string;
  [key: string]: unknown;
}

export const humanNameSchema: Schema<HumanName> = expandoObject({
  family: ['family', string()],
  given: ['given', string()],
  prefix: ['prefix', string()],
  suffix: ['suffix', string()],
});
