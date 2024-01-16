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

console.log(filterOutOdds(1, 22, 17, 10, 192, 928732, 1213));

// findMin

const findMin = (...args) => {
  return Math.min(...args);
};

console.log(findMin(89, 30, 200, 21, 8, 29));

// mergeObjects

const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// doubleAndReturnArgs

// Slice and Dice!
