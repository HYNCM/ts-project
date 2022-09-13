class Car {
  engine: string;
  constructor(engine: string) {
    this.engine = engine;
  }
  disp(): void {
    console.log("Engine is  :   " + this.engine);
  }
}
var obje = new Car("XXSY1");
console.log("Reading attribute value Engine as :  " + obje.engine);
obje.disp();

class Shape {
  Area: number;
  constructor(a: number) {
    this.Area = a;
  }
}
class Circle extends Shape {
  disp(): void {
    console.log("⚪的面积：" + this.Area);
  }
}
var objec = new Circle(223);
objec.disp();

class PrinterClass {
  doPrint(): void {
    console.log("父类的 doPrint() 方法。");
  }
}
class StringPrinter extends PrinterClass {
  doPrint(): void {
    super.doPrint();
    console.log("子类的 doPrint() 方法。");
  }
}
var object1 = new StringPrinter();
object1.doPrint();
