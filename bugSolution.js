function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){return a+b;}else{return 'Invalid input: inputs must be numbers';}}
console.log(foo(1,2));//Expected output:3console.log(foo(1,`2`));//Expected output:Invalid input: inputs must be numbers