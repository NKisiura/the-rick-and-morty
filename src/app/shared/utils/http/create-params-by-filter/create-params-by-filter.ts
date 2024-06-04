import { HttpParams } from "@angular/common/http";

export interface HttpParamsFromFilterOptions {
  skipEmptyString?: boolean;
}

const defaultOptions: HttpParamsFromFilterOptions = {
  skipEmptyString: true,
};

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
