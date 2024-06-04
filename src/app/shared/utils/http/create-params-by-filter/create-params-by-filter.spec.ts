import { createHttpParamsByFilter } from "@shared/utils/http";

describe("createHttpParamsByFilter", () => {
  it("should create empty HttpParams when filter object is empty", () => {
    const filter = {};
    const params = createHttpParamsByFilter(filter);

    expect(params.keys().length).toEqual(0);
  });

  it("should ignore null and undefined properties from filter object", () => {
    const filter = {
      name: "Rick",
      gender: null,
      status: undefined,
    };
    const params = createHttpParamsByFilter(filter);

    expect(params.keys().length).toEqual(1);
  });

  it("should ignore empty string properties from filter object if options do not override this behaviour", () => {
    const filter = {
      name: "Rick",
      type: "",
    };

    const params = createHttpParamsByFilter(filter);
    const paramsWithEmptyString = createHttpParamsByFilter(filter, {
      skipEmptyString: false,
    });

    expect(params.keys().length).toEqual(1);
    expect(paramsWithEmptyString.keys().length).toEqual(2);
  });

  it("should include properties with a number value of 0 from filter object", () => {
    const filter = {
      name: "Rick",
      age: 0,
    };
    const params = createHttpParamsByFilter(filter);

    expect(params.keys().length).toEqual(2);
  });

  it("should include properties with a boolean false value from filter object", () => {
    const filter = {
      name: "Rick",
      isActive: false,
    };
    const params = createHttpParamsByFilter(filter);

    expect(params.keys().length).toEqual(2);
  });

  it("should throw an error if filter property value is not primitive", () => {
    const filter = {
      name: "Rick",
      dto: {},
    };

    expect(() => {
      createHttpParamsByFilter(filter);
    }).toThrowError();
  });
});
