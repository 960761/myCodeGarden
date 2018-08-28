MDN CSS notes:
Task 01: github done.
Task 02: 初始CSS
1.	CSS工作原理：  
HTML+ CSS = DOM
![结构](https://github.com/960761/myCodeGarden/blob/master/_posts/img/cssWork.png)
 
2.	CSS中无效语句处理
如果使用了未知属性，或者给属性赋予了无效值，该声明会被视为无效，浏览器的 CSS 引擎会完全忽略它。如果CSS选择器中使用的链或组，如果链或组中的某个选择器无效，比如使用了未知的伪元素或伪类，整个组的选择器仍然是有效的，除了这个无效的将被忽略的选择器。 
3.	CSS语句分为三大类
规则集， @-规则，嵌套语句，任何不是规则集，或@-规则，或嵌套语句的 CSS 语句都是无效的，并会因此被忽略。
规则集就是平时使用最多的selector+property；  
@-规则：在CSS中被用来传递元数据、条件信息或其它描述性信息。它由（@）符号开始，紧跟着一个表明它是哪种规则的描述符，之后是这种规则的语法块，并最终由一个半角分号（;）结束。每种由描述符定义的@-规则，都有其特有的内部语法和语义。一些例子如下： 
o	@charset 和 @import （元数据）  
o	@media 或 @document （条件信息，又被称为嵌套语句，下方。)  
o	@font-face （描述性信息）  
嵌套语句：是@-规则的一种，它的语法是 CSS 规则的嵌套块，只有在特定条件匹配时才会应用到文档上。  
特定条件如下：   
o	@media 只有在运行浏览器的设备匹配其表达条件时才会应用该@-规则的内容；
o	@supports 只有浏览器确实支持被测功能时才会应用该@-规则的内容；
o	@document 只有当前页面匹配一些条件时才会应用该@-规则的内容。

4.	注释  
CSS中的注释以 /* 开始并以 */ 结束。HTML中的注释则是 <!--comment--> 
5.	CSS选择器分类
 
6.	通用选择器 * 会使得网页显示比预期要慢，因此要慎重使用。
7.	存在和值属性（presence and value）选择器
[attr]：该选择器选择包含 attr 属性的所有元素，不论 attr 的值为何。  
[attr=val]：该选择器仅选择 attr 属性被赋值为 val 的所有元素。  
[attr~=val]：该选择器仅选择具有 attr 属性的元素，而且要求 val 值是 attr 值包含的被空格分隔的取值列表里中的一个。  
8.	子串值（Substring value）属性选择器
这种情况的属性选择器也被称为“伪正则选择器”，因为它们提供类似 regular expression 的灵活匹配方式（但请注意，这些选择器并不是真正的正则表达式）： 
[attr|=val] : 选择attr属性的值是 val 或值以 val- 开头的元素（注意，这里的 “-” 不是一个错误，这是用来处理语言编码的）。  
[attr^=val] : 选择attr属性的值以 val 开头（包括 val）的元素。  
[attr$=val] : 选择attr属性的值以 val 结尾（包括 val）的元素。 
[attr*=val] : 选择attr属性的值中包含子字符串 val 的元素（一个子字符串就是一个字符串的一部分而已，例如，”cat“ 是 字符串 ”caterpillar“ 的子字符串）。
9.	伪类和伪元素
伪选择器 不是选择元素，而是元素的某些部分，或仅在某些特定上下文中存在的元素。它们有两种主要类型 ： 伪类和伪元素。
一个 CSS  伪类（pseudo-class） 是一个以冒号(:)作为前缀，被添加到一个选择器末尾的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类（pseudo-class），伪类有很多，也很有用，比如常见的链接不同状态样式和表格奇偶行的样式设置就是使用伪类。注意以下伪类的使用。
:nth-child()  
:nth-last-child()  
:nth-last-of-type()  
:nth-of-type()  
伪元素（Pseudo-element）跟伪类很像，但它们又有不同的地方。它们都是关键字，但这次伪元素前缀是两个冒号 (::) ， 同样是添加到选择器后面去选择某个元素的某个部分。比如在所有超链接后添加箭头就可以使用伪元素实现，伪元素有
•::after  
•::before  
•::first-letter  
•::first-line  
•::selection  
•::backdrop 
10.	组合器和多个选择器
基于元素之间的相互关联关系，来对元素进行选择。
11.	背景裁剪(background clip)
框的背景是由颜色和图片组成的，它们堆叠在一起（background-color, background-image）。 它们被应用到一个盒子里，然后被画在盒子的下面。默认情况下，背景延伸到了边界外沿。这通常是OK的，但是在一些情况下比较讨厌（假使你有一个平铺的背景图，你只想要它延伸到内容的边沿会怎么做？），该行为可以通过设置盒子的background-clip属性来调整。
12.	行高最佳实践
line-height 属性设置文本每行之间的高，可以接受大多数单位 length and size units，不过也可以设置一个无单位的值，作为乘数，通常这种是比较好的做法。无单位的值乘以 font-size 来获得 line-height。当行与行之间拉开空间，正文文本通常看起来更好更容易阅读。推荐的行高大约是 1.5–2 (双倍间距。) 所以要把我们的文本行高设置为字体高度的1.5倍。
13.	有序列表
有时可能想在有序列表上进行不同的计数方式。例如： 从1以外的数字开始，或向后倒数，或者按步或多于1计数，或者指定列表项的序数值，这些都可以使用CSS一些工具来实现。
14.	链接样式设置
链接有很多状态，都可以使用伪类来表示。
    Link (没有访问过的): 这是链接的默认状态，当它没有处在其他状态的时候，它可以使用:link 伪类来应用样式。
    Visited: 这个链接已经被访问过了(存在于浏览器的历史纪录), 它可以使用 :visited 伪类来应用样式。
