/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Response } from '../models/response';

/**
 * Creates an instance of ApiResponse
 */
interface ApiResponse {
  success: boolean;
  apiName: string;
  version: string;
  timeStamp: string;
  correlationId: string;
  response: Response;
  [key: string]: unknown;
}

export class ApiResponseError extends ApiError<ApiResponse> {}
