
let driversMarital="Unmarried";
let driversAge=66;
let driversGender="Male";

if(driversMarital==="Married"){

    console.log(`you are insured`);

}

else if(driversMarital==="Unmarried" && driversAge>=45 && driversGender==="Male")
{

    console.log(`You are ${driversMarital} and age is ${driversAge} and gender is ${driversGender} so you are eligible`);
}
else if(driversMarital==="Unmarried" && driversAge>=25 && driversGender==="Female")
{

    console.log(`You are ${driversMarital} and age is ${driversAge} and gender is ${driversGender} so you are eligible`);
}

else{

    console.log(    `you are not eligible for our isured program`);

}