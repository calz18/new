console.log("hi");
array=[1,2,3,4,8,9]
console.log(array.map(x=>x*2));
console.log(array.filter(x=>x % 2===0));
console.log(array.reduce((sum,el)=>sum+el));
const stupid=false
const gender="female"
const result=gender==="male"?true:(stupid?false:true)
console.log(result);
