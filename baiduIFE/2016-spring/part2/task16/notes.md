### 1.	Js文件的引用位置
因为js文件大部分都会涉及到对控件的操作，因此一定要放在body 最后，或者使用document.ready(){}，或者使用defer=”defer”，总之都是同一个目的，
就是保证所有的DOM加载完毕后再执行js。
### 2.	Object数据类型的处理
注意，这里保存数据的不是array类型，而是object类型，  
遍历object类型属性： for in；  
判断object是否为空，可以使用!=false， ES5新增Object.keys(obj)，可以使用Object.keys(obj).length!=0判断  
### 3.	删除事件handle的处理
这里，需要给  delete button  添加事件处理函数，添加事件处理函数本身不难，关键是在Init 中button 还没有生成，button  是动态生成的， 
因此不可以在init中给btn绑定事件。  
我的处理是在renderData中，等到td显示过后，button已经存在的情况下循环给每个button添加事件处理函数；  
示例代码的处理是在init中给table添加click函数，这个时候table是存在的，然后根据click事件的target来判断，若是点击在了button上面，就进行delete 处理。  
后一种方法比我的方法更巧妙也更高效，因为我的方法中需要动态多次绑定事件，而给table则只需要绑定一次方法即可。  
这也是解决问题思路的一种转变，也是对js中事件的传递的一种理解。  
### 4.	区分event.currentTarget , event.target 的区别
currentTarget = this : who the listen is assigned to;  
target = srcElement(IE) : who trigger the event。  
两者可能相同也可能不同，出现这种情况的原因是js中的事件流思想，简单讲就是可以使用父元素的事件函数处理子元素的事件。  
在事件处理程序内部, 对象 this 始终等于 currentTarget 的值, 而 target 则只包含事件的实际目标.   
如果直接将事件处理程序指定给了目标元素, 则this \ currentTarget \ target 包含相同的值。  
事件处理函数中传入event对象，DOM中的event对象包含一些共同的属性和方法，其中与事件目标控件相关的有：  
e.target 指向触发事件监听的对象，也即是那个元素上面的事件引发了这个处理 程序  
在IE6—IE8之中，该属性的名字不是target，而是srcElement，因此经常可以看到下面这样的代码：  
e.target = event.target || event.srcElement; 用来实现不同版本浏览器的兼容。  
e.currentTarget 指向添加监听事件的对象，也即事件处理程序绑定在了哪个控件上面。  
这就涉及到js中事件流的不同阶段：  
 https://www.jianshu.com/p/1dd668ccc97a
因为事件流的存在，因此div wrap绑定的事件处理程序也可以处理button的事件。
也即，我们可以通过给ul添加事件处理程序实现处理此 Ul里面每个Li上面事件的效果。  
对于示例中的处理方法，将 eventhandler绑定给 了table，那么在点击button时，currentTarget的值就是table，而target的值则是button。  
### 5.	如何使用正则表达式判断全中文或全英文
判断全数字为 /^[0-9]+$/，判断全是中英文字符也是判断中英文字符存在的前提下加上 ^…$，也即以此开头以此结尾，用来判断全为某种字符的 筛选。  
目前的实现中只能全中文或全英文，不可以中英为字符都有。  
中文字符的匹配为：[\u4E00-\u9FA5]  
### 6.	高效实现动态显示Html
再次出现动态显示html的功能，还是要记住，先组织好全部的html字符串，然后一次性修改DOM，而不是每次都是用createElement来实现，  
其本质是尽量减少对DOM的调用，提高效率。  
### 7.	最佳编程思想和规范：函数各司其职，只关注自己的功能
这里在add Data中加入对aqiData是否为空的判断而不放在renderData函数中也是有原因的；  
如果在renderData中判断为空就不显示的话会使得删除最后一条记录后不会更新显示。  
还有，在从0-1条记录时同时添加thead表头，但在删除最后一条记录时不用删除表头，这个也是将非空判断放在addData 而非 renderData中的原因之一。  
其实，renderData只负责显示，其余逻辑的判断不应放在这里，因此将数据是否为空放到别处这里是addData里来处理，控制对renderData是否调用，而renderData只负责显示即可。  
这才是比较正确规范最佳的一种方式。函数功能各司其职，不要有越界和重叠。 
### 8.	最佳编程思想规范：首先搭建好框架很重要
这里，在任务给出的时候已经将整个代码的架构给出来了，我们只需要书写具体的代码即可。  
而这些函数架构是非常重要也是非常有必要的，代码的架构一旦给出，相当于房子的模型给出来了，便于理解也便于调试，  
所以以后在碰到问题的时候，一定要先给出整体的架构，一般具体都表现为函数的调用和层级关系。  
除此外，清晰良好的注释也非常的有必要，可以学习这里给出来的架构和注释习惯。  
