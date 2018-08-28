Task02 notes:
1.	良好的HTML文档结构可以使得CSS的效果事半功倍，
书写逻辑架构清晰的HTML文档对于CSS的使用非常重要，例如这个task中article tag的使用使得对多篇文章格式设置一致且高效，对table中thead, tbody, tfoot的使用逻辑结构清晰，格式化也很方便，对form中使用规范的label和Input，而不是简单使用p 标签来进行标记，使得grid可以发挥其强大的作用。
2.	水平navbar的实现
这里使用li include a ，
实现水平，第一，使用flex；第二，设置li float left。
实现link area clickable，将 a 设置为display: inline-block，其宽度设为width：100%，默认元素高度是由内容而定，若想高度为整个块，需要设定特定值，这里设a height 7vh，将最里层的元素高度进行设定后，外层的高度包裹着它，高度自然也被设置了，这个时候文本不再垂直对齐，想实现垂直对齐使用line-height = height。

3.	固定Header后下面内容的处理
这里将header设置为了固定，position set fixed，下面main部分的内容为了避免遮挡重复，需要设置main的 padding-top属性，这里只能使用padding-top；如果对main使用position: relative ; top:xx， 还需要对Header设置z-index；如果对main使用margin-top，这时候对main里面的第一个元素article使用margin-top时会出现预想不到的结果，所以使用padding-top是最安全的。

4.	Table格式化
对表格table的高校格式化需要以逻辑结构清晰的html文档为基础，这里指的是要正确恰当规范使用table, caption , thead, tbody, tfoot, th, td等元素，然后再使用CSS格式化。

5.	Form格式化
对form使用grid进行格式化需要逻辑结构清晰的html文档，这里指要规范使用label, input等，不要使用p来替代label，对于radio group, checkbox group要结合为一个整体div。
