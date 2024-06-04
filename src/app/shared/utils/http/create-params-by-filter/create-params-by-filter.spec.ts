import { createHttpParamsByFilter } from "@shared/utils/http";

describe("createHttpParamsByFilter", () => {
  it("should create HttpParams with properties from filter object", () => {
    const filter = {
      name: "Rick",
      age: 30,
      isActive: false,
    };
    const params = createHttpParamsByFilter(filter);

    expect(params.get("name")).toEqual("Rick");
    expect(params.get("age")).toEqual("30");
    expect(params.get("isActive")).toEqual("false");
  });

  it("should create empty HttpParams when filter object is empty", () => {
    const filter = {};
    const params = createHttpParamsByFilter(filter);

    expect(params.keys().length).toEqual(0);
  });

  it("should ignore null and undefined properties in filter object", () => {
    const filter = {
      name: "Rick",
      gender: null,
      status: undefined,
    };
    const params = createHttpParamsByFilter(filter);

    expect(params.get("name")).toEqual("Rick");
    expect(params.get("gender")).toBeNull();
    expect(params.get("status")).toBeNull();
  });

  it("should ignore empty string properties in filter object", () => {
    const filter = {
      name: "Rick",
      type: "",
    };
    const params = createHttpParamsByFilter(filter);

    expect(params.get("name")).toEqual("Rick");
    expect(params.get("type")).toBeNull();
  });

  it("should include empty string properties in filter object if skipEmptyString option is set to false", () => {
    const filter = {
      name: "Rick",
      type: "",
    };
    const params = createHttpParamsByFilter(filter, {
      skipEmptyString: false,
    });

    expect(params.get("name")).toEqual("Rick");
    expect(params.get("type")).toEqual("");
  });

  it("should include properties with a number value of 0 in filter object", () => {
    const filter = {
      name: "Rick",
      age: 0,
    };
    const params = createHttpParamsByFilter(filter);

    expect(params.get("age")).toEqual("0");
  });

  it("should include properties with a boolean false value from filter object", () => {
    const filter = {
      name: "Rick",
      isActive: false,
    };
    const params = createHttpParamsByFilter(filter);

    expect(params.get("isActive")).toEqual("false");
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
