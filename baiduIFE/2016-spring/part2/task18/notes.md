Task 18:
模拟队列
1.	输入值验证  
这里使用input element blur事件来验证输入值的合法性，注意学习。

2.	DOM元素的插入和删除  
使用的函数如下： 
~~~
parentNode.appendChild( node);
parentNode.insertBefore( nodeToInsert, whoseBefore);
parentNode.removeChild(node);
element.firstChild;
element.lastChild;
~~~

3.	Event.target的使用  
在事件处理函数中充分利用event的属性定位元素获取相关值，使用最多的为event.target获取目标元素。
