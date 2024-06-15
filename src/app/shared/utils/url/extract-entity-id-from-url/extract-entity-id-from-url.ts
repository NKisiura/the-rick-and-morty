/**
 * Extracts the entity ID from a given URL.
 *
 * @param {string} url - The URL from which to extract the entity ID.
 *
 * @returns {number} The entity ID extracted from the URL.
 *
 * @example
 * // returns 23
 * extractEntityIdFromUrl("https://rickandmortyapi.com/api/episode/23")
 *
 * @description
 * The function splits the URL by the "/" character and retrieves the last part, which is assumed to be the entity ID.
 * The entity ID is then converted to a number. If the last part of the URL is not a valid number, an error is thrown.
 */
export const extractEntityIdFromUrl = (url: string): number => {
  const urlParts = url.split("/");
  const entityId = urlParts.at(-1);

  if (!entityId || Number.isNaN(+entityId)) {
    throw new Error("Invalid URL. Cannot extract entity ID.");
  }

  return +entityId;
};
