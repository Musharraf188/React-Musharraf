//  create a function that is return a promieses

function myFunction(){
 return new Promise((resolve, reject)=>{
    resolve("hello world")
    console.log(resolve);
 })  
}

// myFunction(4,6).then(()=>{
//     var result = a+b
//     console.log(result);
// })