// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
// 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。
function displ(s1: string): void;
function displ(n1: number, s1: string): void;
function displ(x: any, y?: any): void {
  console.log(x);
  console.log(y);
}
displ("abc");
displ(1, "xyz");
