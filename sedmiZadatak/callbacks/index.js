// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
    return num + 2;
  }

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
    return word + "s";
  }

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    return array.map(function(elem) { 
        return callback(elem)
    })  
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
    for (let elem of array) {
      callback(elem);
    }
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let res = [];
  forEach(array, function(elem) {
    res.push(callback(elem));
  });
  return res;
}

//Extension 2
function reduce(array, callback, initialValue) {
    for (let elem of array) {
      initialValue = callback(initialValue, elem);
    }
    return initialValue;
  }

//Extension 3
function intersection(...arrays) {
    return reduce(arrays, (a, b) => {
        let result = [];
        for (let elem of b) {
          if (a.indexOf(elem) > -1) {
            result.push(elem);
          }
        }
        return result;
      }, arrays[0]);
  }

//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    return reduce(arrays, (a, b) => {
        let result = Array.from(a);
        for (let elem of b) {
          if (a.indexOf(elem) == -1) {
            result.push(elem);
          }
        }
        return result;
      }, []);
  }

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    return array1
      .map(elem => {
        return { 
            [elem]: callback(elem) 
        };
      })
      .filter(elem => array2.indexOf(Object.values(elem)[0]) > -1);
  }

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let resultArr = arrVals.map(elem => {
    let arrayOfNewVals = [];
    for (let callback of arrCallbacks) {
      arrayOfNewVals.push(callback(elem));
    }
    return {
          [elem]: arrayOfNewVals 
    };
  });
  return Object.assign({}, ...resultArr);
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
  
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}