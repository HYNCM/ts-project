function add(x: number, y: number): number {
  return x + y;
}
console.log(add(1, 2));

function buildName(
  firstName: string,
  middleInitial?: string,
  lastName?: string
) {
  if (middleInitial && lastName)
    return firstName + " " + middleInitial + " " + lastName;
  else if (middleInitial == null && lastName) return firstName + " " + lastName;
  else if (middleInitial && lastName == null)
    return firstName + " " + middleInitial;
  else return firstName;
}
let result1 = buildName("Bob"); // works correctly now
let result2 = buildName("Bob", "Adams"); // ah, just right
let result3 = buildName("Bob", "Adams", "Sr."); // too many parameters
let result4 = buildName("Bob", "Sr."); // ah, just right
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

console.log("__________________________");
function calculateDiscount(price: number, rate: number = 0.5) {
  var discount = price * rate;
  console.log("Discount Amount: ", discount);
}
calculateDiscount(1000);
calculateDiscount(1000, 0.3);

console.log("__________________________");
function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

console.log("__________________________");
function addNumbers(...nums: number[]) {
  var i;
  var sum: number = 0;

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);

console.log("__________________________");
var msg = function () {
  return "hello world";
};
console.log(msg());

console.log("__________________________");
var resu = function (a: number, b: number) {
  return a * b;
};
console.log(resu(12, 2));

console.log("__________________________");
(function () {
  var x = "Hello!!";
  console.log(x);
})();

console.log("***____struct func***");
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);

console.log("__________________________");
function factorial(number: number): number {
  if (number <= 0) {
    // termination case
    return 1;
  } else {
    // function invokes itself
    return number * factorial(number - 1);
  }
}
console.log(factorial(10)); // outputs 3628800

console.log("__________________________");
console.log("lambda函数");
var foo = (x: number) => 10 + x;
console.log(foo(100)); //outputs 110

console.log("参数推断");
var func = (x: any) => {
  if (typeof x == "number") {
    console.log(x + " is numeric");
  } else if (typeof x == "string") {
    console.log(x + " is a string");
  }
};
func(12);
func("Tom");
