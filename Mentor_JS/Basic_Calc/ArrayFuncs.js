function mapFunction() {
  let numbers = [2, 4, 6, 8, 10];

  let squares = new Array();

  for (let eachNum of numbers) {
    let square = eachNum * eachNum;
    squares.push(square);
  }
  console.log("Typical Way -- Squares : ", squares);

  let squaresES6 = new Array();
  squaresES6 = numbers.map((eachNum) => eachNum * eachNum);
  console.log("ES6 Way -- squaresES6 : ", squaresES6);

  let names = ["virat", "sachin", "ganguly"];
  console.log(
    "ES6 Way -- names : ",
    names.map((name) => name.toUpperCase())
  );
}

function filterFunc() {
  let numbers = [1, 2, 3, 4, 5, 6];

  let oddNums = new Array();
  let evenNums = new Array();
  for (let num of numbers) {
    if (num % 2 != 0) {
      oddNums.push(num);
    } else {
      evenNums.push(num);
    }
  }

  console.log("odd nums ", oddNums);
  console.log("even nums ", evenNums);

  console.log(
    "ES6 Way Even : ",
    numbers.filter((num) => num % 2 == 0)
  );
  console.log(
    "ES6 Way Odd : ",
    numbers.filter((num) => num % 2 != 0)
  );
}

// mapFunction();

function reduceExample() {
  let numbers = [1, 2, 3, 4, 5, 6];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("Typical way of adding : ", sum);

  let reducedSum = numbers.reduce((accumulator, current) => {
    console.log("accumulator: ", accumulator, " and current: ", current);
    return accumulator + current;
  });
  console.log("ES6 Reduced Sum  : ", reducedSum);
}

reduceExample();
