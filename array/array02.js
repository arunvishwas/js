const marvel_heros =["thor","Ironman","spiderman"];
const dc_heros = ["superman","falsh","batman"];
 const newarr = marvel_heros.push(dc_heros);//push method return the existing array not make new array
 console.log(marvel_heros); //here the other array include as a like a element 
 console.log(dc_heros);
 console.log(newarr);//first array's all value 
                     //include as a array but second array values only as a element
//  console.log(newarr[2][1]);

//concatenate two arrays
const newarr2 = marvel_heros.concat(dc_heros);//concat return the new array with all values
console.log(newarr2); 

//spread operator ...
const all_new_heros = [...marvel_heros, ...dc_heros];
//it ...spread operator also concat the two array 

const another_array = [1,2,3,[4,5,6,7,[8,9,[10,11,12]]]];
const real_another_array = another_array.flat(2);
console.log(real_another_array); //.flat include all array in one array
//array counting starting from 0

//HOW CONVERT DATA IN ARRAY
//.isArray function to be used for is data type is array or not
console.log(Array.isArray("Hitesh")); // out in true & false

//from method to be used for change data into array
console.log(Array.from("Hitesh"));

console.log(Array.from({name:"hitesh"})) //it give empty string it not convert direct give to som data to key aur data want to array form
 
