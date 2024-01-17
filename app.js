// Refactor Below Function to ES2015
/*
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
  */

const filterOutOdds = (...arg) => {
  let nums = [...arg];
  return nums.filter((num) => {
    return num % 2 === 0;
  });
};

// console.log(filterOutOdds(1, 22, 17, 10, 192, 928732, 1213));

// findMin

const findMin = (...args) => {
  return Math.min(...args);
};

// console.log(findMin(89, 30, 200, 21, 8, 29));

// mergeObjects

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) => {
  let nums = [...args];

  const doubled = nums.map((num) => {
    return num * 2;
  });

  return [...arr, ...doubled];
};

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4));

// Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */
// creates new array including elements before and after the randomNum index
const removeRandom = (items) => {
  let randomNum = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomNum), ...items.slice(randomNum + 1)];
};

removeRandom([1, 2, 3, 4]);

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

extend([1, 2], [5, 6]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
};

addKeyVal({ rat: 1, mouse: 3 }, "roach", 4);

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  // Destructure obj to remove key
  const { [key]: val, ...restOfObject } = obj;
  return restOfObject;
};

removeKey({ band: 1, song: 5, tracks: 3 }, "song");
/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  return {
    ...obj,
    [key]: val,
  };
};

console.log(update({ rat: 2, cat: 1, bird: 8 }, "bird", 10));
