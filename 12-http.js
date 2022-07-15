const _ = reqire('lodash');
const  items= [1,[2,[3,[4]]]]
const newItems=_.flattenDee(items)
console.log(newItems);