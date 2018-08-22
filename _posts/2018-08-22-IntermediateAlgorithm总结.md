1.	Array.from(xx)的使用
这是ES6中新添加的函数，可以从object获取array，函数的参数数组arguments是一个类array，但并不是一个array，因此，常用的就是使用Array.from(arguments)来获取arguments array，但要注意的是，这里获取到的并不是flatten array，也即 若 arguments 为 （[1，2]，3），那么得到的array为[[1,2],3]，并非[1,2,3]。要注意这一点。
arr = Array.from(arguments); 和 arr = […arguments]; 相同的效果，得到的都是未flatten的array，也就是仅仅将arguments转换为了array。
参考demo 03，10。

2.	Array高阶函数的使用
熟练使用array常用的高阶函数： filter, map, forEach,every, some, reduce等。
如果基于原array根据某些条件过滤掉膜某些元素，可以考虑使用filter；
如果基于原array根据某些条件生成一对一的新array，可以考虑使用map or forEach，前者不改变原array，后者可改变可不改变，依据具体操作而定。
其中find(), findIndexOf()，也类似高阶函数，用于查找满足某test的元素。
参考demo 02，04

3.	Object.keys(obj)的使用
对象的实质就是一组无序的名/值对，key/value pairs，遍历对象的所有属性，
可以获取objects的prop/key array，然后对其遍历，等同于 for(var prop in obj)
Demo 04

4.	正则表达式的高级用法
String中可以接受regExp的方法有：
split, replace, match, search
注意四种方法的功能。
另外，注意 pattern 和 capture group的区别，
即 /pattern/ 和 /(pattern)/的区别：
/(pattern)/ = /pattern/ + matches
/(?:pattern)/ = /pattern/
具体参考demo 05

5.	注意lookup table的用法
Lookup table也即map数据结构，是多组一一对应的名值对的组合。
凡是 switch…case…类型的问题都可以考虑使用map数据结果。
参考demo 08，11.

6.	String 和 array的换位思考
因为string和array可以相互转换，因此，两者的方法可以认为是通用的，因此，若遇到string问题使用string method无法解决，可以考虑使用 array method；
若遇到 array 问题使用 array method无法解决，可以考虑使用 string method；
要训练这种 string, array 换位思考的模式。
参考demo 09.

7.	Reduce()的高级用法
可以使用reduce()进行简单的累加或累乘等操作，也可以进行复杂的reduce操作，实质上，复杂的reduce 操作一般都可以分解为 filter+reduce；
Advanced reduce = filter + simple reduce
参考demo 12，13.

8.	Array方法会改变原array
String 的所有方法都不会改变原string，
但是array的有些方法则会改变原array，而且array.length不是只读的，也可以改变的，这一点一定要注意。
参考demo 15.

9.	Flatten multi-layer array
掌握flatten多层 array的方法。
如果确定里面都是数值，可以简单的使用.toString(); 方法，此方法可以flatten任意多层次的array。
参考demo 16.

10.	 选择最佳实现
每种算法都会有很多种的实现，要尽量充分利用string, array提供的高级功能进行实现。其实每种高级功能都是一些操作的封装，所以，即便不使用任何高级功能，依然可以使用最基本的操作实现，但是效率会非常低下。
在遇到问题时，不要一上来就考虑是否可用高级功能，先思考使用最基本的方式解决，然后考虑是否可以使用提供的高级功能来替换掉某些步骤或功能。所给出的大部分demo都提供了基础实现方法和使用高级功能实现的方法。






