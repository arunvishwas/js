//array is contain all types of array
const myArr = [0,1,2,3];
 const myArr2 = new Array(1,2,3,4); // new method of array
 
 console.log(myArr[0]); //print any element by using array address

 myArr.push(6); //this method add the value in last of the array
 console.log(myArr[4]);
 myArr.pop(); //it remove the last value from the array
 console.log(myArr);
 
 myArr.unshift(9); //it add the value at starting of array and shift all array
 myArr.shift(); // it remove the value from starting of the array

 console.log(myArr);

 console.log(myArr.includes(9)); //it show that there is 9 include or not in the array
 console.log(myArr.indexOf(2)); // it show that the index of particular element if value on present it show -1 in result
 console.log(myArr.lastIndexOf());

//join method or function
const newArr = myArr.join();
console.log(myArr);
console.log(newArr); //join also convert array into string data type

//slice method and splice method
const myn1=myArr.slice(1,3); //it return section of array it run from 1 and to 2 less one from last value
console.log(myn1); 
 const myn2 = myArr.splice(1,3); //it manupulate the original array it aslo make a new array with this range and leave ramain value in the array
                                  //it include all value from 1 to 3
 console.log(myn2);
 console.log(myArr); //original array manuplutating by the splice method 