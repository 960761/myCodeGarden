### 关于 Object Oriented programming：

**1.	继承inheritance**  
创建 super type Animal, child type Bird 
```
function Animal() { } // super type
Animal.prototype.eat = function() {
  return "nom nom nom";
};

function Bird() { } // child type

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird; //otherwise, the constructor will be Animal

// Add new method to child type
Bird.prototype.fly = function() {
	return "Flying";
};
// Overrides parent type method 
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```
**2.	闭包 closure**  
因为java script中没有 block 域的概念，所以变量只有 global scope, function scope两种，因此通过正常途径（constructor, or add）得到的object property都是公开的也即外面可以进行修改的，若想其property为私有的，禁止外界修改的，可以将其定义在constructor里，然后定义一个函数获取它：
 ```
 function Bird() {
  let hat = 10; // NOTE: not this.hat = 10; private property

  this.getHat = function() { // publicly available method that a bird object can use
    return hat;
  };
}
let ducky = new Bird();
ducky.getHat (); // returns 10

In JavaScript, a function always has access to the context in which it was created. This is called closure.
```
**3.	模式 module**  
自激发函数IIFE：Immediately Invoke Function Expression
不用被调用，声明之后就立即会执行，一般的语法形式为：
```
(function () {
  console.log("Chirp, chirp!");
})();
```
当给这段IIFE 赋予了名称以便日后调用，就得到：
```
Var module = (function () {
  console.log("Chirp, chirp!");
})();
```
以上其实就是一个module了。看一个应用：
将下面两个函数封装为一个module:
```
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```
封装如下：
```
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }// end return
}) ();
```
调用如下：
```
motionModule.glideMixin(duck);
duck.glide();
```

### 关于 Functional programming:
这一部分讲的并非 函数式编程，而是 利用 函数解决问题的思路，也即将一个大问题分解成多个小问题，每个小问题使用独立的函数进行解决。
使用function的两个原则：
**1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.**  
不要改变传入的参数和全局变量，在函数内部新创建变量并用于处理并返回。
**2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.**  
函数中需要用到的变量都作为参数传入，减少对外部的依赖关系。

此外还练习了一些array 中high order function 的使用：  
every(), some(), filter()， 三者都是用来check if pass a test，但是返回的结果不同；  
forEach(), map() 都是执行一个function，前者改变原array，后者生成新的；  
reduce(), reduceRight(), 都是得到 a single value，  
以上高阶函数可以连接使用，比如首先使用filter过滤array，然后利用map进行变换，最后使用reduce()得到一个想要的目标值：  
myArr.filter(myFilter).map(myMap).reduce(myReduce);
