let sum;
let lastAddend;
sum=2
lastAddend=1
for(let i=0; i<6;i++){
    console.log(sum)
    let temporary=sum;
    sum=sum+lastAddend;
    lastAddend=temporary;
}