Focus: 一个链接当它被选中的时候 (比如通过键盘的 Tab  移动到这个链接的时候，或者使用编程的方法来选中这个链接 HTMLElement.focus()) 它可以使用 :focus 伪类来应用样式。
Hover: 当用户的鼠标光标刚好停留在这个链接，它可以使用 :hover 伪类来应用样式。
Active: 一个链接当它被激活的时候 (比如被点击的时候)，它可以使用 :active 伪类来应用样式。
即便不进行如何设置，链接也是具有一些默认状态的：  
•	链接具有下划线。 
•	未访问过的 (Unvisited) 的链接是蓝色的。  
•	访问过的 (Visited) 的链接是紫色的.  
•	悬停 (Hover) 在一个链接的时候鼠标的光标会变成一个小手的图标。  
•	选中 (Focus) 链接的时候，链接周围会有一个轮廓，你应该可以按 tab 来选中这个页面的链接 (在 Mac 上, 你可能需要使用Full Keyboard Access: All controls 选项，然后再按下 Ctrl + F7 ，这样就可以起作用)  
•	激活 (Active) 链接的时候会变成红色 (当你点击链接时，请尝试按住鼠标按钮。)   
设置链接样式时的顺序非常重要，因为链接的样式是建立在另一个样式之上的，比如第一个规则的样式会应用到所有后续的样式，如果当一个链接被激活 (activated) 的时候，它也是处于悬停 (hover) 状态的。如果你搞错了顺序，那么就可能不会产生正确的效果。要记住这个顺序，你可以尝试这样帮助记忆：LoVe Fears HAte.
Link, visited, focus, hover, active 
15.	改变box model
正常默认的盒模型里，一个盒子的总宽度是它的width， padding-right，padding-left，border-right和border-left属性之和。 在某些情况下比较麻烦（例如，要是您想要一个宽度为50％的盒子（box），边界（border）和内边距（padding）以像素为单位怎么办？）为了避免这种问题，可以使用属性box-sizing调整盒模型，将其设置为 border-box，这个时候所设置的width, height值就是 content + border + padding的值，而不再只是content的值。
16.	Display分类
Display实际上有很多种，但是常见的有三种： block, inline, inline-block;
行内块盒（inline-block box）介于前两者之间： 它会像行内盒一样，跟随周围的文本流堆放，不会在其前后创建换行；不过，它可以像块盒一样，使用宽度和高度设置大小，并且维护其块完整性 — 它不会跨段落行换行（对于一行文本容纳不下的行内盒，会落到第二行上，因为第一行上没有足够的空间容纳它，并且不会跨两行换行）
另外还有一些功能比较强大的，如table, flex, grid：
display: table — 允许你像处理table布局那样处理非table元素，而不是滥用HTML的<table>标签来达到同样的目的。  
display: flex — 允许你处理一些困扰CSS已久的一些传统布局问题，例如布置一系列弹性等宽容器或者垂直居中内容。  
display: grid — 给出一种简单实现CSS网格系统的方式，而在传统上它依赖于一些棘手难以处理的CSS网格框架，  
17.	背景
多背景是在IE9之后才被支持的，如果在老的浏览器中想要采用多背景，必须使用多层div来完成。
background-image还有另一组可用的值——颜色渐变，渐变就是在背景中平滑的颜色过渡。动态生成的渐变是在不久之前引入的，这是因为在web设计中使用渐变是非常受欢迎的，但是使用背景图像来实现渐变是相当不灵活的。目前有两种类型的渐变——线性渐变(从一条直线到另一条直线)和径向渐变(从一个点发散出来)。
线性渐变是通过linear-gradient()函数传入的，它是一个background-image属性的值。函数至少需要用逗号分隔的三个参数——背景中渐变的方向，开始的颜色和结尾的颜色，如：
   background-image: linear-gradient(to bottom, orange, yellow);
