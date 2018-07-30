1.	具体实现一个页面之前，一定要有整体框架的设计  
可以按照 header, main, section, footer等使用语义标签进行文档架构，比如demo_03/04，也可以使用普通的div，不同的id or class来进行架构，比如demo05，目的只有一个，就是文档的结构布局一定要系统且清晰。

2.	进行style的第一步一般是对整体元素的设计  
一般包括body的padding, margin置零，为了消除浏览器默认格式的影响，还有整体字体，颜色的设计；
一般还有li: list-style:none, a: text-decoration: none, a: color: black等，都是为了消除默认格式，也要具体情况具体分析，如果文档中大部分需要保留li style，那么就不需要在这里set none；
或者，如果文档中大部分都用到的属性，比如text-align等，也可以放在这里。

3.	实现某种特定的效果会有多种方式，综合分析选择最佳方式  
一种视觉效果的分析会有很多种方式，尽量多考虑下每种方式的利弊，对其他部分的影响，选择相对最佳方式，
也因为如此，要形成自己的风格，尤其在看别人的demo时，因为每种效果有多种实现方式，所以不要盲目借用别人的方式，而要去分析对比，要形成自己的一套常用方式和风格。

4.	注意flex box和grid的使用  
Flex box主要是为了简化之前的float, align等排版问题，但是更为简洁，而且没有太多副作用，另外，单个元素也可以借用flex box 实现完美对齐（水平对齐+垂直对齐）；
Grid主要是为了替代之前的table表格布局，功能也很强大；
因此，遇到布局问题时，尽量多使用这两种方式，尽量避免float, table布局，这两种方式如果使用恰当可以实现几乎各种排版布局效果。可以参考demo 03_product page的实现。

5.	注意inline-block的使用  
涉及到table样式的布局也可以使用inline-block来实现，可以参考demo 05_personal page的实现。
一个元素被设置为inline-block后，其父元素的定位属性，比如text-align，对此元素及此元素里的文本都是有影响的。

6.	注意细节的搜集和经验的积累  
每次完成一个页面后，要注意其中涉及到的 知识点 的积累，包括某个理论的理解，某种效果的多种实现等，因为CSS的细节太多，这些细小的点不是一下子可以完全掌握的，只能依靠多实践，遇到之后就积累下来。CSS不仅需要理论，而且需要大量的实践。

7.	使用border进行调试  
使用border时，style是必须的，否则默认none不会显示， width默认是medium。
 
8.	水平navbar的实现    
文档结构上，可以使用传统的li include a， 也可以使用 div include a；  
格式上，可以使用flex也可以使用 inline-block，  
通常情况下只有a clickable，如果想要整个区域为clickable，  
a.	使用li时，必须使用a 包含li or div or img；  
因为，对于水平navbar，li 必须设置为inline or inline-block，但是一旦如此设置，a set block 便不可以使得area clickable，
只有当li 不进行任何display 设置时，才可以使得a set block时 area clickable。
即便不对li进行display设置，如果使用了flex对li 进行布局，也会使得a set block失去作用，
参考所有demo中水平navbar 都是不可以area clickable，05_personal page中projects可以，使用的a include div and img。  
b.	不使用li时，直接使用a ，设置inline-block后进行设置，参考05_personal page中contact实现；  
上面两种推荐第二种。   
对于垂直nav bar，因为不需要对其设置inline or inline-block，因此，可以通过a block来实现。   
 
9.	Header固定位置的实现     
将需要固定的部分放在一起，设置fixed，最关键的一点是设置其背景色，对于下面文档内容的处理有两种方式，
第一是设置relative/absolute，然后top= xx px，这种方式会导致内容透过fixed part显示出来，所以还需要对fixed part设置z-index；
第二种方式是不设置position，而是通过padding-top实现，这种方式比较简单，也不会出现内容透视的情况。
推荐第二种。以上也适用于navbar 靠左或右固定的情况。  
三个demo中都有固定header or navbar的实现，可以参考。

10.	对齐的实现  
水平对齐，可以使用传统的text-align( text or inline )或者 margin:auto( block with width)也可以使用flexbox；
垂直对齐，对于文本可以使用 height == line-height，或者使用flexbox  or grid，使用flex or grid实现对齐非常方便简单。

11.	表格布局的实现  
比如personal page中的project部分，
可以使用grid 方式，也可以使用inline-block 方式实现。
Inline-box还是非常方便的，会自动换行适应宽带变化，grid虽然也可以，但相比Inline-block稍显复杂。


一般步骤：  
拿到页面效果后，  
首先，进行整体规划，主要是文档结构的规划，使用header, main, footer或div等，并根据整体规划完成Html 文档；  
其次，开始逐个部分完成CSS。  
具体步骤为，
首先为global element style，除了包括body, li, a等去除默认样式外，还有整体字体和颜色的设计也在这里进行；
然后，针对文档中每一部分，从上到下进行实现；
实现了静态的页面效果之后，再进行responsive的实现，主要是@media的使用，用来针对view port width变化时进行响应。  
最后，调试，发现解决问题，完善细节。
