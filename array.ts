var numList: number[] = [1, 2, 3];
var strList: string[] = ["one", "two", "three"];
var boolList: boolean[] = [true, false, true];

var arr_List: number[] = new Array(4); //create array of size 4
for (var i = 0; i < arr_List.length; i++) {
  arr_List[i] = i * 2;
  console.log(arr_List[i]);
}

var arr: number[] = [12, 13];
var [a, y] = arr;
console.log(a); //outputs 12
console.log(y); //outputs 13

var j: any;
var arr_Listx: any[] = [1, true, "free"];
for (j of arr_Listx) {
  console.log(j);
}

console.log("#################");
var sites: string[] = new Array("Runoob", "Google", "Taobao", "Facebook");
function showRes(sites: string[]) {
  for (var i in sites) {
    console.log(sites[i]);
  }
}
showRes(sites);

console.log("数组作为函数的返回值");
function dispRes(): string[] {
  return new Array("Runoob", "Google", "Taobao", "Facebook");
}
var arr_res: string[] = dispRes();
for (var k in arr_res) {
  console.log(arr_res[k]);
}

console.log("数组的方法");
//every() 方法测试数组的所有元素是否都通过了指定函数的测试。
function isBigEnough(element, index, array) {
  return element >= 10;
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
console.log("Test Value : " + passed);

//filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("过滤后的数组 : " + filtered);

//forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
