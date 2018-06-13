function compose(...fns) {
  return (args) => fns.reduceRight((prev, fn) => fn(prev), args);
}

 export default compose;
// function add1(str) {
//   return str + 1;
// }
//
// function add2(str) {
//   return str + 2;
// }
//
// function add3(str) {
//   return str + 3;
// }


// let result = compose(add3, add2, add1)('liwenli'); // 'liwenli123'
// console.log(result);