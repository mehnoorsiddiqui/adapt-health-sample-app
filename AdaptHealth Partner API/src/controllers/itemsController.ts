/**
 * AdaptHealth Partner APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ApiResponseError } from '../errors/apiResponseError';
import {
  ApiSearchResponse,
  apiSearchResponseSchema,
} from '../models/apiSearchResponse';
import { number } from '../schema';
import { BaseController } from './baseController';

export class ItemsController extends BaseController {
  /**
   * Retrieve a list of AdaptHealth Items
   *
   * @param pageNumber Current page number (used for paging results)
   * @param pageSize   Page size (used for paging results)
   * @return Response from the API call
   */
  async getItems(
    pageNumber: number,
    pageSize: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiSearchResponse>> {
    const req = this.createRequest('GET', '/items');
    const mapped = req.prepareArgs({
      pageNumber: [pageNumber, number()],
      pageSize: [pageSize, number()],
    });
    req.query('pageNumber', mapped.pageNumber);
    req.query('pageSize', mapped.pageSize);
    req.throwOn(500, ApiResponseError, 'TODO: Add error message');
    return req.callAsJson(apiSearchResponseSchema, requestOptions);
  }
}
