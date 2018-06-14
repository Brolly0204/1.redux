export default function (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

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