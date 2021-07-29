import { Map, List } from 'immutable';

export const concatElements = (page1, page2) => {
  const page1 = List(page1);
  const page2 = List(page2);
  return page1.concat(page2);
};

export const mergeElements = (page1, page2) => {
  const page1 = Map(page1);
  const page2 = Map(page2);
  return page1.merge(page2);
};
