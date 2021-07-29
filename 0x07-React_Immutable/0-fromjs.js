import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  const map1 = fromJS(object);
  return map1;
}

// getImmutableObject({
//   fear: true,
//   smell: -1033575916.9145899,
//   wall: false,
//   thing: -914767132
// });