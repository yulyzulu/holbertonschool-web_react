import { Map, List } from 'immutable';

const concatElements = (page1, page2) => {
  return List.concat(page1, page2);
};

const mergeElements = (page1, page2) => {
  const page1 = Map(page1);
  const page2 = Map(page2);
  return page1.merge(page2);
};
