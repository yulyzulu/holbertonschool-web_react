import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  const list1 = List(list);
  return list1.push(element);
}
