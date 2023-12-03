const itemsStorage = {};
export function getId(menuItem) {
  if (!menuItem) {
    return null;
  }

  if (itemsStorage[menuItem]) {
    itemsStorage[menuItem]++;
  } else {
    itemsStorage[menuItem] = 1;
  }

  return `${menuItem}_${itemsStorage[menuItem]}`;
}
