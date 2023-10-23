const num1=[1,2,3,4,5,6,7,8,9,10];
const filternum = num1.filter((num) =>{ 
    return num > 4})

//array_name.filter((parameter) => parameter condition chechk)
console.log(filternum);

//wihthout using filter we retur vallue using foreach

const newnums = [];
num1.forEach((array1) => {
if(array1 > 4){
    newnums.push(array1)
}

})


console.log(newnums);

let arr2 = [

{name:"modren history" ,genre:"history",publish:2009,edition:2023 },
{name:"ancent history" ,genre:"old his",publish:2010,edition:2025 },
{name:"Mughal history" ,genre:"Medival history",publish:2011,edition:2030 },

];
 

     const arr3 = arr2.filter((arr5) =>{
        return (arr5.genre==="history")
    }
     );  
     console.log(arr3);














