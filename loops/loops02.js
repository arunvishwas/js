let arr1 =["arun","speaker","computer","watch","ups"];

for(let i=0;i<arr1.length;i++){
    console.log(`${arr1[i]}`);

}

//break and continue

for(let i=1;i<=20;i++){

if(i==5){

  console.log(`Detected 5`);
  break;  
}
console.log(`value of i is ${i}`);

}

//continue it skip one condition
for(let i=0;i<20;i++){

if(i==5){
console.log(`detected 5`);
continue; //it skip the i=5 condition an then program will run further

}
console.log(`${i}`);
}