// 1) swapNumbersWithoutUsingTemporaryVar.(1wayOfDoingIt)

let a = 2;
let b = 4;
console.log(a, b);
a = a + b;
b = a - b;
a = a - b;
console.log("swapped!");
console.log(a, b);

// 2) findPrimeNumbersBetween200And300s

function primeNumbers(a, b) {
  console.log(`The prime numbers between ${a} and ${b} are:`);
  for (let i = a; i <= b; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      console.log(i);
    }
  }
}

primeNumbers(200, 300);
