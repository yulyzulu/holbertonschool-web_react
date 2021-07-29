const { Map } = require('immutable');

function getImmutableObject(object) {
  const map1 = Map(object);
  return map1;
}

getImmutableObject({
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
});