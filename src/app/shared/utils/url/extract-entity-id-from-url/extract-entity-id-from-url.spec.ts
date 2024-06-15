import { extractEntityIdFromUrl } from "@shared/utils/url/extract-entity-id-from-url/extract-entity-id-from-url";

describe("extractEntityIdFromUrl", () => {
  it("should extract the entity ID from a URL", () => {
    const result = extractEntityIdFromUrl(
      "https://rickandmortyapi.com/api/episode/23",
    );
    expect(result).toBe(23);
  });

  it("should throw an error if the URL is invalid", () => {
    expect(() => {
      extractEntityIdFromUrl("https://rickandmortyapi.com/api/episode/23ab");
    }).toThrowError();
  });
});
