//destructing of object
const course ={

coursename:"js in hindi",
price:"999",
courseInstructor:"hitesh"


}

//course.courseInstructor;

//access the value
const {courseInstructor} = course;
console.log(courseInstructor);

//acsess the value with it aslo
const {courseInstructor:instructor} = course;
console.log(instructor);


//react destructing

// const navbar = ({company}) =>
// {

// console.log(navbar);
// }
//  navbar (company="hitesh")