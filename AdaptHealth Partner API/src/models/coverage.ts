/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, Schema, string } from '../schema';
import { Class, classSchema } from './class';
import { Identifier, identifierSchema } from './identifier';
import { Period, periodSchema } from './period';
import { PolicyHolder, policyHolderSchema } from './policyHolder';
import { Reference, referenceSchema } from './reference';
import { RelationshipEnum, relationshipEnumSchema } from './relationshipEnum';

/** coverage and payor information */
export interface Coverage {
  identifier: Identifier[];
  /** a date-only range */
  period: Period;
  payor: Reference[];
  subscriberId: string;
  mClass: Class[];
  network: string;
  order: number;
  relationship: RelationshipEnum;
  policyHolder: PolicyHolder;
  [key: string]: unknown;
}

export const coverageSchema: Schema<Coverage> = expandoObject({
  identifier: ['identifier', array(lazy(() => identifierSchema))],
  period: ['period', lazy(() => periodSchema)],
  payor: ['payor', array(lazy(() => referenceSchema))],
  subscriberId: ['subscriberId', string()],
  mClass: ['class', array(lazy(() => classSchema))],
  network: ['network', string()],
  order: ['order', number()],
  relationship: ['relationship', relationshipEnumSchema],
  policyHolder: ['policyHolder', lazy(() => policyHolderSchema)],
});
