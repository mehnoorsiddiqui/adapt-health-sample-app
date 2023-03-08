/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, lazy, Schema, string } from '../schema';
import { SearchResponse, searchResponseSchema } from './searchResponse';

export interface ApiSearchResponse {
  success: boolean;
  apiName: string;
  version: string;
  timeStamp: string;
  correlationId: string;
  response: SearchResponse;
  [key: string]: unknown;
}

export const apiSearchResponseSchema: Schema<ApiSearchResponse> = expandoObject(
  {
    success: ['success', boolean()],
    apiName: ['apiName', string()],
    version: ['version', string()],
    timeStamp: ['timeStamp', string()],
    correlationId: ['correlationId', string()],
    response: ['response', lazy(() => searchResponseSchema)],
  }
);
