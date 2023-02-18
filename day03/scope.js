// ⚠️ Function Scope is dangeraous..! be careful ⚠️
// Print the value of the expression in function scope only ⚠️
// access the value of expression  Outer  Function this will display error..!
function sum(a,b){
var result = a+ b;
console.log(result);
}
sum(4,5)
