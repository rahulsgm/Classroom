//print # 10-100
// for (let i = 10; i <= 100; i++) {
//  console.log(i);
// }

//multiples of 5 from 200-300
// for (let i = 200; i <= 300; i++) {
//  let reminder= i%5
//  if(reminder===0){
//   console.log(i)
//  }
//   }

//getTheInput
//checkTillTheNumber,ForEachNumberDivideTheInputByEachNumber
//prime numbers
let input = 6;
for (let i = 2; i < input; i++) {
  if (input % i === 0) {
    console.log("NOT A PRIME NUMBER");
    return;
  }
}
console.log("IS A PRIME NUMBER");
