class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  export const square = new Rectangle(100, 200);
  
  console.log(square.area); // 100
  console.log([...square.getSides()]); // [10, 10, 10, 10]  