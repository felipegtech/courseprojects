/**
 * Computes the next numeric id for an in-memory collection: max existing id + 1,
 * or 1 if the collection is empty. Using `length + 1` here would be a bug, since
 * deleting an item and then creating a new one could produce a duplicate id.
 */
export function nextId(items: { id: number }[]): number {
  return items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
}
