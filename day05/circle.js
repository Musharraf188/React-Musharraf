const circle ={
    radius:4,
    title:"c1",
    width:"2px",
}
const {PI}=Math;
function myCircle({radius}){
return PI *radius*radius;
}

console.log(myCircle(circle));