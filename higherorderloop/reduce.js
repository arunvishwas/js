//map funtion use it return new arr not modify the original one

const arr1=[1,2,3,4,5,6,7];
const numarr1 = arr1.map((arr2) =>{

 
    return arr2+10; //item return new array type 
})

console.log(numarr1);
console.log(arr1);

ar =[];

 arr1.forEach((item) => {

   return ar.push(item*10);
  

})

console.log(ar);
console.log(arr1); //it return the new value not modify the original one

//map chainning  

const newNums = arr1.map((num)=>{
     return num*20
}).map((num)=>{
   return num+1;
  }).filter((num)=>{
    return num >10; //you can apply more than one function

  })

console.log(newNums);
