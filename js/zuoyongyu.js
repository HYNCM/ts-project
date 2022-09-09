var global_num = 12; // 全局变量
class Numbers {
    constructor() {
        this.num_val = 13; // 实例变量
    }
    storeNum() {
        var local_num = 14; // 局部变量
    }
}
Numbers.sval = 10; // 静态变量
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var newNum = new Numbers();
console.log("实例变量: " + newNum.num_val);
