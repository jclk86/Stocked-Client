export function getInventoryListForTag(items, tagId) {
  const tagIdNum = Number(tagId);
  return !tagId ? items : items.filter(item => item.tag === tagIdNum);
}