background-size属性可以用来动态改变背景图像的大小，也是在IE9才开始支持的，旧浏览器不支持。
18.	边界border
圆角边界可以使用border-radius来实现，这是在IE9中才开始支持，对于旧的浏览器，要想实现圆角边界，需要使用多层div使用不同的背景图像来实现。还可以创建椭圆形角（x半径与y半径不同）。两个不同的半径用正斜杠（/）分隔即可。  
/* 1st value is top left and bottom right corners,  
   2nd value is top right and bottom left  */  
border-radius: 20px 10px;  
/* 1st value is top left corner, 2nd value is top right 
   and bottom left, 3rd value is bottom right  */  
border-radius: 20px 10px 50px;  
/* top left, top right, bottom right, bottom left */  
border-radius: 20px 10px 50px 0;  
在最新的浏览器（IE11）中支持边界图像： border-image，在旧浏览器中，也是利用多层重叠背景来实现，border-image属性在实现原理和使用上面都是有些复杂的。
19.	Table样式
使用 table-layout: fixed 创建更可预测的表布局，可以通过在标题width中设置width来轻松设置列的宽度。  
使用 border-collapse: collapse 使表元素边框合并，生成一个更整洁、更易于控制的外观。  
使用thead, tbody和tfoot 将表格分割成逻辑块，  
使用斑马线来让其他行更容易阅读,here set tbody  tr background image noise.png  
使用 text-align直线对齐您的th和td文本，使内容更整洁、更易于跟随。  
  
20.	阴影
text-shadow属性允许将一个或多个阴影应用到元素的文本上。对于盒子来说，存在一个等价的属性——box-shadow允许将一个或多个阴影应用到一个实际的元素盒子中。这两个都是在IE9+才支持。也可以指定多个阴影，使用逗号分隔。
  两个里面都有四个值：box-shadow: 5px 5px 5px rgba(0,0,0,0.7);  
    第一个长度值是水平偏移量（horizontal offset ）——即向右的距离，阴影被从原始的框中偏移(如果值为负的话则为左)。  
    第二个长度值是垂直偏移量（vertical offset）——即阴影从原始盒子中向下偏移的距离(或向上，如果值为负)。  
    第三个长度的值是模糊半径（blur radius）——在阴影中应用的模糊度。  
颜色值是阴影的基本颜色（base color）。  
对于box-shadow而言，还有一个区别与text-shadow的地方，在偏移量之前可以有inset/outset可选。

21.	使用浮动来实现页面布局，
浮动元素存在于正常的文档布局流之外，因此导致在某些方面行为怪异，首先，他们在父元素中所占的面积有效高度为0；其次，非浮动元素的外边距不能用于它们和浮动元素之间创建空间。
       浮动经常用来实现页面布局，因为它可以很好的被旧的浏览器支持，但是也有一些副作用需要克服。
一个问题是宽度计算问题，比如添加padding, margin等样式时会容易导致总宽度过大而使得其中Float部分被挤到下一行。这个问题可以通过box-sizing为border-box更改盒模型来解决，这只适用于IE8+，盒子的宽度取值为 content + padding + border，而不仅是之前的content——所以当增加内边距或边界的宽度时，不会使盒子更宽——而是会使内容调整得更窄。
解决“其次”问题的方法，创建一个空白的div，设置其clear:both，放到浮动元素和需要和浮动元素垂直保持距离的元素之间，这样，位于此空白div下面的元素设置Margin就是起作用的了。
多列布局时，还会出现列的高度不同的情况，这个时候可以将各浮动列设置相同的高度，或将背景设置为父元素的背景以遮挡列的高度不同。

22.	Flexbox 弹性盒子布局
模型术语：
![结构](https://github.com/960761/myCodeGarden/blob/master/_posts/img/flex.png)
一个无单位的比例值，表示每个 flex 项沿主轴的可用空间大小。
还可以指定 flex 的最小值
 
article {
  flex: 1 200px;
}
article:nth-of-type(3) {
  flex: 2 200px;
}
这表示“每个flex 项将首先给出200px的可用空间，然后，剩余的可用空间将根据分配的比例共享“。
更多更高级功能参考https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox

