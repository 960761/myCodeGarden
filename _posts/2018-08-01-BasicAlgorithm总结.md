### 1.	注意string和array的互换思维
因为string 和 array可以通过str.split(xx) , array.join(xx) 互相转换的，因此，可以认为两者的方法也是可以“通用”的，也即如果处理对象是string，想要完成的操作可以使用array的某个方法实现，这时就可以将string转换为array来完成。因此，在解决问题时，要注意array 和 string的互换思考，但是也要注意两者的区别，string是基础类型，而array则是 object 引用类型。
注意，使用split将string转为 array时，不仅可以使用具体的字符，还可以使用regExp
参考01-reverse  a string， 12-mutations

### 2.	ES6中引入的 spread operator: … 作用强大
比如Math.max(xx) 可以接受多个单个value作为参数，但是却不可以接受array作为参数，这时就可以使用Math.max(…arr)，注意，arr.splice(xx,xx,xx)中的第三个参数也是只能为离散的value，不可以为array，这里也可以使用…arr传入array类型参数值。
参考04-Return Largest Numbers in Arrays

### 3.	Array中slice 和 splice的灵活使用
Slice(start, end)，通过指定开始和结束位置来截取（不包括结束位置），返回截取的值作为新array返回，不改变原array。第一个参数如果省略，默认为0，第二个参数如果省略，默认为end，因此，如果arr.slice()，等同于arr.slice(0,length)；则相当于返回原array的一个copy，且两者互不相干。
Splice(start, length,xx)，作为删除功能时，通过指定开始位置和长度来截取，返回截取的值作为新array返回，它改变了原array。除了删除外，还可以增添，替换array 元素。
参考05，09，13。

### 4.	String 中截取部分字符串函数
slice(start, end)
substring(start, end)
substr(start, length)

### 5.	关于array
Array 属于object，非常灵活，最重要一个特性是，其length不是可读的而且是可以改变的，且可以通过改变length值改变array的值，要特别注意。
如果要复制一个array，
不可以简单使用 arr2 = arr1；这样两者指向同一个对象，一个的变化会影响另一个。
可以使用arr2 = arr1.concat(); or arr2 = arr1.slice(); or arr2 =[…arr1]来获取两个互不相关的array 对象。
因为string是简单类型，因此可以使用简单的赋值进行复制： str2 = str1;
参考09，10.

### 6.	关于string
所有string方法都不会改变原string的值，一定要时刻注意这一点。参考12. 

### 7.	尽量应用高级功能
很多问题的解决即使不借用存在的高级功能也可以实现，但是如果借用已有的高级功能就会变得更高效更简洁，所以要尽量使用高级功能，比如filter, map等high-order method的使用。 参考04, 06, 09, 10.

### 8.	解决问题时，思维方式很重要，不要拘泥于传统的思维方式，注意转换思维方式
比如，有一个array，我们想从中截取掉前两个ele，但是我们不想得到被截取掉的两个，而是想得到剩下的array，但是slice的返回值是被截取的eles，这个时候我们就可以转换成 rlt = array.slice(2, length); 等同于array.slice(2)； 这样就得到了想要的结果。
参考07，11，13.

