const mastry = "Answer";
const a =7;
const obj={
    a,
    ["first name"]: "Musharraf",
    ["lname"]: "Sayyad",
   [mastry]:65 // object litral dynamic properties
}
console.log(obj["first name"]) // undefined // why 
console.log(obj["lname"]) // undefined // why 
console.log(obj.Answer) // undefined // why 
console.log(obj.a) // undefined // why 