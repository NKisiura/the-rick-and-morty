import { HttpParams } from "@angular/common/http";

export interface HttpParamsFromFilterOptions {
  skipEmptyString?: boolean;
}

const defaultOptions: HttpParamsFromFilterOptions = {
  skipEmptyString: true,
};

/**
 * Creates an HttpParams from a given filter object.
 *
 * @param {object} filter - The filter object to be converted into HttpParams.
 * @param {HttpParamsFromFilterOptions} options - Optional configuration options.
 *
 * @returns {HttpParams} - The HttpParams object created from the filter object.
 *
 * @description
 * The function creates an HttpParams object from the given filter object.
 * It iterates over the filter object properties and appends them to the HttpParams object.
 * If the value of the property is null, undefined, or an object, the function ignores it.
 * If the value is an empty string, the function ignores it by default.
 * The function also allows you to include empty string properties in the HttpParams object by setting the `skipEmptyString` option to false.
 */
export const createHttpParamsByFilter = (
  filter: object,
  options?: HttpParamsFromFilterOptions,
): HttpParams => {
  const mergedOptions: HttpParamsFromFilterOptions = {
    ...defaultOptions,
    ...options,
  };

  return Object.entries(filter).reduce((params, [key, value]) => {
    if (value == null) {
      return params;
    }

    if (typeof value === "object" || typeof value === "function") {
      throw new Error(
        `Filter props can be a primitive value only! The type of value in filter "${key}" property is "${typeof value}"`,
      );
    }

    if (value === "" && mergedOptions?.skipEmptyString) {
      return params;
    }

    return params.append(key, value);
  }, new HttpParams());
};
