import accessImmutableObject from './2-nested';

const res = accessImmutableObject({
  name: {
       first: "Guillaume",
       last: "Salva"
  }
}, ['name', 'first']);

console.log(res);