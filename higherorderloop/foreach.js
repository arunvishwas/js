//return a value in forEach loop
const coding =["Javascript","Ruby","Java","Swift","Python"]

const values = coding.forEach(function (item) { //it back only values

console.log(item);
return item;

})

console.log(values);

//forEach loop doesn't return the values 
//its important

//