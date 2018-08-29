1.	三栏式布局实现
左右两列固定宽度，中间列宽度根据浏览器自适应变化，这种布局很常用，实现方式通常由：
Float方式，
Absolute position方式（无法消除高度塌陷问题）
Flex方式
Grid方式
前两种为经典方式，后两者现代浏览器才支持；若侧重浏览器兼容性推荐float，若侧重便捷性安全性推荐flex。

2.	注意盒模型问题
注意box-sizing: border-box的使用，对于普通的盒模型，所设置的width为content的宽度；当设置为border-box时，width = padding+content+border，注意，是不包括margin的。这里因为Left，right列都是固定宽度的，所以为了防止border, padding破坏布局，这里将盒模型设置为border-box，且因为margin是不包含里面的，所以在设置width的时候，注意将Margin值减去。

3.	Flex
对于flex item，有三个值要注意：
Flex-grow, flex-shrink，用来specify how much a flex item will grow or shrink relative to other flex items。
Flex-basis则用来设置flex item的初始尺寸。
三者可以合成一个参数flex: flex-grow   flow-shrink  flow-basis
这里左列宽度固定，因此设为flex: 0 0 170px; 0表示固定不变，170 = 200-15*2，减去左右margin的值；
右列固定，因此设为flex: 0 0 90px; 0表示固定不变，90=120-15*2，减去左右margin的值；
中间列自适应浏览器宽度，因此flex: 1 1 auto。

Flex布局默认情况下每一列高度相同，若想让其各自高度自定，可通过align-items: flex-start来实现。
