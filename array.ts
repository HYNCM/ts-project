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

//计算两点的距离
function distance(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;
  return Math.sqrt(a * a + b * b);
}
console.log(distance(1, 1, 2, 3));

//计算多边形的面积
function area(points) {
  var i,
    j,
    area = 0;
  for (i = 0; i < points.length; i++) {
    j = (i + 1) % points.length;
    area += points[i].x * points[j].y;
    area -= points[i].y * points[j].x;
  }
  area /= 2;
  return area;
}
console.log(
  area([
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 4 },
    { x: 0, y: 4 },
  ])
);

//计算多边形的周长
function perimeter(points) {
  var i,
    j,
    dist,
    perimeter = 0;
  for (i = 0; i < points.length; i++) {
    j = (i + 1) % points.length;
    dist = distance(points[i].x, points[i].y, points[j].x, points[j].y);
    perimeter += dist;
  }
  return perimeter;
}
console.log(
  perimeter([
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 4 },
    { x: 0, y: 4 },
  ])
);

//计算多边形的中心点
function centroid(points) {
  var i,
    j,
    f,
    x,
    y,
    centroidX = 0,
    centroidY = 0,
    area = 0;
  for (i = 0; i < points.length; i++) {
    j = (i + 1) % points.length;
    f = points[i].x * points[j].y - points[j].x * points[i].y;
    x = (points[i].x + points[j].x) * f;
    y = (points[i].y + points[j].y) * f;
    centroidX += x;
    centroidY += y;
    area += f * 3;
  }
  area = area / 2;
  centroidX = centroidX / area;
  centroidY = centroidY / area;
  return { x: centroidX, y: centroidY };
}
console.log(
  centroid([
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 4 },
    { x: 0, y: 4 },
  ])
);

//计算多边形的重心
function barycenter(points) {
  var i,
    x = 0,
    y = 0;
  for (i = 0; i < points.length; i++) {
    x += points[i].x;
    y += points[i].y;
  }
  x /= points.length;
  y /= points.length;
  return { x: x, y: y };
}
console.log(
  barycenter([
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 4 },
    { x: 0, y: 4 },
  ])
);

//计算多边形的内切圆
function incircle(points) {
  var a, b, c, d, e, f, g, h, i, j, k, x, y;
  a = points[0].x - points[2].x;
  b = points[1].x - points[2].x;
  c = points[0].y - points[2].y;
  d = points[1].y - points[2].y;
  e = a * (points[0].x + points[2].x) + c * (points[0].y + points[2].y);
  f = b * (points[1].x + points[2].x) + d * (points[1].y + points[2].y);
  g = 2 * (a * (points[2].y - points[1].y) - c * (points[2].x - points[1].x));
  if (g == 0) {
    return false;
  }
  x = (d * e - b * f) / g;
  y = (a * f - c * e) / g;
  return { x: x, y: y };
}
console.log(
  incircle([
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 4 },
    { x: 0, y: 4 },
  ])
);

//计算多边形的外接圆
function circumcircle(points) {
  var a, b, c, d, e, f, g, h, i, j, k, x, y;
  a = points[0].x - points[2].x;
  b = points[1].x - points[2].x;
  c = points[0].y - points[2].y;
  d = points[1].y - points[2].y;
  e = a * (points[0].x + points[2].x) + c * (points[0].y + points[2].y);
  f = b * (points[1].x + points[2].x) + d * (points[1].y + points[2].y);
  g = 2 * (a * (points[2].y - points[1].y) - c * (points[2].x - points[1].x));
  if (g == 0) {
    return false;
  }
  x = (d * e - b * f) / g;
  y = (a * f - c * e) / g;
  return { x: x, y: y };
}
console.log(
  circumcircle([
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 4 },
    { x: 0, y: 4 },
  ])
);

//计算多边形的内切圆半径
function incircleRadius(points) {
  var a, b, c, d, e, f, g, h, i, j, k, x, y;
  a = points[0].x - points[2].x;
  b = points[1].x - points[2].x;
  c = points[0].y - points[2].y;
  d = points[1].y - points[2].y;
  e = a * (points[0].x + points[2].x) + c * (points[0].y + points[2].y);
  f = b * (points[1].x + points[2].x) + d * (points[1].y + points[2].y);
  g = 2 * (a * (points[2].y - points[1].y) - c * (points[2].x - points[1].x));
  if (g == 0) {
    return false;
  }
  x = (d * e - b * f) / g;
  y = (a * f - c * e) / g;
  return distance(x, y, points[0].x, points[0].y);
}
console.log(
  incircleRadius([
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 4 },
    { x: 0, y: 4 },
  ])
);
