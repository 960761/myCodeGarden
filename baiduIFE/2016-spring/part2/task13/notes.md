
### 1.	Javascript要发挥作用是需要载体的 
    web开发中使用javascript的载体是网页，也就是html文件，  
    在html文件中使用javascript有两种方式，一种是内嵌，一种是外部js文件，在此task中都有演示。  
    
### 2.	自激发函数
即不需要调用，自动运行的函数  
~~~
 ( function(){   xxx   } )();
~~~

### 3.	注意元素的 innerHTML,  innerText, value三种属性的区别。
value是表单元素特有的属性,输入输出的是转义文本(字符串);  
   (Button、CheckBox、Radio)随表单一起发送的值;  
   (Reset、Submit)标签;  
   (Text、Hidden)默认值;  
   (File、Password)  
   (注: Text控件用value有效)  
   
innerText, textContent, innerHTML 三者区别：  
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent   

innerHTML 就是普通的Html语句； 

innerText则是human readable  content；

textContent则是包括所有的子元素内容，包括style, comment等；

innerHTML:  
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML  
