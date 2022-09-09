console.log("TypeScript Number 属性：");
console.log("MAX_VALUE: " + Number.MAX_VALUE);
console.log("MIN_VALUE: " + Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY);
console.log("POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY);

console.log("prototype 实例：");
function employeeInfo(id: number, name: string) {
  this.id = id;
  this.name = name;
}
var emp = new employeeInfo(123, "John");
console.log("Employee 's Id: " + emp.id);
console.log("Employee 's Name: " + emp.name);
employeeInfo.prototype.email = "chengming@southzn.com";
console.log("Employee 's Email Id: " + emp.email);

console.log("Number 方法：");
console.log("toExponential() 方法：");
var num: number = 123456.789;
console.log(num.toExponential());
console.log(num.toExponential(2));
console.log(num.toExponential(4));
console.log(num.toExponential(6));
console.log("toFixed() 方法：");
var num: number = 5.56789;
console.log(num.toFixed());
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(6));
console.log("toPrecision() 方法：");
var num: number = 12.34;
console.log(num.toPrecision());
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(4));
console.log(num.toPrecision(6));
console.log("toString() 方法：");
var num: number = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));

console.log("valueOf() 方法：");
var num: number = 15;
console.log(num.valueOf());
console.log((15).valueOf());
console.log((15.5).valueOf());
console.log((15 + 5).valueOf());
